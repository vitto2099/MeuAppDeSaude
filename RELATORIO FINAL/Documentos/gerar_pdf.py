import os
import sys

try:
    import markdown
    import pdfkit
except ImportError:
    print("Faltam bibliotecas! Instale rodando o comando:")
    print("pip install markdown pdfkit")
    sys.exit(1)

# Pega a pasta onde o script está rodando
script_dir = os.path.dirname(os.path.abspath(__file__))
md_file = os.path.join(script_dir, "Relatorio_Geral_do_Projeto.md")
pdf_file = os.path.join(script_dir, "Relatorio_Geral_do_Projeto.pdf")

print(f"Lendo o arquivo: {md_file}...")

try:
    with open(md_file, "r", encoding="utf-8") as f:
        md_text = f.read()

    # Converte o Markdown para HTML
    print("Convertendo Markdown para HTML...")
    html_body = markdown.markdown(md_text, extensions=['extra', 'tables'])

    # Estrutura HTML básica para aceitar as imagens e acentos (UTF-8)
    html_content = f"""
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <style>
            body {{ font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; }}
            h1, h2, h3 {{ color: #333; }}
            img {{ max-width: 100%; height: auto; }}
            hr {{ border: 1px solid #ccc; }}
        </style>
    </head>
    <body>
        {html_body}
    </body>
    </html>
    """

    print("Gerando o PDF (isso pode levar alguns segundos)...")
    
    # IMPORTANTE: No Windows, o pdfkit exige o executável do wkhtmltopdf.
    # Adicionando o caminho padrão de instalação do wkhtmltopdf no Windows
    path_wkhtmltopdf = r'C:\Program Files\wkhtmltopdf\bin\wkhtmltopdf.exe'
    config = pdfkit.configuration(wkhtmltopdf=path_wkhtmltopdf) if os.path.exists(path_wkhtmltopdf) else None
    
    options = {
        'encoding': "UTF-8",
        'enable-local-file-access': None # Permite carregar as imagens locais
    }
    
    if config:
        pdfkit.from_string(html_content, pdf_file, options=options, configuration=config)
    else:
        pdfkit.from_string(html_content, pdf_file, options=options)
    
    print(f"Sucesso! O arquivo '{pdf_file}' foi gerado na pasta atual.")

except Exception as e:
    print(f"Ocorreu um erro ao gerar o PDF: {e}")
    print("\nDica: Se o erro for sobre o wkhtmltopdf não estar no PATH no Windows, ")
    print("você precisará baixar ele de https://wkhtmltopdf.org/downloads.html")
