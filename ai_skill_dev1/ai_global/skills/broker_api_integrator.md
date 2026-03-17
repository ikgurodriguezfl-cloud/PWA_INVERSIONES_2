# broker_api_integrator

**Skill**: broker_api_integrator  
**Versión**: 1.0.0  
**Categoría**: Integración  
**Agente Principal**: Naruto

---

## 📋 Metadata

```yaml
skill:
  name: broker_api_integrator
  version: 1.0.0
  category: integration
  author: "Metodología AI SKILL DEVELOPMENT"
  
assigned_agents:
  - naruto

dependencies:
  libs:
    - "@stoqey/ib@3.x"
    - "alpaca-trade-api@2.x"
```

## 🎯 Propósito

Integrar APIs de brokers:
- Interactive Brokers (IBKR)
- Alpaca
- Conexión, autenticación, manejo de errores
- Streaming de datos
- Ejecución de órdenes

## 🔧 Uso

**Entrada**: Credenciales de broker, conexión string  
**Salida**: Servicio de broker funcional

**Ejemplo**:
```
@naruto skill: broker_api_integrator
Implementar conexión con Interactive Brokers

[Naruto implementa:]
src/services/broker/ibkr.connector.ts
- Conexión a IBKR TWS
- Manejo de desconexiones
- Streaming de market data
- Paper trading mode
```

---

**Estado**: ✅ Listo
