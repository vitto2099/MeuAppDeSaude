<div align="center">
  <h2>UNIVERSIDADE DO CONTESTADO (UNC)</h2>
  <h3>CURSO DE ENGENHARIA DE SOFTWARE</h3>
  <br/><br/><br/>
  <h1>RELATÓRIO TÉCNICO-ACADÊMICO FINAL</h1>
  <h2>Projeto: Meu App de Saúde</h2>
  <br/><br/><br/>
  <p>Documento descritivo das metodologias, arquitetura, validações clínicas e resultados técnicos obtidos durante o desenvolvimento do software.</p>
</div>

<br/><br/><br/>
<hr/>

## 1. Introdução e Contextualização do Projeto

**O que é o projeto?**
O **Meu App de Saúde** é uma solução computacional móvel (*mobile*) projetada para auxiliar o paciente no monitoramento autônomo do seu quadro clínico. O aplicativo foi arquitetado visando a inclusão digital e a acessibilidade, focado especialmente no público idoso ou com dificuldades tecnológicas.

**Qual o problema que resolvemos?**
O principal problema identificado foi a dificuldade de pacientes em tratamento contínuo na adesão medicamentosa e na lembrança de sintomas ocorridos ao longo do mês. O aplicativo resolve essa dor ao centralizar o registro de humor, sinais vitais e estoque de farmácia diretamente na palma da mão do usuário.

---

## 2. Metodologia: Fases, Equipes e Validação

O desenvolvimento foi orquestrado em três grandes fases, com papéis e responsáveis claramente definidos.

### 2.1 Fase 1: Levantamento de Requisitos e Histórias de Usuário
- **Responsáveis por esta etapa:** A equipe da primeira fase focou inteiramente na ideação clínica, desenhando os cenários de uso e redigindo as Histórias de Usuário.
- **Validação Clínica:** Em colaboração conjunta com a **Terceira Fase**, foram conduzidas extensas pesquisas no **Google Forms** direcionadas aos coordenadores e alunos de **Farmácia, Enfermagem, Educação Física, Psicologia e Fisioterapia**. Isso garantiu embasamento médico e interdisciplinar irrefutável aos requisitos.

### 2.2 Fase 2 e Fase 3 (Parte 1): Modelagem Arquitetural e UML
- **Responsáveis por esta etapa:** Wesley, João e Thomas elaboraram as regras de diagramação UML, estruturaram os casos de uso do projeto e idealizaram o plano lógico-relacional do banco de dados (A ideia central dos 5 monólitos nasceu aqui).

### 2.3 Fase 3 (Parte 2): Desenvolvimento e Programação Prática
A equipe da terceira fase foi responsável por dar vida ao protótipo e desenvolver o App e todas as telas:
- **João, Daniel e Vinícius:** Desenvolvimento funcional do módulo de Farmácia, atuação pesada na correção de bugs gerais (*bug fixing*) e implementação dos lembretes via notificações push locais.
- **Natália e Lucas:** Levantamento, codificação completa e fechamento do fluxo do módulo de Enfermagem.
- **Leônidas e Isabela:** Criação e estilização estrutural do design das telas de fundo (*backgrounds*), padronizando a paleta visual do projeto.
- **Vitor Camargo Kunicki:** Atuação macro como *Tech Lead*. O papel consistiu em promover o desbloqueio técnico de todos os membros, conectar o trabalho de banco de dados com a programação front-end e garantir que o projeto avançasse fluidamente.

*Agradecimentos Especiais:* O projeto foi fortemente amparado e guiado pela sabedoria técnica e acadêmica dos professores **Anthony Zub, Marcelo Semmer, Leandro Bona e Luis Claudio**.

---

## 3. UML e a Jornada do Paciente (Estórias na Prática)

Para materializar o Levantamento de Requisitos e os Casos de Uso (UML), criamos uma **jornada do usuário** fluida pelo aplicativo. Como o paciente "anda" pelo app?

1. **Acesso (Login/Cadastro):** O caso de uso inicial. O paciente entra no aplicativo, preenche dados biométricos essenciais, e o sistema já aplica as regras de UML calculando imediatamente o seu IMC.
2. **Dashboard (Menu Central):** O usuário é recepcionado por cartões grandes e coloridos para cada área da saúde, focado na acessibilidade visual (RNF01).
3. **Ações e Histórias de Usuário nas Telas:**
   - *Como paciente, quero registrar meu humor:* O usuário clica em "Saúde Mental" e escolhe a emoção do dia. A ação persiste a data e o emoji diretamente no estado (*Zustand*).
   - *Como paciente, quero controlar meu remédio:* O usuário navega para a tela "Farmácia", cadastra um novo medicamento e ativa um lembrete (Push Notification). Ao afirmar que tomou a medicação, o sistema debita automaticamente do estoque.
   - *Como paciente, quero medir minha saúde:* Na interface de "Enfermagem / Sinais Vitais", o paciente digita que sua pressão está "150/100". Seguindo as validações clínicas recolhidas nos Forms, a interface grita um alerta de cuidado para que o paciente busque a emergência.

---

## 4. Arquitetura e Modelagem de Dados

### 4.1 A Escolha dos 5 Monólitos Independentes
O coração tecnológico idealizado pela equipe de Banco de Dados é a sua divisão em **5 Monólitos**: (1) Saúde Mental, (2) Lembretes, (3) Sinais Vitais, (4) Corpo e Movimento e (5) Administração. 

Cada módulo trabalha com seu próprio repositório **SQLite**. O isolamento evita que um colapso lógico no cadastro de humor derrube o cadastro cardiológico, por exemplo. O 5º monólito (Administração) consome apenas dados estatísticos de forma cega (anonimizados), respeitando severamente a **Lei Geral de Proteção de Dados (LGPD)**.

### 4.2 Documentação Visual (Diagramas do Projeto)

**Diagramas de Casos de Uso (UML Nativo)**
Todo o mapeamento da jornada do paciente pelas áreas da saúde foi modelado na arquitetura abaixo. O primeiro diagrama representa a estrutura técnica de persistência (os 5 monólitos), e o segundo demonstra a jornada prática do paciente baseada nos requisitos (RF01 a RF48).

#### 1. Componentes e Persistência (Offline-First)
<div align="center">
  <img src="file:///c:/Users/Vitor/Desktop/DEV/MeuAppDeSaude/RELATORIO%20FINAL/Documentos/Monolitos%20UML.png" width="800" />
  <p><i>Figura 4: Monólitos UML e Persistência Local vs Nuvem</i></p>
</div>

#### 2. Casos de Uso Massivo (Jornada do Paciente)
<div align="center">
  <img src="file:///c:/Users/Vitor/Desktop/DEV/MeuAppDeSaude/RELATORIO%20FINAL/Documentos/uml%20copy.png" width="800" />
  <p><i>Figura 5: Jornada do Paciente (Casos de Uso)</i></p>
</div>

<div align="center">
  <img src="file:///c:/Users/Vitor/Desktop/DEV/MeuAppDeSaude/RELATORIO%20FINAL/Documentos/Monolito.png" width="500" />
  <p><i>Figura 1: Visão Estrutural (Monolito.png)</i></p>
</div>

<br/>

<div align="center">
  <img src="file:///c:/Users/Vitor/Desktop/DEV/MeuAppDeSaude/RELATORIO%20FINAL/Documentos/plano.png" width="500" />
  <p><i>Figura 2: Estratégia de Organização e Plano Técnico (plano.png)</i></p>
</div>

<br/>

<div align="center">
  <img src="file:///c:/Users/Vitor/Desktop/DEV/MeuAppDeSaude/RELATORIO%20FINAL/Documentos/Plano%20Monolito.png" width="500" />
  <p><i>Figura 3: A Divisão Clássica dos Monólitos no Backend</i></p>
</div>

---

## 5. Resultados Práticos (O Aplicativo Final)
Para o desenvolvimento em si, adotamos **React Native com TypeScript**. Assumimos uma arquitetura **"Offline-First"** (usando *Zustand* e *AsyncStorage*). Isso foi feito porque sabemos que hospitais e clínicas populares muitas vezes sofrem com a falta de sinal de internet, e o paciente não pode perder a capacidade de usar o aplicativo nessas zonas.

*Abaixo, como as etapas de equipe se materializaram nas telas reais:*

**Acesso, Cadastro e Sinais Vitais:**
<div align="center">
  <img src="file:///c:/Users/Vitor/Desktop/DEV/MeuAppDeSaude/RELATORIO%20FINAL/Imagens%20do%20Projeto/Login.png" width="200" />
  <img src="file:///c:/Users/Vitor/Desktop/DEV/MeuAppDeSaude/RELATORIO%20FINAL/Imagens%20do%20Projeto/Cadastro.png" width="200" />
  <img src="file:///c:/Users/Vitor/Desktop/DEV/MeuAppDeSaude/RELATORIO%20FINAL/Imagens%20do%20Projeto/SinaisVitais.png" width="200" />
</div>

**Farmácia e Controle de Estoque (Lembretes):**
<div align="center">
  <img src="file:///c:/Users/Vitor/Desktop/DEV/MeuAppDeSaude/RELATORIO%20FINAL/Imagens%20do%20Projeto/Lembretes.png" width="200" />
  <img src="file:///c:/Users/Vitor/Desktop/DEV/MeuAppDeSaude/RELATORIO%20FINAL/Imagens%20do%20Projeto/EstoqueLembretes.png" width="200" />
</div>

---

## 6. Conclusões, Desafios e Próximos Passos

### 6.1 O que Construímos (Desafios Superados)
A estruturação de um aplicativo na área da saúde é densa. O projeto provou ser relativamente **desafiador**, exigindo que a equipe dominasse rapidamente diversas frentes interligadas: a visão clínica da dor do paciente (requisitos), a elaboração avançada de UML e arquitetura local, finalizando na programação de alto nível (Push Notifications e AsyncStorage). 
Mesmo frente à forte curva de aprendizado, a integração da equipe permitiu a entrega de um MVP validado, prático e completamente usável.

### 6.2 O que Falta (Continuidade no Próximo Semestre)
Sabemos que o produto tem espaço imenso para crescimento técnico e de mercado. Portanto, **daremos continuidade ao projeto no próximo semestre**. Nosso foco atual de roadmap é:
- **Integração Real na Nuvem:** Fazer as rotas REST do backend existirem fora do cenário local, implementando uma nuvem confiável (AWS/Firebase) para sincronia de dados em tempo real.
- **Painel Médico Administrativo:** Finalizar o 5º monólito criando uma interface Web onde médicos possam ver as estatísticas da população local que usa o app (totalmente anônimo).
- **Expansão de Interatividade:** Desenvolver a parte viva dos botões de "Cartão de Vacinas", "Curativos" e "Exercícios Práticos" que hoje estão mockados na interface.
