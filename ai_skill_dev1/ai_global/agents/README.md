# 🛠️ Agentes de Desarrollo

**Estado**: ✅ Documentos completos  
**Cantidad**: 5 agentes  
**Última Actualización**: 2026-03-16

---

## 📋 Agentes Disponibles

### 1. 🧠 **Kakashi** - Analista/Arquitecto
**Archivo**: [fic_kakashi_agent_orchestrator.md](fic_kakashi_agent_orchestrator.md)

- **Rol**: Orquestador de diseño
- **FASE**: 2.3 (Investigación) y 2.4 (Diseño)
- **Skills**: 4
  - ticket_analyzer
  - architecture_designer
  - requirement_validator
  - knowledge_synthesizer
- **Responsabilidad**: Analizar SPEC, investigar APIs, diseñar arquitectura, generar knowledge base

### 2. 👨‍💻 **Naruto** - Desarrollador Senior
**Archivo**: [fic_naruto_agent_dev1.md](fic_naruto_agent_dev1.md)

- **Rol**: Programador Principal
- **FASE**: 2.4 (Estructura) y 3 (Implementación)
- **Skills**: 8
  - react_code_generator
  - typescript_code_generator
  - vite_code_generator
  - tradingview_widgets_integrator
  - broker_api_integrator
  - documentation_writer
  - dependency_manager
  - code_structure_organizer
- **Responsabilidad**: Implementar código React/TypeScript, servicios de trading, features

### 3. 🥷 **Sasuke** - Optimizador/Seguridad
**Archivo**: [fic_sasuke_agent_dev2.md](fic_sasuke_agent_dev2.md)

- **Rol**: Especialista en Performance y Seguridad
- **FASE**: 3 (Paralelo a Naruto)
- **Skills**: 4
  - code_optimizer
  - performance_analyzer
  - security_auditor
  - pattern_refactorer
- **Responsabilidad**: Optimizar latencia, auditar credenciales, refactorizar patrones

### 4. 🧪 **Sakura** - QA Tester
**Archivo**: [fic_sakura_agent_tester1.md](fic_sakura_agent_tester1.md)

- **Rol**: Guardiana de Calidad
- **FASE**: 3 (Paralelo a Sasuke)
- **Skills**: 4
  - test_case_generator
  - bug_detector
  - quality_validator
  - regression_tester
- **Responsabilidad**: Crear tests, validar cálculos financieros, detectar bugs

### 5. 🗄️ **Pelonchas** - Especialista Base de Datos
**Archivo**: [fic_pelonchas_agent_db.md](fic_pelonchas_agent_db.md)

- **Rol**: Data Architect
- **FASE**: 2.4 (Diseño) y 3 (Implementación)
- **Skills**: 3
  - database_schema_designer
  - database_migrator
  - database_connector
- **Responsabilidad**: Diseñar modelos, migraciones, persistencia real

---

## 📊 Matriz de Asignación

| Agente | FASE 2.3 | FASE 2.4 | FASE 3 | Secuencia |
|--------|----------|----------|--------|-----------|
| Kakashi | ✅ | ✅ | - | 1ª (bloqueante) |
| Naruto | - | ✅ | ✅ | 2ª |
| Pelonchas | - | ✅ | ✅ | 2ª (paralelo a Naruto) |
| Sasuke | - | - | ✅ | 3ª (paralelo) |
| Sakura | - | - | ✅ | 3ª (paralelo) |

---

## 🔄 Flujo de Transición

```
FASE 2.3:
Kakashi investiga → Genera Knowledge base

FASE 2.4:
Kakashi diseña → Envía a Naruto + Pelonchas

FASE 3:
Naruto + Pelonchas ejecutan en paralelo → Envían a Sasuke + Sakura
Sasuke + Sakura trabajan en paralelo → Siesta final

Aprobación: Kakashi revisa, aprueba cierre
```

---

## 📞 Protocolo de Invocación

### Activar Agente

```
{emoji} @{nombre_corto} · {Rol} · FASE {X.X}
🎯 skill: {skill_activo}
📋 tarea: {descripción del trabajo}
```

**Ejemplo**:
```
🧠 @kakashi · Analista/Arquitecto · FASE 2.3
🎯 skill: knowledge_synthesizer
📋 tarea: Generar knowledge base de APIs de brokers
```

### Completación de Tarea

```
✅ @{nombre} completó · {skill} · output: {artefactos}
```

**Ejemplo**:
```
✅ @picoro completó · knowledge_synthesizer · output: knowledge/local/*, workflow_agents.yaml
```

---

## ✅ Validación de Agentes

Para validar que un agente está listo:

- [ ] Archivo `.md` existe en `ai_global/agents/`
- [ ] Metadata completa (nombre, versión, rol, fase)
- [ ] Skills enlazados correctamente (existen en `ai_global/skills/`)
- [ ] Inputs y outputs documentados
- [ ] Protocolo de activación claro
- [ ] Criterios de éxito definidos

---

**Próximo Paso**: Ver [../skills/README.md](../skills/README.md) para matriz de skills
