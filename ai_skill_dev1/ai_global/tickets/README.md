# 🎫 Tickets Globales

**Estado**: ✅ Estructura lista  
**Última Actualización**: 2026-03-16

---

## 📋 Propósito

`ai_global/tickets/` almacena **tickets globales** (TKT-GLOBAL-###) que afectan a TODO el sistema:

- Mejoras a la metodología
- Nuevos skills globales requeridos
- Actualizaciones a templates
- Mejoras a infraestructura de desarrollo

---

## 🔍 Diferencia: TKT-GLOBAL vs TKT-INVRFIC

| Tipo | Prefijo | Ubicación | Alcance | Ejemplo |
|------|---------|-----------|---------|---------|
| **Global** | TKT-GLOBAL-### | `ai_global/tickets/` | Afecta a TODO | TKT-GLOBAL-001: Validar sistema de agentes |
| **Proyecto** | TKT-INVRFIC-### | `projects/pwa/pwa_inversions_drfic/ai_work_flow/tickets/` | Solo proyecto | TKT-INVRFIC-005: Implementar broker_connector |

---

## 📁 Estructura

```
tickets/
├── README.md (este archivo)
├── TKT-GLOBAL-001_test_system.md      (FASE 1 - Sistema inicial)
├── TKT-GLOBAL-002_*.md                (Futuro)
└── ...
```

---

## 📅 Historial de Tickets Globales

| ID | Título | Estado | Creado | Descripción |
|----|--------|--------|--------|-------------|
| **TKT-GLOBAL-001** | Test System | ✅ Completado | 2026-03-16 | Validar que workflow de agentes y skills funciona |

---

## 🚀 Cuándo Crear TKT-GLOBAL

Si hay cambio sistémico que requiere:
- Actualizar múltiples archivos core
- Afecta composición de agentes/skills
- Cambia protocolo global
- Requiere actualización de metodología

→ Crear TKT-GLOBAL-### correspondiente

---

**Ver**: [TKT-GLOBAL-001_test_system.md](TKT-GLOBAL-001_test_system.md)
