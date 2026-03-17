# knowledge_synthesizer

**Skill**: knowledge_synthesizer  
**Versión**: 1.0.0  
**Categoría**: Investigación  
**Agente Principal**: Kakashi

---

## 📋 Metadata

```yaml
skill:
  name: knowledge_synthesizer
  version: 1.0.0
  category: research
  author: "Metodología AI SKILL DEVELOPMENT"
  
assigned_agents:
  - kakashi
```

## 🎯 Propósito

Compilar y organizar conocimiento de múltiples fuentes:
- Investigación de APIs de brokers
- Documentación de librerías de indicadores
- Compilación de estrategias de opciones
- Síntesis en knowledge base coherente

## 🔧 Uso

**Entrada**: Fuentes diversas (docs, APIs, tutoriales)  
**Salida**: knowledge/local/*.md + knowledge/remote/*.md

**Ejemplo**:
```
@kakashi skill: knowledge_synthesizer
Generar knowledge base para APIs de brokers

[Kakashi crea:]
- knowledge/local/01_broker_api_research.md
- knowledge/local/02_charting_library_research.md
- knowledge/remote/ibkr_api_reference.md
- knowledge/remote/alpaca_api_reference.md
```

---

**Estado**: ✅ Listo
