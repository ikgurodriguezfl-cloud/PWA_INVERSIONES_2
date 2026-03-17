# 🤖 AI SKILL DEVELOPMENT - Sistema Global

**Versión**: 2.2  
**Fecha de Sistema**: 2026-03-16  
**Metodología**: AI SKILL DEVELOPMENT + SPEC DRIVEN ASSISTANCE AI  
**Estado**: ✅ FASE 1 COMPLETADA

---

## 📊 Estado del Sistema

```
📈 PROGRESO GENERAL:

FASE 0 (Setup Único):           ✅ COMPLETADA (2026-03-03)
FASE 1 (Agentes/Skills):        ✅ COMPLETADA (2026-03-16)
FASE 2 (Proyecto):             ⏳ PENDIENTE
FASE 3 (Implementación):       ⏳ PENDIENTE
```

### Estadísticas Actuales

| Recurso | Cantidad | Status |
|---------|----------|--------|
| **Agentes Globales** | 5 | ✅ Documentados |
| **Skills Globales** | 20 | ✅ Documentados |
| **Templates** | 10 | ✅ Disponibles |
| **Knowledge Base** | Estructura lista | 🚧 Se genera FASE 2.3 |
| **Documentación** | 8+ archivos | ✅ Completa |

---

## 🤖 Equipo de Agentes

### 5 Agentes Disponibles

| Emoji | Agente | Rol | FASE | Skills | Estado |
|-------|--------|-----|------|--------|--------|
| 🧠 | **Kakashi** | Analista/Arquitecto | 2.3, 2.4 | 4 | ✅ |
| 👨‍💻 | **Naruto** | Dev Senior | 2.4, 3 | 8 | ✅ |
| 🥷 | **Sasuke** | Optimizador/Seguridad | 3 | 4 | ✅ |
| 🧪 | **Sakura** | QA Tester | 3 | 4 | ✅ |
| 🗄️ | **Pelonchas** | Especialista BD | 2.4, 3 | 3 | ✅ |

**Documentación**: Ver [agents/README.md](agents/README.md)

---

## 🎯 Skills por Categoría

**Total**: 20 Skills globales

- **Análisis**: 4 skills (Picoro, Vegeta)
- **Código**: 10 skills (Goku)
- **Testing**: 4 skills (Bulma)
- **BD**: 3 skills (Krillin)
- **Optimización**: 4 skills (Vegeta)
- **Seguridad**: 1 skill (Vegeta)

**Documentación**: Ver [skills/README.md](skills/README.md)

---

## 📚 Estructura del Sistema

```
ai_skill_dev1/
├── ✅ AI_SKILL_DEVELOPMENT_METHODOLOGY.md (v2.2)
│
├── ai_global/                     # Recursos globales reutilizables
│   ├── ✅ agents/                 # 5 Agentes + README
│   ├── ✅ skills/                 # 20 Skills + README
│   ├── ✅ knowledge/              # local/ + remote/ + READMEs
│   ├── ✅ templates/              # 10 templates
│   ├── ✅ tickets/                # TKT-GLOBAL-001
│   ├── ✅ USAGE_GUIDE.md          # Guía de uso completa
│   ├── ✅ PHASE_1_VALIDATION_CHECKLIST.md
│   └── ✅ README.md (este archivo)
│
├── ✅ development/
│   └── workflow_agents.yaml       # Flujo de agentes base
│
├── packages/                      # Librerías compartidas (futuro)
│   ├── ui-library/
│   ├── utils/
│   └── types/
│
└── projects/                      # Proyectos por categoría
    ├── pwa/
    │   └── pwa_inversions_drfic/  # Proyecto PRINCIPAL
    └── api/
        └── rest_api_inversions_drfic/  # Backend PRINCIPAL
```

---

## 🚀 Cómo Empezar

### Para Usuarios Nuevos

1. **Leer documentación**
   - [USAGE_GUIDE.md](USAGE_GUIDE.md) — Cómo invocar agentes
   - [agents/README.md](agents/README.md) — Qué hace cada agente
   - [skills/README.md](skills/README.md) — Catálogo de skills

2. **Entender el flujo**
   - FASE 2.3: Picoro investiga
   - FASE 2.4: Picoro diseña → Goku + Krillin estructuran
   - FASE 3: Goku implementa → Vegeta + Bulma optimizan/testean

3. **Comenzar proyecto**
   - Ejecutar DATABASE_SELECTION_GATE
   - Crear SPECIFICATION.md
   - Invocar @picoro para FASE 2.3

### Para Desarrolladores (Goku, Vegeta, Bulma)

- Leer [USAGE_GUIDE.md](USAGE_GUIDE.md) para protocolo de activación
- Leer skill específico en `ai_global/skills/`
- Revisar ejemplos en `knowledge/local/` del proyecto
- Seguir convención FIC de comentarios (inglés+español)

### Para Testers (Bulma)

- Tests deben cubrir > 80% del código
- Validar precisión contra TradingView (si aplica)
- Ejecutar en DEV antes de TEST/PROD

### Para DBAs (Krillin)

- Usar templates en `ai_global/templates/DATABASE_CONFIG_TEMPLATE.yaml`
- Crear migraciones versionadas
- Nunca credenciales en código (solo .env)

---

## 📖 Documentación Principal

| Archivo | Propósito |
|---------|-----------|
| [USAGE_GUIDE.md](USAGE_GUIDE.md) | Cómo invocar agentes y protocolo |
| [PHASE_1_VALIDATION_CHECKLIST.md](PHASE_1_VALIDATION_CHECKLIST.md) | Estado de FASE 1 |
| [agents/README.md](agents/README.md) | Matriz de agentes |
| [skills/README.md](skills/README.md) | Catálogo de skills |
| [knowledge/README.md](knowledge/README.md) | Estructura de knowledge base |
| [tickets/README.md](tickets/README.md) | Política de tickets globales |

---

## 🔄 Flujo de Workflow Típico

```
┌─────────────────────────────────────────────────┐
│ PROYECTO NUEVO - Proyecto PWA de Inversiones   │
├─────────────────────────────────────────────────┤
│                                                 │
│ 1️⃣ DATABASE_SELECTION_GATE (Usuario)           │
│    → Selecciona: Supabase + MongoDB             │
│                                                 │
│ 2️⃣ SPECIFICATION.md (Usuario)                  │
│    → Crea especificación                        │
│                                                 │
│ 3️⃣ 🧠 @picoro FASE 2.3 (Investigación)         │
│    → Genera knowledge base                      │
│    → Investigación de brokers, indicadores      │
│                                                 │
│ 4️⃣ 🧠 @picoro FASE 2.4 (Diseño)                │
│    → Diseña arquitectura                        │
│    → Genera config.yaml + workflow_agents.yaml  │
│                                                 │
│ 5️⃣ 👨‍💻 @goku + 🗄️ @krillin FASE 3 (Estructura) │
│    → Goku: Estructura src/                      │
│    → Krillin: Modelos de datos                  │
│                                                 │
│ 6️⃣ 👨‍💻 @goku FASE 3 (Implementación)           │
│    → Implementa broker_connector                │
│    → Implementa indicadores técnicos            │
│    → Implementa motor de señales                │
│                                                 │
│ 7️⃣ 🥷 @vegeta FASE 3 (Paralelamente)           │
│    → Optimiza latencia                          │
│    → Audita seguridad (credenciales)            │
│                                                 │
│ 8️⃣ 🧪 @bulma FASE 3 (Paralelamente)            │
│    → Crea test suite                            │
│    → Valida contra TradingView                  │
│                                                 │
│ 9️⃣ ✅ APROBACIÓN FINAL                         │
│    → Tests > 80% ✅                             │
│    → Credenciales seguras ✅                    │
│    → Bugs críticos: 0 ✅                        │
│    → TICKET CERRADO                            │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## 🎛️ Configuración de Entorno

### Variables de Entorno Requeridas

**NUNCA en código fuente**, solo en `.env`:

```bash
# Brokers (solicitadas en FASE 2.4 por Krillin)
IBKR_API_KEY=xxx
IBKR_ACCOUNT=xxx
ALPACA_API_KEY=xxx

# Bases de Datos (solicitadas por Krillin)
SUPABASE_URL=xxx
SUPABASE_SERVICE_ROLE_KEY=xxx
MONGODB_URI=xxx

# IA (opcional, para análisis confirmatorio)
CLAUDE_API_KEY=xxx
```

**Protocolo**: Krillin genera `.env.example` con nombres de variables, usuario llena valores locales.

---

## 🔐 Protocolo de Seguridad

✅ **SIEMPRE**:
- Credenciales de brokers en `.env`
- Credenciales en `DATABASE_CONFIG.yaml` (metadata NO secreta)
- Validación de entrada en todas las APIs

❌ **NUNCA**:
- API keys en código fuente
- Token en logs
- Credenciales en commits
- Credenciales en knowledge base

---

## 📈 Roadmap

| FASE | Estado | Próximo Paso |
|------|--------|------------|
| FASE 0 ✅ | Setup único | - (completada) |
| FASE 1 ✅ | Agentes/Skills | - (completada) |
| **FASE 2** | Proyecto de Inversiones | ⏳ Pendiente autorización |
| FASE 2.2 | Gates (BD Selection) | ⏳ Usuario autoriza |
| FASE 2.3 | Investigación (Picoro) | ⏳ Picoro comienza |
| FASE 2.4 | Diseño (Picoro/Goku/Krillin) | ⏳ Picoro completa 2.3 |
| FASE 3 | Implementación (Todos) | ⏳ Goku + Krillin comienzan |

---

## ✅ Validación

Todo en FASE 1 ha sido validado:

- [x] 5 agentes documentados completamente
- [x] 20 skills asignados correctamente
- [x] Protocolo de visibilidad implementado
- [x] Convenciones de nombres claras
- [x] Ticket dummy (`TKT-GLOBAL-001`) completado
- [x] Sistema listo para FASE 2

**Ver detalles**: [PHASE_1_VALIDATION_CHECKLIST.md](PHASE_1_VALIDATION_CHECKLIST.md)

---

## 📞 Contacto y Soporte

- **Guía de uso**: [USAGE_GUIDE.md](USAGE_GUIDE.md)
- **Metodología completa**: [AI_SKILL_DEVELOPMENT_METHODOLOGY.md](AI_SKILL_DEVELOPMENT_METHODOLOGY.md)
- **Agentes**: [agents/README.md](agents/README.md)
- **Skills**: [skills/README.md](skills/README.md)

---

## 🎯 **SIGUIENTE PASO**

### ✅ FASE 1 Completada

Cuando esté listo, autorizar:

**FASE 2**: Inicio del Proyecto PWA de Inversiones

```
🧠 @picoro · Analista/Arquitecto · FASE 2.2
🎯 skill: requirement_validator
📋 tarea: Ejecutar DATABASE_SELECTION_GATE
```

---

**Generado**: 2026-03-16  
**Metodología**: AI SKILL DEVELOPMENT v2.2  
**Sistema**: Multi-Proyecto con Agentes, Skills, Conocimiento y Tickets  
**Status**: ✅ Ready for FASE 2
