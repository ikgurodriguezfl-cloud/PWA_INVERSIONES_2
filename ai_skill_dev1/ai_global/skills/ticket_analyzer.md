# ticket_analyzer

**Skill**: ticket_analyzer  
**Versión**: 1.0.0  
**Categoría**: Análisis  
**Agente Principal**: Kakashi

---

## 📋 Metadata

```yaml
skill:
  name: ticket_analyzer
  version: 1.0.0
  category: analysis
  author: "Metodología AI SKILL DEVELOPMENT"
  
assigned_agents:
  - kakashi

dependencies:
  skills:
    - requirement_validator
```

## 🎯 Propósito

Analizar tickets complejos (TKT-INVRFIC-###, REQ-###) para:
- Entender alcance y requerimientos
- Identificar dependencias y riesgos
- Proponer plan de implementación
- Validar que criterios de aceptación sean claros

## 🔧 Uso

**Entrada**: Ticket sin analizar  
**Salida**: Análisis estructurado, plan propuesto, riesgos identificados

**Ejemplo**:
```
@kakashi skill: ticket_analyzer
Ticket: TKT-INVRFIC-001 - Implementar broker_connector

[Kakashi analiza:]
- Requerimientos: ✅ Claros
- Dependencias: Ninguna
- Riesgos: Latencia de conexión
- Plan: 3 horas estimadas
```

---

**Estado**: ✅ Listo
