import mongoose from 'mongoose';

const instrumentSchema = new mongoose.Schema({
    symbol:      { type: String, required: true, unique: true },
    name:        { type: String, required: true },
    sector:      { type: String },
    industry:    { type: String },
    marketCap:   { type: Number },
    avgVolume30d:{ type: Number },
    sp500Weight: { type: Number },
    beta:        { type: Number },
    earningsDate:{ type: Date },
    dividendDate:{ type: Date },
    optionsEnabled: { type: Boolean, default: false },

    analysisConfig: {
        macd: {
            fast:   { type: Number, default: 12 },
            slow:   { type: Number, default: 26 },
            signal: { type: Number, default: 9 }
        },
        rsi: {
            period:     { type: Number, default: 14 },
            oversold:   { type: Number, default: 30 },
            overbought: { type: Number, default: 70 }
        },
        atr: {
            period: { type: Number, default: 14 }
        },
        bb: {
            period: { type: Number, default: 20 },
            stdDev: { type: Number, default: 2.0 }
        },
        preferredTimeframes: {
            type: [String],
            enum: ['1m', '5m', '15m', '1h', '4h', '1d'],
            default: ['1h', '1d']
        }
    },

    isActive:  { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export const Instrument = mongoose.model('Instrument', instrumentSchema);