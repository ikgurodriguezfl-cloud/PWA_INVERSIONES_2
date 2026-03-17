# regression_tester

**Skill**: regression_tester  
**Versión**: 1.0.0  
**Categoría**: Testing  
**Agente Principal**: Sakura

---

## 📋 Metadata

```yaml
skill:
  name: regression_tester
  version: 1.0.0
  category: qa
  author: "Metodología AI SKILL DEVELOPMENT"
  
assigned_agents:
  - sakura
```

## 🎯 Propósito

Validar que cambios no rompieron funcionalidad:
- Verificar tests previos aún pasan
- Validar que optimizaciones mantienen precisión
- Detectar side effects no deseados

## 🔧 Uso

**Entrada**: Código modificado/optimizado  
**Salida**: Reporte de regresiones

**Ejemplo**:
```
@sakura skill: regression_tester
Validar que optimizaciones de Vegeta no rompieron precisión

[Sakura verifica:]
✅ Tests previos (28/28 pasan)
✅ Precisión RSI: 99.8% (sin cambio)
✅ Latencia: 87ms → 42ms ✅ (mejora 50%)
✅ CERO regresiones detectadas
```

---

**Estado**: ✅ Listo
