/**
 * [EN] Types for Broker API Integration
 * [ES] Tipos para integración con APIs de brokers
 */

export interface MarketData {
  symbol: string
  price: number
  change: number
  changePercent: number
  timestamp: number
}

export interface Position {
  symbol: string
  quantity: number
  averagePrice: number
  currentPrice: number
  pnl: number
  pnlPercent: number
}

export interface TechnicalIndicators {
  sma20: number
  sma50: number
  sma200: number
  rsi14: number
  macd: number
  bbUpper: number
  bbLower: number
}

export interface User {
  id: string
  email: string
  name: string
  createdAt: Date
}

export interface BrokerConnection {
  id: string
  provider: 'IBKR' | 'Alpaca'
  accountId: string
  status: 'active' | 'inactive' | 'error'
}
