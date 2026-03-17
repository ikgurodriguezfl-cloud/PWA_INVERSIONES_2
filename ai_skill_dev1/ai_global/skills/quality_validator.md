# quality_validator

**Skill**: quality_validator  
**Versión**: 1.0.0  
**Categoría**: Validación  
**Agente Principal**: Sakura

---

## 📋 Metadata

```yaml
skill:
  name: quality_validator
  version: 1.0.0
  category: validation
  author: "Metodología AI SKILL DEVELOPMENT"
  
assigned_agents:
  - sakura
```

## 🎯 Propósito

Validar criterios de aceptación:
- ¿Se implementó todo lo especificado?
- ¿Precisión de cálculos correcta?
- ¿Señales de trading precisas?
- ¿Cumple especificación financiera?

## 🔧 Uso

**Entrada**: Ticket con criterios de aceptación  
**Salida**: Validación de cada criterio

**Ejemplo**:
```
@sakura skill: quality_validator
Validar ticket TKT-INVRFIC-003

[Sakura valida:]
✅ Criterio 1: RSI calculado correctamente
✅ Criterio 2: MACD y signal line correctos
✅ Criterio 3: Bollinger Bands validadas vs TradingView
✅ Ticket: APROBADO PARA CIERRE
```

---

**Estado**: ✅ Listo
