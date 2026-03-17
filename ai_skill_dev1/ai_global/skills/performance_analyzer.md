# performance_analyzer

**Skill**: performance_analyzer  
**Versión**: 1.0.0  
**Categoría**: Análisis  
**Agente Principal**: Sasuke

---

## 📋 Metadata

```yaml
skill:
  name: performance_analyzer
  version: 1.0.0
  category: profiling
  author: "Metodología AI SKILL DEVELOPMENT"
  
assigned_agents:
  - sasuke
```

## 🎯 Propósito

Analizar performance:
- Identificar bottlenecks
- Generar profiling reports
- Validar latencias críticas
- Detectar memory leaks

## 🔧 Uso

**Entrada**: Código a analizar  
**Salida**: Reporte con métricas y recomendaciones

**Ejemplo**:
```
@sasuke skill: performance_analyzer
Analizar latencia de market data feed

[Sasuke reporta:]
- Latencia media: 87ms ✅
- P99 latencia: 155ms ⚠️
- Memory: 145MB (estable)
- Recomendación: Optimize parsing de datos
```

---

**Estado**: ✅ Listo
