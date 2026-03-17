# security_auditor

**Skill**: security_auditor  
**Versión**: 1.0.0  
**Categoría**: Seguridad  
**Agente Principal**: Sasuke

---

## 📋 Metadata

```yaml
skill:
  name: security_auditor
  version: 1.0.0
  category: security
  author: "Metodología AI SKILL DEVELOPMENT"
  
assigned_agents:
  - sasuke
```

## 🎯 Propósito

Auditar seguridad:
- ❌ Detectar credenciales en código
- ✅ Validar uso correcto de .env
- Auditoria HTTPS y certificados SSL
- Validación de entrada (XSS, SQL injection)

## 🔧 Uso

**Entrada**: Código con credenciales de brokers  
**Salida**: Reporte de vulnerabilidades

**Ejemplo**:
```
@sasuke skill: security_auditor
Auditar seguridad de broker_connector

[Sasuke detecta:]
❌ CRITICAL: IBKR API key hardcoded en línea 42
✅ FIX: Mover a .env como IBKR_API_KEY
❌ WARNING: Logs exponen parte del token
✅ FIX: Sanitizar logs
```

---

**Estado**: ✅ Listo
