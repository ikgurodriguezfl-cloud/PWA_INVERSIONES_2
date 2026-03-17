# 📚 Knowledge Base - Sistema Global

**Estado**: 🚧 Estructura Inicial  
**Última Actualización**: 2026-03-16

---

## 📋 Estado Actual

| Aspecto | Estado | Última Actualización |
|---------|--------|----------------------|
| **Conocimiento Local** | 🚧 Pendiente | - |
| **Conocimiento Remoto** | 🚧 Pendiente | - |
| **FASE del Sistema** | FASE 1 | 2026-03-16 |

---

## 📖 Descripción

La base de conocimiento global (`ai_global/knowledge/`) almacena:

### Local (`local/`)
- Investigaciones internas sobre APIs de brokers
- Decisiones arquitectónicas justificadas
- Patrones reutilizables
- Lecciones aprendidas

**Será generada por**: Picoro en FASE 2.3

**Estructura ejemplo**:
```
local/
├── 01_broker_api_research.md
├── 02_charting_library_research.md
├── 03_technical_indicators_patterns.md
├── 04_options_strategies_decisions.md
└── 05_ai_signal_analysis_strategy.md
```

### Remote (`remote/`)
- Referencias externas (documentación oficial)
- APIs de brokers (IBKR, Alpaca, etc.)
- Librerías de indicadores técnicos
- NotebookLM para investigación profunda

**Será compilada por**: Picoro en FASE 2.3

**Estructura ejemplo**:
```
remote/
├── ibkr_api_reference.md
├── alpaca_api_reference.md
├── tradingview_widgets_reference.md
├── polygon_io_market_data.md
└── notebooklm_main_research.md
```

---

## 🏗️ Estructura de Carpetas

```
knowledge/
├── README.md (este archivo)
├── local/
│   └── README.md
└── remote/
    └── README.md
```

---

## 📅 Historial de Estado

| Fecha | Hora | Estado Anterior | Estado Nuevo | Evento | Notas |
|-------|------|-----------------|--------------|--------|-------|
| 2026-03-16 | 09:00 | - | 🚧 Estructura | Setup FASE 1 | Directorios creados, listos para FASE 2.3 |

---

## ⏭️ Próximos Pasos

**FASE 2.3** (Picoro):
1. Generar `01_broker_api_research.md` investigando IBKR + Alpaca
2. Generar `02_charting_library_research.md` comparando librerías
3. Generar `03_technical_indicators_patterns.md` con RSI, MACD, BB, ATR
4. Generar `04_options_strategies_decisions.md` con Iron Condor, Straddle, etc.
5. Generar `05_ai_signal_analysis_strategy.md` con lógica de señales
6. Compilar referencias en `remote/`
7. Actualizar este README con estado ✅

---

**Ver también**: [local/README.md](local/README.md), [remote/README.md](remote/README.md)
