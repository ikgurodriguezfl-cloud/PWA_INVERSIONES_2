# database_migrator

**Skill**: database_migrator  
**Versión**: 1.0.0  
**Categoría**: Migraciones  
**Agente Principal**: Pelonchas

---

## 📋 Metadata

```yaml
skill:
  name: database_migrator
  version: 1.0.0
  category: migrations
  author: "Metodología AI SKILL DEVELOPMENT"
  
assigned_agents:
  - pelonchas

dependencies:
  tools:
    - "prisma"
    - "typeorm"
    - "mongoose"
```

## 🎯 Propósito

Crear y ejecutar migraciones de BD:
- Migraciones versionadas (001_initial, 002_add_index, etc.)
- Up/Down migrations para rollback
- Validación de migraciones antes de ejecutar
- Historial de migraciones

## 🔧 Uso

**Entrada**: Schema nuevo o cambio a schema existente  
**Salida**: Reporte de migración ejecutada

**Ejemplo**:
```
@pelonchas skill: database_migrator
Ejecutar migración inicial en Supabase DEV

[Pelonchas ejecuta:]
migrations/001_initial.sql (executed)
- Created users, portfolios, trades tables
- Indexes created
- Status: ✅ SUCCESS
```

---

**Estado**: ✅ Listo
