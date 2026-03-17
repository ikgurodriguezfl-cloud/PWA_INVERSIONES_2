# dependency_manager

**Skill**: dependency_manager  
**Versión**: 1.0.0  
**Categoría**: Configuración  
**Agente Principal**: Naruto

---

## 📋 Metadata

```yaml
skill:
  name: dependency_manager
  version: 1.0.0
  category: dependency_management
  author: "Metodología AI SKILL DEVELOPMENT"
  
assigned_agents:
  - naruto
```

## 🎯 Propósito

Gestionar dependencias del proyecto:
- Agregar/remover paquetes npm
- Resolver conflictos de versiones
- Mantener package.json consistente
- Documentar por qué cada dependencia

## 🔧 Uso

**Entrada**: Necesidad nueva (librería de indicadores, API client, etc.)  
**Salida**: package.json actualizado, versiones pinned correctamente

**Ejemplo**:
```
@naruto skill: dependency_manager
Agregar librería de indicadores técnicos

[Naruto actualiza:]
npm install technicalindicators@3.x
package.json con "technicalindicators": "^3.1.0"
CHANGELOG documentando la adición
```

---

**Estado**: ✅ Listo
