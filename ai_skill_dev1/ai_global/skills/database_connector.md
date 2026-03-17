# database_connector

**Skill**: database_connector  
**Versión**: 1.0.0  
**Categoría**: Integración  
**Agente Principal**: Pelonchas

---

## 📋 Metadata

```yaml
skill:
  name: database_connector
  version: 1.0.0
  category: connectivity
  author: "Metodología AI SKILL DEVELOPMENT"
  
assigned_agents:
  - pelonchas

dependencies:
  libs:
    - "prisma@5.x"
    - "mongoose@7.x"
    - "supabase-js@2.x"
```

## 🎯 Propósito

Conectar aplicación a base de datos:
- Configuración de drivers
- Connection pooling
- Manejo de errores y reconexión
- Tipos TypeScript generados

## 🔧 Uso

**Entrada**: Credenciales de BD en .env  
**Salida**: Client conectado y servicios de datos

**Ejemplo**:
```
@pelonchas skill: database_connector
Conectar REST API a Supabase

[Pelonchas configura:]
src/config/database.ts con Prisma client
Tipos generados: src/types/database.types.ts
Test de conexión: ✅ Connected successfully
```

---

**Estado**: ✅ Listo
