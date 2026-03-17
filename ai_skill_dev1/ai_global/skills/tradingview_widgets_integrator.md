# tradingview_widgets_integrator

**Skill**: tradingview_widgets_integrator  
**Versión**: 1.0.0  
**Categoría**: Integración  
**Agente Principal**: Naruto

---

## 📋 Metadata

```yaml
skill:
  name: tradingview_widgets_integrator
  version: 1.0.0
  category: integration
  author: "Metodología AI SKILL DEVELOPMENT"
  
assigned_agents:
  - naruto

dependencies:
  libs:
    - "lightweight-charts@4.x"
```

## 🎯 Propósito

Integrar TradingView Lightweight Charts:
- Gráficas de velas (candlestick)
- Líneas de indicadores superpuestas
- Temas oscuros para trading
- Interactividad (zoom, pan, etc.)

## 🔧 Uso

**Entrada**: Datos OHLCV, indicadores  
**Salida**: Componente React con gráfica TradingView

**Ejemplo**:
```
@naruto skill: tradingview_widgets_integrator
Crear componente de gráfica de mercado

[Naruto integra:]
src/features/market-scanner/components/CandlestickChart.tsx
- TradingView chart embed
- Series de velas + indicadores
- Tema dark para trading
- Responsivo
```

---

**Estado**: ✅ Listo
