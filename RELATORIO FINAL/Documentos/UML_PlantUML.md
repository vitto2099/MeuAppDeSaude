# Códigos PlantUML (Geração de Gráficos UML)

Abaixo estão os códigos em "Plain Text" (PlantUML) para você gerar gráficos UML que **fazem muito mais sentido** com a arquitetura real de vocês (os 5 monólitos e as funcionalidades que vocês efetivamente construíram).

Você pode copiar os blocos de código abaixo e colar no site **[PlantText](https://www.planttext.com/)** ou **[PlantUML Web](http://www.plantuml.com/plantuml/uml/)** para gerar as imagens e baixar.

---

## 1. Diagrama de Componentes (A Arquitetura dos 5 Monólitos)
Esse diagrama prova como o App funciona offline (com SQLite local) e manda os dados anonimizados para a nuvem.

```plantuml
@startuml
skinparam componentStyle uml2
skinparam backgroundColor white

actor Paciente
actor "Administrador (Coordenação)" as Admin

package "Meu App de Saúde (Mobile Offline-First)" {
  [Monólito 1: Saúde Mental] as M1
  [Monólito 2: Lembretes e Farmácia] as M2
  [Monólito 3: Sinais Vitais (Enfermagem)] as M3
  [Monólito 4: Corpo e Movimento] as M4
}

database "SQLite Local (Isolado)" {
  [DB Humor] as DB1
  [DB Lembretes] as DB2
  [DB Sinais] as DB3
  [DB Fisio] as DB4
}

cloud "Servidor / Nuvem" {
  [Monólito 5: Painel Administrativo] as M5
  database "DB Analítico (Anonimizado)" as DB5
}

Paciente --> M1 : Humor/PHQ-9
Paciente --> M2 : Agenda Remédios
Paciente --> M3 : Mede Pressão
Paciente --> M4 : Registra Treino

M1 --> DB1 : Salva Offline
M2 --> DB2 : Salva Offline
M3 --> DB3 : Salva Offline
M4 --> DB4 : Salva Offline

M1 ..> M5 : Sincronização Anonimizada
M2 ..> M5 : Sincronização Anonimizada
M3 ..> M5 : Sincronização Anonimizada
M4 ..> M5 : Sincronização Anonimizada

M5 --> DB5 : Persiste dados LGPD
Admin --> M5 : Visualiza Estatísticas
@enduml
```

---

## 2. Diagrama de Casos de Uso Completo (Visão Geral de Todos os Requisitos)
Este diagrama une todas as áreas da saúde que vocês levantaram nos requisitos (Acesso, Farmácia, Enfermagem, Ed. Física, Psicologia e Fisioterapia) em uma visão única e massiva.

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
skinparam actorStyle awesome

actor "Paciente" as p

package "Acesso e Cadastro (RF01-RF14)" {
  usecase "Realizar Login / Cadastro" as AC1
  usecase "Gerenciar Perfil" as AC2
  usecase "Calcular IMC Automaticamente" as AC3
}

package "Farmácia (RF15-RF21)" {
  usecase "Cadastrar Medicamento" as FA1
  usecase "Controlar Estoque" as FA2
  usecase "Registrar Adesão (Confirmar que Tomou)" as FA3
  usecase "Notificação Push de Horário" as FA4
}

package "Enfermagem e Sinais Vitais (RF22-RF28)" {
  usecase "Registrar Sinais (Pressão, Glicose, BPM)" as EN1
  usecase "Gerenciar Consultas e Exames" as EN2
  usecase "Emitir Alerta de Saúde (Crítico)" as EN3
}

package "Educação Física (RF29-RF35)" {
  usecase "Registrar Treino / Atividade Física" as EF1
  usecase "Calcular Gasto Calórico" as EF2
  usecase "Consultar Biblioteca de Exercícios" as EF3
}

package "Psicologia (RF36-RF42)" {
  usecase "Registrar Diário Emocional" as PS1
  usecase "Responder Questionários (PHQ-9 / GAD-7)" as PS2
  usecase "Acessar Área de Crise (CVV / CAPS)" as PS3
}

package "Fisioterapia (RF43-RF48)" {
  usecase "Registrar Evolução de Mobilidade" as FI1
  usecase "Consultar Exercícios Terapêuticos" as FI2
  usecase "Monitorar Postura e Ergonomia" as FI3
}

' Relações de Acesso
p --> AC1
p --> AC2
AC2 .> AC3 : <<include>>

' Relações de Farmácia
p --> FA1
p --> FA2
p --> FA3
FA1 <.. FA4 : <<extend>> (Lembrete Automático)

' Relações de Enfermagem
p --> EN1
p --> EN2
EN1 <.. EN3 : <<extend>> (Se pressão/glicose for alta)

' Relações de Ed. Física
p --> EF1
EF1 .> EF2 : <<include>>
p --> EF3

' Relações de Psicologia
p --> PS1
p --> PS2
p --> PS3

' Relações de Fisioterapia
p --> FI1
p --> FI2
p --> FI3

@enduml
```
