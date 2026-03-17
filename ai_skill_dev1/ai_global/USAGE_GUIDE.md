# 🚀 USAGE GUIDE - Cómo Usar el Sistema de Agentes

**Versión**: 1.0.0  
**Fecha**: 2026-03-16  
**Autor**: Metodología AI SKILL DEVELOPMENT

---

## 📋 Tabla de Contenidos

1. [Invocar un Agente](#invocar-un-agente)
2. [Protocolo de Visibilidad](#protocolo-de-visibilidad)
3. [Convenciones de Nombres](#convenciones-de-nombres)
4. [Workflow Típico por Proyecto](#workflow-típico-por-proyecto)
5. [Gate de Autorización](#gate-de-autorización)
6. [Transiciones entre Agentes](#transiciones-entre-agentes)

---

## 🎯 Invocar un Agente

### Formato Obligatorio

```
{emoji} @{nombre_corto} · {Rol} · FASE {X.X}
🎯 skill: {skill_activo}
📋 tarea: {descripción breve de lo que va a hacer}
```

### Tabla de Emojis por Agente

| Agente | Emoji | Nombre Corto | Rol |
|--------|-------|-------------|-----|
| Kakashi | 🧠 | @kakashi | Analista/Arquitecto |
| Naruto | 👨‍💻 | @naruto | Dev Senior |
| Sasuke | 🥷 | @sasuke | Optimizador/Seguridad |
| Sakura | 🧪 | @sakura | QA Tester |
| Pelonchas | 🗄️ | @pelonchas | Especialista BD |

### Ejemplos Reales

**Ejemplo 1** - Kakashi investigando:
```
🧠 @kakashi · Analista/Arquitecto · FASE 2.3
🎯 skill: knowledge_synthesizer
📋 tarea: Generar knowledge base de APIs de brokers (IBKR + Alpaca)
```

**Ejemplo 2** - Naruto implementando:
```
👨‍💻 @naruto · Dev Senior · FASE 3
🎯 skill: react_code_generator
📋 tarea: Implementar componente WatchlistPanel con datos en tiempo real
```

**Ejemplo 3** - Sasuke optimizando:
```
🥷 @sasuke · Optimizador/Seguridad · FASE 3
🎯 skill: security_auditor
📋 tarea: Auditar que NO hay credenciales de broker en código
```

---

## 📢 Protocolo de Visibilidad

### Cabecera de Inicio

SIEMPRE mostrar cuando un agente inicia tarea:

```
---
{emoji} @{nombre} · {Rol} · FASE {X.X}
🎯 skill: {skill_activo}
📋 tarea: {descripción}
---
```

### Línea de Completación

SIEMPRE mostrar cuando un agente termina bloque de trabajo:

```
✅ @{nombre} completó · {skill} · output: {artefactos}
```

**Ejemplo**:
```
✅ @picoro completó · knowledge_synthesizer · output: knowledge/local/01_broker_api_research.md, workflow_agents.yaml
```

### Transición entre Agentes

SIEMPRE mostrar cuando pasa control a otro agente:

```
---
➡️ Transición de agente
   @{saliente} ──→ @{entrante} · FASE {X.X}
   Contexto pasado: {qué información se transfiere}
---
```

**Ejemplo**:
```
---
➡️ Transición de agente
   @picoro ──→ @goku · FASE 3
   Contexto pasado: config.yaml, workflow_agents.yaml, knowledge base completa
---
```

---

## 🔤 Convenciones de Nombres

### Proyectos

```
pwa_{nombre}_{autor}

Ejemplo: pwa_inversions_drfic
```

### APIs REST

```
rest_api_{nombre}_{autor}

Ejemplo: rest_api_inversions_drfic
```

### Tickets

```
TKT-{PROYECTO}-###

Global:     TKT-GLOBAL-001
Proyecto:   TKT-INVRFIC-005
```

### Archivos de Knowledge

```
local/
  {numero:2d}_{tema}_{tipo}.md
  
  Ejemplo: 01_broker_api_research.md
           02_charting_library_research.md
           lesson_options_chain_latency.md

remote/
  {nombre}_{categoria}_reference.md
  
  Ejemplo: ibkr_api_reference.md
           tradingview_widgets_reference.md
```

---

## 🔄 Workflow Típico por Proyecto

### PASO 1: Kakashi Analiza (FASE 2.3)

```
🧠 @kakashi · Analista/Arquitecto · FASE 2.3
🎯 skill: ticket_analyzer
📋 tarea: Analizar SPECIFICATION.md

[Kakashi analiza:]
- Requerimientos funcionales ✅
- APIs necesarias ✅
- Bases de datos ✅
- Gaps identificados (si hay)

✅ @kakashi completó · ticket_analyzer · output: análisis_ticket.md
```

### PASO 2: Kakashi Investiga (FASE 2.3)

```
🧠 @kakashi · Analista/Arquitecto · FASE 2.3
🎯 skill: knowledge_synthesizer
📋 tarea: Generar knowledge base de brokers y APIs

[Kakashi crea:]
- 01_broker_api_research.md
- 02_charting_library_research.md
- 03_technical_indicators_patterns.md
- 04_options_strategies_decisions.md
- 05_ai_signal_analysis_strategy.md
- Referencias en knowledge/remote/

✅ @kakashi completó · knowledge_synthesizer · output: knowledge/local/*, knowledge/remote/*
```

### PASO 3: Kakashi Diseña (FASE 2.4)

```
🧠 @kakashi · Analista/Arquitecto · FASE 2.4
🎯 skill: architecture_designer
📋 tarea: Diseñar arquitectura PWA + REST API

[Kakashi diseña:]
- Estructura de src/ (componentes, services, features)
- Estructura de REST API (models, routes, controllers)
- Flujo de datos
- Integración de brokers

✅ @kakashi completó · architecture_designer · output: config.yaml, workflow_agents.yaml

---
➡️ Transición de agente
   @kakashi ──→ @naruto + @pelonchas · FASE 3
   Contexto pasado: Arquitectura documentada, knowledge base, configuración
---
```

### PASO 4: Naruto Implementa (FASE 3)

```
👨‍💻 @naruto · Dev Senior · FASE 3
🎯 skill: code_structure_organizer
📋 tarea: Crear estructura de carpetas src/

[Naruto crea:]
- src/components/ui/
- src/features/dashboard/
- src/services/broker/
- src/hooks/
- src/store/
- src/utils/
- src/types/

✅ @naruto completó · code_structure_organizer · output: src/ estructura completa
```

### PASO 5: Naruto Implementa Feature (FASE 3)

```
👨‍💻 @naruto · Dev Senior · FASE 3
🎯 skill: broker_api_integrator
📋 tarea: Implementar conexión con Interactive Brokers

[Naruto implementa:]
- src/services/broker/ibkr.connector.ts
- Métodos: connect(), subscribeMarketData(), placeOrder()
- Manejo de errores y reconexión
- Comentarios FIC en inglés+español
- Tests básicos

✅ @naruto completó · broker_api_integrator · output: src/services/broker/ibkr.connector.ts, tests/

---
➡️ Transición de agente
   @naruto ──→ @sasuke + @sakura · FASE 3
   Contexto pasado: Código implementado, tests básicos
---
```

### PASO 6: Sasuke + Sakura Trabajan en Paralelo (FASE 3)

**Sasuke optimiza**:
```
🥷 @sasuke · Optimizador/Seguridad · FASE 3
🎯 skill: security_auditor
📋 tarea: Auditar credenciales en broker_connector

[Sasuke audita:]
❌ CRÍTICA: API key hardcoded en línea 42
✅ FIX: Mover a .env

✅ @sasuke completó · security_auditor · output: audit_report.md, código corregido
```

**Sakura testa** (en paralelo):
```
🧪 @sakura · QA Tester · FASE 3
🎯 skill: test_case_generator
📋 tarea: Crear tests para broker_connector

[Sakura crea:]
- tests/broker/ibkr.connector.test.ts
- Test: conexión correcta ✅
- Test: parsing OHLCV ✅
- Test: manejo de errores ✅
- Coverage: 87%

✅ @sakura completó · test_case_generator · output: tests/broker/ibkr.connector.test.ts
```

---

## 🔓 Gate de Autorización

### Cuándo Usamos Gates

Gates bloquean automáticamente si falta información crítica.

**Gates actuales**:
- DATABASE_SELECTION_GATE (FASE 2.2)
- DATABASE_MODEL_GATE (FASE 2.2)
- SPECIFICATION_GATE (FASE 2.3)

**Ejemplo de gate**:
```
⛔ DATABASE_SELECTION_GATE
Antes de continuar necesito saber qué bases de datos usará el proyecto.

Opciones: Supabase, MongoDB, PostgreSQL, MySQL, SQLite, Firebase

Indícame exactamente cuáles usarás.
```

---

## ➡️ Transiciones entre Agentes

### Orden Obligatorio

```
FASE 2.3: Kakashi investiga
            ↓
FASE 2.4: Kakashi diseña → Pasa a Naruto + Pelonchas
            ↓
FASE 3:   Naruto + Pelonchas trabajan
            ↓
          Sasuke + Sakura trabajan en paralelo
            ↓
          Aprobación final
```

### Pedir Confirmación

Antes de cada transición, preguntar explícitamente:

```
@kakashi completó análisis y diseño.

¿Confirmas que Naruto puede iniciar FASE 3?
```

---

## ✅ Checklist para Proyecto Nuevo

- [ ] DATABASE_SELECTION_GATE ejecutado
- [ ] SPECIFICATION.md creado en ruta oficial
- [ ] Invocar @kakashi para FASE 2.3
- [ ] Esperar completación de knowledge base
- [ ] Invocar @picoro para FASE 2.4
- [ ] Esperar config.yaml y workflow_agents.yaml
- [ ] Confirmar transición a @goku
- [ ] Monitorear progreso de @goku
- [ ] Cuando @goku presente código listo → @vegeta + @bulma
- [ ] Revisar reportes de optimización y tests
- [ ] Autorizar cierre de ticket

---

**Más información**: Ver `ai_global/agents/README.md` y `ai_global/skills/README.md`
