# bug_detector

**Skill**: bug_detector  
**Versión**: 1.0.0  
**Categoría**: Testing  
**Agente Principal**: Sakura

---

## 📋 Metadata

```yaml
skill:
  name: bug_detector
  version: 1.0.0
  category: qa
  author: "Metodología AI SKILL DEVELOPMENT"
  
assigned_agents:
  - sakura
```

## 🎯 Propósito

Detectar bugs sistemáticamente:
- Edge cases no cubiertos
- Manejo de errores incompleto
- Type errors potenciales
- Lógica incorrecta

## 🔧 Uso

**Entrada**: Código implementado  
**Salida**: Lista de bugs encontrados

**Ejemplo**:
```
@sakura skill: bug_detector
Detectar bugs en broker_connector

[Sakura detecta:]
❌ BUG 1: Falta manejo de timeout en conexión
❌ BUG 2: Array index sin validación
❌ BUG 3: Tipo incorrecto en parsePrice()
✅ 3 bugs reportados, 0 críticos
```

---

**Estado**: ✅ Listo
