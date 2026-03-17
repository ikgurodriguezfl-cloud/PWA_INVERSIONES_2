# 📊 SPECIFICATION - PWA Inversiones DRFIC

**Versión**: 1.0  
**Fecha**: 2026-03-16  
**Proyecto**: PWA de Inversiones con IA  
**Autor**: DRFIC Team  
**Estado**: ⏳ FASE 2 - Investigación y Diseño

---

## 🎯 Objetivo General

Desarrollar una **Progressive Web Application (PWA)** que permita a inversores monitorear, analizar y ejecutar estrategias de inversión en tiempo real utilizando datos de mercado de múltiples brokers.

---

## 📋 Requisitos Funcionales

### RF-1: Autenticación y Gestión de Usuarios
- [ ] Sistema de login con autenticación segura
- [ ] Perfil de usuario personalizable
- [ ] Gestión de credenciales de brokers de forma segura
- [ ] Recuperación de contraseña
- [ ] Two-factor authentication (2FA)

### RF-2: Conexión con Brokers
- **IBKR (Interactive Brokers)**
  - [ ] Obtener datos en tiempo real
  - [ ] Consultar posiciones actuales
  - [ ] Historial de trades
  
- **Alpaca Trading**
  - [ ] Paper trading vs live trading
  - [ ] Obtener cotizaciones
  - [ ] Historial de órdenes

### RF-3: Análisis Técnico
- [ ] Indicadores técnicos (SMA, EMA, RSI, MACD, Bollinger Bands, etc.)
- [ ] Gráficas interactivas con TradingView Lightweight Charts
- [ ] Múltiples timeframes (1m, 5m, 15m, 1h, 4h, 1d, 1w, 1M)
- [ ] Cálculos en tiempo real

### RF-4: Gestión de Portfolio
- [ ] Ver posiciones actuales
- [ ] Seguimiento de P&L (Profit & Loss)
- [ ] Histórico de transacciones
- [ ] Análisis de rendimiento

### RF-5: Alertas y Notificaciones
- [ ] Alertas de precio configurables
- [ ] Alertas de indicadores técnicos
- [ ] Notificaciones push
- [ ] Historial de alertas

### RF-6: Dashboard Principal
- [ ] Resumen de portfolio
- [ ] Gráficas principales
- [ ] Watchlist de símbolos
- [ ] Noticias del mercado (futuro)

---

## 🏗️ Requisitos Técnicos

### RT-1: Frontend (React PWA)
- **Framework**: React 18.x
- **Lenguaje**: TypeScript 5.x
- **Build Tool**: Vite 5.x
- **State Management**: Zustand
- **Styling**: TailwindCSS + Dark theme
- **Charting**: TradingView Lightweight Charts 4.x
- **Technical Indicators**: technicalindicators npm
- **HTTP Client**: Axios
- **Testing**: Vitest + React Testing Library

### RT-2: Base de Datos
- **Primaria**: Supabase (PostgreSQL)
- **Secundaria**: MongoDB (series temporales)
- **ORM**: Prisma (SQL) + MongoDB driver

### RT-3: Seguridad
- [ ] No almacenar credenciales de brokers en código
- [ ] Usar .env para variables sensibles
- [ ] Validación de entrada en todas las APIs
- [ ] CORS configurado correctamente
- [ ] SSL/TLS en producción
- [ ] Rate limiting en APIs

### RT-4: Performance
- [ ] Latencia < 100ms en operaciones críticas
- [ ] Bundle size < 500KB gzipped
- [ ] Cálculo de indicadores < 50ms
- [ ] Sin memory leaks

---

## 📊 Modelo de Datos

### Usuarios
```
users {
  id: UUID
  email: string (único)
  password_hash: string
  name: string
  created_at: timestamp
  updated_at: timestamp
  settings: JSON
}
```

### Conectores de Broker
```
broker_connections {
  id: UUID
  user_id: UUID (FK)
  broker_name: enum(IBKR, Alpaca)
  api_key_encrypted: string
  account_id: string
  status: enum(active, inactive, error)
  last_sync: timestamp
  created_at: timestamp
}
```

### Portfolio/Posiciones
```
positions {
  id: UUID
  user_id: UUID (FK)
  broker_id: UUID (FK)
  symbol: string
  quantity: decimal
  average_price: decimal
  current_price: decimal
  p_l: decimal
  p_l_percentage: decimal
  updated_at: timestamp
}
```

### Transacciones
```
transactions {
  id: UUID
  user_id: UUID (FK)
  broker_id: UUID (FK)
  symbol: string
  type: enum(BUY, SELL)
  quantity: decimal
  price: decimal
  fee: decimal
  executed_at: timestamp
  created_at: timestamp
}
```

### Indicadores Técnicos (Cache)
```
technical_indicators {
  id: UUID
  symbol: string
  timeframe: enum(1m, 5m, 15m, 1h, 4h, 1d, 1w, 1M)
  sma_20: decimal
  sma_50: decimal
  sma_200: decimal
  ema_12: decimal
  ema_26: decimal
  rsi_14: decimal
  macd: decimal
  macd_signal: decimal
  bb_upper: decimal
  bb_middle: decimal
  bb_lower: decimal
  calculated_at: timestamp
}
```

### Alertas
```
alerts {
  id: UUID
  user_id: UUID (FK)
  symbol: string
  alert_type: enum(PRICE, INDICATOR)
  condition: string
  is_active: boolean
  created_at: timestamp
  triggered_at: timestamp (nullable)
}
```

---

## 🔄 Flujo de Trabajo FASE 2

```
FASE 2.2: DATABASE_SELECTION_GATE
┌─────────────────────────────┐
│ BD Recomendada:             │
│ • Supabase (PostgreSQL)    │
│ • MongoDB                   │
└─────────────────────────────┘
         ⬇️
         
FASE 2.3: INVESTIGACIÓN (Kakashi)
┌─────────────────────────────┐
│ • Brokers APIs              │
│ • Indicadores técnicos      │
│ • Arquitectura general      │
│ → Genera knowledge base     │
└─────────────────────────────┘
         ⬇️
         
FASE 2.4: DISEÑO (Kakashi + Naruto + Pelonchas)
┌─────────────────────────────┐
│ • Arquitectura detallada    │
│ • Estructura React          │
│ • Schema de BD              │
│ → Configs + Design docs     │
└─────────────────────────────┘
         ⬇️
         
FASE 3: IMPLEMENTACIÓN
┌─────────────────────────────┐
│ • Naruto: Código React      │
│ • Sasuke: Performance/Seg   │
│ • Pelonchas: BD             │
│ • Sakura: Testing           │
└─────────────────────────────┘
```

---

## 🎯 Criterios de Éxito FASE 2

- ✅ Knowledge base > 1000 líneas
- ✅ Arquitectura documentada completa
- ✅ Modelos de datos diseñados
- ✅ Workflow e2e clear
- ✅ 0 bloqueos técnicos identificados
- ✅ FASE 2.4 → FASE 3 list for go

---

## 📞 Contacto

- **Metodología**: AI SKILL DEVELOPMENT v2.2
**Equipo**: Kakashi, Naruto, Sasuke, Sakura, Pelonchas
- **Baseline**: `../../../ai_skill_dev1/`

---

**Estado**: ⏳ Pendiente FASE 2.3  
**Próximo Paso**: 🧠 @kakashi · FASE 2.3 · ticket_analyzer
