# 🌐 Knowledge Remote - Referencias Externas

**Estado**: 🚧 Pendiente (se compila en FASE 2.3)  
**Última Actualización**: 2026-03-16

---

## 📋 Propósito

Almacenar referencias externas a:
- Documentación oficial de brokers (IBKR, Alpaca, etc.)
- APIs de datos de mercado (TradingView, Polygon.io, etc.)
- Librerías de indicadores técnicos
- Estándares regulatorios
- NotebookLM para investigación profunda con IA

---

## 📁 Estructura Esperada

```
remote/
├── README.md (este archivo)
├── ibkr_api_reference.md                    (FASE 2.3 - Picoro)
├── alpaca_api_reference.md                  (FASE 2.3 - Picoro)
├── tradingview_widgets_reference.md         (FASE 2.3 - Picoro)
├── polygon_io_market_data.md                (FASE 2.3 - Picoro)
├── talib_indicators_reference.md            (FASE 2.3 - Picoro)
├── technicalindicators_npm_reference.md     (FASE 2.3 - Picoro)
├── notebooklm_main_research.md              (FASE 2.3 - Usuario + Picoro)
└── sec_finra_regulations.md                 (FASE 2.3 - Picoro)
```

---

## 📚 Referencias Esperadas a Compilar en FASE 2.3

### Brokers
- **IBKR (Interactive Brokers)**
  - URL: https://interactivebrokers.github.io/tws-api/
  - Tipo: Documentación oficial
  - Relevancia: Broker primario para trading algorítmico

- **Alpaca**
  - URL: https://docs.alpaca.markets/
  - Tipo: Documentación oficial
  - Relevancia: Paper trading, desarrollo

### Datos de Mercado
- **Polygon.io**
  - URL: https://polygon.io/docs/
  - Datos históricos y opciones

- **TradingView Data**
  - Feeds en tiempo real
  - Validación de indicadores

### Librerías de Indicadores
- ** technicalindicators (npm)**
  - URL: https://github.com/anandanand84...
  - Versión recomendada: 3.x
  - Soporte: RSI, MACD, Bollinger Bands, ATR, etc.

- **TA-Lib**
  - Alternativa con más indicadores
  - Compilada (más rápida)

### Gráficos
- **TradingView Lightweight Charts**
  - URL: https://tradingview.github.io/lightweight-charts/
  - Versión: 4.x
  - MIT License

### Regulación
- **SEC Rules** (FINRA)
  - Pattern Day Trading (PDT)
  - Margin requirements

---

### NotebookLM
**Solo si usuario lo crea** en FASE 2.3:
- URL: https://notebooklm.google.com/notebook/{id}
- Propósito: Q&A sobre proyecto con IA de Google
- Acceso: Requiere cuenta Google

---

## 🔗 Formato de cada Referencia

```markdown
# {Nombre de la Fuente}

**Tipo**: Documentación Oficial / Tutorial / NotebookLM / API Reference / Otro
**URL**: <enlace directo>
**Fecha creación**: YYYY-MM-DD
**Última verificación**: YYYY-MM-DD
**Acceso**: Público / Requiere cuenta / Requiere API Key

### Resumen
[Breve descripción del contenido y relevancia]

### Puntos Clave
- Endpoint o concepto importante 1
- Endpoint o concepto importante 2
- Limitaciones o rate limits relevantes

### Aplicación en Proyecto
[Cómo se aplica en pwa_inversions_drfic]

### Relacionado con
- Knowledge local: 01_topic_research.md
- Tickets: TKT-INVRFIC-001, TKT-INVRFIC-005
```

---

## 📅 Historial de Estado

| Fecha | Hora | Estado Anterior | Estado Nuevo | Evento |
|-------|------|-----------------|--------------|--------|
| 2026-03-16 | 09:00 | - | 🚧 Estructura | Setup inicial |
| FASE 2.3 | - | 🚧 Estructura | ✅ 7+ archivos | Picoro compila referencias |

---

## 📞 Próximo Paso

**FASE 2.3**: Picoro comienza a compilar referencias de brokers y APIs
