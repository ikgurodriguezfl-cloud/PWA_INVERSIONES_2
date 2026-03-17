# test_case_generator

**Skill**: test_case_generator  
**Versión**: 1.0.0  
**Categoría**: Testing  
**Agente Principal**: Sakura

---

## 📋 Metadata

```yaml
skill:
  name: test_case_generator
  version: 1.0.0
  category: testing
  author: "Metodología AI SKILL DEVELOPMENT"
  
assigned_agents:
  - sakura

dependencies:
  libs:
    - "vitest@1.x"
    - "jest@29.x"
```

## 🎯 Propósito

Generar test cases completos:
- Unit tests para funciones
- Integration tests para servicios
- E2E tests para flujos completos
- Cobertura > 80%

## 🔧 Uso

**Entrada**: Código sin tests  
**Salida**: Test suite con casos happy path + edge cases

**Ejemplo**:
```
@sakura skill: test_case_generator
Crear tests para calculateRSI()

[Sakura genera:]
tests/indicators/rsi.test.ts
- Test: RSI(14) = 70 en condición overbought
- Test: RSI(14) = 30 en condición oversold
- Test: datos insuficientes devuelven null
- Coverage: 95%
```

---

**Estado**: ✅ Listo
