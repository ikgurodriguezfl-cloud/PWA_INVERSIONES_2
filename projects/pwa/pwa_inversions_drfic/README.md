# 📚 PWA Inversiones DRFIC - README

**Versión**: 1.0  
**Fecha**: 2026-03-16  
**Estado**: ⏳ FASE 2 - Investigación y Diseño  
**Equipo**: Kakashi, Naruto, Sasuke, Sakura, Pelonchas (AI Agents)

---

## 🚀 Quick Start

### Prerrequisitos
- Node.js >= 18
- npm >= 9 o pnpm
- Variables de entorno configuradas (.env)

### Instalación

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus valores

# Iniciar desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

---

## 📁 Estructura del Proyecto

```
pwa_inversions_drfic/
├── src/
│   ├── components/          # Componentes React (Atomic Design)
│   ├── services/            # Servicios (brokers, indicadores, BD)
│   ├── hooks/               # Custom hooks
│   ├── types/               # TypeScript interfaces
│   ├── utils/               # Funciones helper
│   ├── assets/              # Imágenes, íconos, etc.
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── knowledge/               # Knowledge base del proyecto
│   ├── local/               # Investigaciones internas
│   └── remote/              # Referencias externas
├── public/                  # Assets públicos
├── SPECIFICATION.md         # Especificación del proyecto
├── workflow_agents.yaml     # Workflow de agentes
├── config.project.yaml      # Configuración técnica
├── package.json
├── vite.config.js
├── tsconfig.json
├── .env.example
├── .gitignore
└── README.md (este archivo)
```

---

## 🎯 Requisitos Funcionales

### ✅ RF-1: Autenticación
- Login seguro
- Perfil de usuario
- Gestión de credenciales de brokers
- 2FA (futuro)

### ✅ RF-2: Conexión con Brokers
- **IBKR**: Datos en tiempo real, posiciones, trades
- **Alpaca**: Paper trading, cotizaciones

### ✅ RF-3: Análisis Técnico
- Indicadores: SMA, EMA, RSI, MACD, Bollinger Bands
- Gráficas interactivas (TradingView)
- Múltiples timeframes

### ✅ RF-4: Portfolio Management
- Ver posiciones
- Seguimiento P&L
- Historial de transacciones

### ✅ RF-5: Alertas
- Alertas de precio
- Alertas de indicadores
- Notificaciones push

### ✅ RF-6: Dashboard
- Resumen de portfolio
- Gráficas principales
- Watchlist

---

## 🏗️ Requisitos Técnicos

**Frontend**:
- React 18.x + TypeScript 5.x
- Vite 5.x (build tool)
- TailwindCSS (styling)
- TradingView Charts (gráficas)

**Bases de Datos**:
- Supabase (PostgreSQL) - usuarios, transacciones
- MongoDB - series temporales

**Performance**:
- Latencia < 100ms (brokers)
- Bundle < 500KB gzipped
- Indicadores < 50ms

**Seguridad**:
- No API keys en código
- Todos en .env
- Validación de entrada obligatoria

---

## 🔄 Flujo de Desarrollo (FASE 2-3)

```
FASE 2.2: DATABASE_SELECTION_GATE
        ↓
FASE 2.3: 🧠 @kakashi - INVESTIGACIÓN
        ↓
FASE 2.4: 🧠 @kakashi + Equipo - DISEÑO
        ↓
FASE 3: Implementación paralela
    - 👨‍💻 @naruto: Código React
    - 🥷 @sasuke: Performance/Seguridad
    - 🧪 @sakura: Testing
    - 🗄️ @pelonchas: Base de Datos
```

---

## 📊 Tecnología Stack Principal

| Capa | Tecnología | Versión |
|------|-----------|---------|
| **Framework** | React | 18.x |
| **Lenguaje** | TypeScript | 5.x |
| **Build** | Vite | 5.x |
| **State** | Zustand | 4.x |
| **Styling** | TailwindCSS | 3.x |
| **Charts** | Lightweight Charts | 4.x |
| **Indicators** | technicalindicators | 3.x |
| **HTTP** | Axios | 1.x |
| **BD 1** | Supabase (PostgreSQL) | - |
| **BD 2** | MongoDB | - |

---

## 🔐 Variables de Entorno

Ver `.env.example` para lista completa.

**Críticas** (NUNCA exposer):
- `IBKR_API_KEY`
- `ALPACA_API_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `MONGODB_URI`

---

## 📝 Convenciones de Código

### Comentarios Obligatorios (FIC Style)

```typescript
/**
 * [EN] Fetch market data from broker API
 * [ES] Obtiene datos del mercado desde API del broker
 * 
 * @param {string} symbol - Stock symbol (e.g., 'AAPL')
 * @returns {Promise<MarketData>} Market data object
 */
function fetchMarketData(symbol: string): Promise<MarketData> {
  // Implementation
}
```

### TypeScript
- **Tipado estricto**: `noImplicitAny` obligatorio
- **Interfaces explícitas**: Todo prop tiene interfaz
- **Avoid `any`**: Si necesitas, documentar por qué

### React
- **Componentes funcionales**: Usando hooks
- **Atomic design**: atoms, molecules, organisms
- **Props interfaces**: Requerido para cada componente

---

## ✅ Scripts Disponibles

```bash
npm run dev              # Iniciar dev server (Vite)
npm run build            # Build para producción
npm run preview          # Preview del build localmente
npm run lint             # ESLint check
npm run type-check       # TypeScript check
npm run test             # Ejecutar tests (Vitest)
npm run test:ui          # Tests con UI
npm run test:coverage    # Coverage report
```

---

## 📖 Documentación

- **SPECIFICATION.md**: Requisitos funcionales y técnicos
- **workflow_agents.yaml**: Agentes y timelines
- **config.project.yaml**: Configuración técnica
- **knowledge/local/**: Investigaciones del proyecto
- **knowledge/remote/**: Referencias externas

---

## 🤖 Agentes y Skills

Proyecto dirigido por 5 agentes de IA (AI Skill Development Methodology):

| Agente | Rol | FASE |
|--------|-----|------|
| 🧠 Kakashi | Analista/Arquitecto | 2.3, 2.4 |
| 👨‍💻 Naruto | Dev Senior | 2.4, 3 |
| 🥷 Sasuke | Optimizador/Seguridad | 3 |
| 🧪 Sakura | QA Tester | 3 |
| 🗄️ Pelonchas | Especialista BD | 2.4, 3 |

**Invocación**:
```
🧠 @kakashi · Analista/Arquitecto · FASE 2.3
🎯 skill: ticket_analyzer
📋 tarea: [descripción]
```

---

## 📞 Contacto y Soporte

- **Repo Global**: `../../../ai_skill_dev1/`
- **Metodología**: `../../../ai_skill_dev1/AI_SKILL_DEVELOPMENT_METHODOLOGY.md`
- **Agentes**: `../../../ai_skill_dev1/ai_global/agents/`
- **Skills**: `../../../ai_skill_dev1/ai_global/skills/`

---

## 🎯 Próximos Pasos

1. ✅ FASE 2: Preparación del proyecto (En curso)
2. ⏳ FASE 2.3: Investigación (Kakashi)
3. ⏳ FASE 2.4: Diseño (Kakashi + Equipo)
4. ⏳ FASE 3: Implementación (Todos)
5. ⏳ Testing + QA
6. ⏳ Deployment

---

**Proyecto**: PWA Inversiones DRFIC  
**Metodología**: AI SKILL DEVELOPMENT v2.2  
**Team**: Kakashi, Naruto, Sasuke, Sakura, Pelonchas  
**Status**: ⏳ Ready for FASE 2.3
