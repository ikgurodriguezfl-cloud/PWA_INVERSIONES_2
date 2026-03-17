# requirement_validator

**Skill**: requirement_validator  
**Versión**: 1.0.0  
**Categoría**: Validación  
**Agente Principal**: Kakashi

---

## 📋 Metadata

```yaml
skill:
  name: requirement_validator
  version: 1.0.0
  category: validation
  author: "Metodología AI SKILL DEVELOPMENT"
  
assigned_agents:
  - kakashi
```

## 🎯 Propósito

Validar especificaciones y requerimientos:
- Coherencia entre SPEC y criterios de aceptación
- Completitud de descripción funcional
- Validar que requerimientos son implementables

## 🔧 Uso

**Entrada**: SPECIFICATION.md, Tickets  
**Salida**: Reporte de validación, gaps identificados

**Ejemplo**:
```
@kakashi skill: requirement_validator
Validar SPECIFICATION.md

[Kakashi valida:]
- Indicadores definidos: ✅
- Estrategias claras: ✅
- APIs de brokers especificadas: ⚠️ FALTA Alpaca
- Base de datos seleccionada: ❌ PENDIENTE
```

---

**Estado**: ✅ Listo
