# code_structure_organizer

**Skill**: code_structure_organizer  
**Versión**: 1.0.0  
**Categoría**: Organización  
**Agente Principal**: Naruto

---

## 📋 Metadata

```yaml
skill:
  name: code_structure_organizer
  version: 1.0.0
  category: code_organization
  author: "Metodología AI SKILL DEVELOPMENT"
  
assigned_agents:
  - naruto
```

## 🎯 Propósito

Organizar estructura de código:
- Crear carpetas src/ con estructura modular
- Atomic Design para componentes
- Services, hooks, utils bien separados
- Features autónomas

## 🔧 Uso

**Entrada**: Proyecto nuevo sin estructura  
**Salida**: src/ completamente estructurada per la metodología

**Ejemplo**:
```
@naruto skill: code_structure_organizer
Crear estructura de carpetas

[Naruto crea:]
src/
├── components/ui/ (atoms, molecules, organisms)
├── features/ (dashboard, market-scanner, etc.)
├── services/ (broker, data, indicators)
├── hooks/
├── pages/
├── store/
└── types/
```

---

**Estado**: ✅ Listo
