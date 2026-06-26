# Plano de Backend e Banco de Dados

## Arquitetura do Sistema

O sistema será desenvolvido utilizando uma arquitetura composta por cinco monólitos independentes, cada um responsável por um domínio específico da aplicação.

Os quatro primeiros monólitos serão responsáveis pelas funcionalidades utilizadas pelos pacientes, enquanto o quinto monólito será destinado exclusivamente ao ambiente administrativo, consolidando informações anonimizadas para geração de relatórios e indicadores.

Cada monólito possuirá seu próprio banco de dados SQLite, permitindo isolamento entre os módulos, maior organização do código e facilidade de manutenção.

A comunicação entre os monólitos ocorrerá por meio de APIs REST desenvolvidas em Node.js.

## Monólitos

### Monólito 1 – Saúde Mental

Responsável pelo gerenciamento de informações relacionadas ao bem-estar emocional.

Principais funcionalidades:

* Diário emocional
* Questionários PHQ-9 e GAD-7
* Contatos de crise
* Histórico emocional

### Monólito 2 – Lembretes

Responsável pela organização da rotina do paciente.

Principais funcionalidades:

* Lembretes de medicamentos
* Agendamento de consultas
* Controle de estoque de medicamentos
* Registro de adesão aos tratamentos

### Monólito 3 – Sinais Vitais

Responsável pelo armazenamento e monitoramento dos sinais vitais.

Principais funcionalidades:

* Frequência cardíaca
* Pressão arterial
* Temperatura corporal
* Saturação de oxigênio
* Glicemia
* Geração de alertas

### Monólito 4 – Corpo e Movimento

Responsável pelo acompanhamento da saúde física.

Principais funcionalidades:

* Histórico corporal
* Registro de exercícios
* Mobilidade
* Escala de dor
* Cálculo de IMC

### Monólito 5 – Administração

Responsável exclusivamente pelo acompanhamento administrativo do sistema.

Este módulo recebe apenas informações anonimizadas dos demais monólitos, impossibilitando o acesso a dados pessoais dos pacientes.

Entre suas funções estão:

* Consolidação dos dados
* Estatísticas gerais
* Dashboard administrativo
* Indicadores de utilização
* Linha do tempo consolidada
* Relatórios gerenciais

## Fluxo de Dados

Os quatro monólitos funcionais recebem e armazenam os dados inseridos pelos pacientes.

Periodicamente, cada módulo envia um resumo anonimizado para o monólito administrativo.

Somente informações estatísticas e indicadores são compartilhados, preservando a identidade dos usuários e atendendo aos princípios da LGPD.

## Tecnologias Utilizadas

### Front-end

* React Native
* TypeScript
* Expo

### Back-end

* Node.js
* Express.js
* APIs REST

### Banco de Dados

* SQLite (um banco independente para cada monólito)

### Autenticação

* Firebase Authentication

### Comunicação

* REST API utilizando JSON

## Segurança

A autenticação dos usuários será realizada pelo Firebase Authentication, eliminando a necessidade de armazenamento de senhas no servidor.

Os bancos de dados armazenarão apenas as informações necessárias ao funcionamento de cada módulo.

O monólito administrativo receberá exclusivamente dados anonimizados, garantindo que administradores não tenham acesso às informações sensíveis dos pacientes.

## Benefícios da Arquitetura

* Separação clara das responsabilidades.
* Facilidade de manutenção.
* Baixo acoplamento entre os módulos.
* Escalabilidade para futuras expansões.
* Maior segurança dos dados.
* Conformidade com os princípios da LGPD por meio da anonimização das informações utilizadas para fins administrativos.
