# architecture_designer

**Skill**: architecture_designer  
**Versión**: 1.0.0  
**Categoría**: Diseño  
**Agente Principal**: Kakashi

---

## 📋 Metadata

```yaml
skill:
  name: architecture_designer
  version: 1.0.0
  category: design
  author: "Metodología AI SKILL DEVELOPMENT"
  
assigned_agents:
  - kakashi
```

## 🎯 Propósito

Diseñar arquitectura técnica para:
- Proyectos de inversiones con brokers y trading
- Sistemas de indicadores técnicos
- Flujos de datos en tiempo real
- Separación PWA vs REST API

## 🔧 Uso

**Entrada**: SPECIFICATION.md, Knowledge base  
**Salida**: Arquitectura documentada, config.yaml, estructura de carpetas

**Ejemplo**:
```
@kakashi skill: architecture_designer
Diseñar arquitectura para pwa_inversions_drfic

[Kakashi propone:]
PWA: React + TradingView + Zustand
REST API: Node.js + Prisma + Supabase
Services: broker_connector, signal_detector, market_data
```

---

**Estado**: ✅ Listo
