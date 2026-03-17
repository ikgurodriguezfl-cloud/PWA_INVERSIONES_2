# 📚 Knowledge Local - Investigaciones Internas

**Estado**: 🚧 Pendiente (se genera en FASE 2.3)  
**Última Actualización**: 2026-03-16

---

## 📋 Propósito

Almacenar investigaciones internas profundas generadas por Picoro en:
- APIs de brokers certificados
- Librerías de indicadores técnicos
- Estrategias de opciones
- Decisiones de arquitectura
- Lecciones aprendidas durante desarrollo

---

## 📁 Estructura Esperada

```
local/
├── README.md (este archivo)
├── 01_broker_api_research.md         (FASE 2.3 - Picoro)
├── 02_charting_library_research.md   (FASE 2.3 - Picoro)
├── 03_technical_indicators_patterns.md (FASE 2.3 - Picoro)
├── 04_options_strategies_decisions.md (FASE 2.3 - Picoro)
├── 05_ai_signal_analysis_strategy.md (FASE 2.3 - Picoro)
├── lesson_options_chain_latency.md   (FASE 3 - Goku/Bulma)
├── lesson_security_api_keys.md       (FASE 3 - Vegeta)
└── examples/
    ├── ibkr_connection_demo.tsx
    ├── rsi_calculation_example.tsx
    └── signal_detector_example.tsx
```

---

## 🎯 Archivos a Generar en FASE 2.3

### 1. 01_broker_api_research.md
- Comparación IBKR vs Alpaca vs otros
- Pros y contras de cada broker
- Decisión final justificada

### 2. 02_charting_library_research.md
- Investigación TradingView Lightweight Charts
- Comparación vs alternatives
- Decisión final

### 3. 03_technical_indicators_patterns.md
- RSI(14): cálculo, interpretación, aplicación
- MACD(12,26,9): cálculo, interpretación, aplicación
- Bollinger Bands(20,2): cálculo, interpretación
- ATR(14): cálculo, aplicación a riesgo

### 4. 04_options_strategies_decisions.md
- Iron Condor: cuándo usar, riesgos, profit/loss
- Straddle: cuándo usar, aplicación
- Strangle: cuándo usar, aplicación
- Spreads: Bull call spread, Bear put spread, etc.

### 5. 05_ai_signal_analysis_strategy.md
- Cómo combinar indicadores para señales
- Niveles de confianza recomendados
- Filtros para evitar señales falsas
- Decisión: usar Claude API para análisis confirmatorio

---

## 📚 Lecciones Aprendidas

Se crean durante FASE 3 cuando se descubren insights importantes:

**Ejemplo**:
```
lesson_options_chain_latency.md
├── Problema: Demasiados eventos/segundo saturaban el estado
├── Solución: Throttling de updates a 2/seg
├── Aplicación: Patrón reutilizable en todos los streams
```

---

## 📅 Historial de Estado

| Fecha | Hora | Estado Anterior | Estado Nuevo | Evento |
|-------|------|-----------------|--------------|--------|
| 2026-03-16 | 09:00 | - | 🚧 Estructura | Setup inicial |
| FASE 2.3 | - | 🚧 Estructura | ✅ 5+ archivos | Picoro genera investigaciones |

---

## 📞 Próximo Paso

**FASE 2.3**: Picoro inicia investigación de brokers y genera 01_broker_api_research.md
