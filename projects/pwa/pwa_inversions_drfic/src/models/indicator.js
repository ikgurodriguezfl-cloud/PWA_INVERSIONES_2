import mongoose from 'mongoose';

const indicatorSchema = new mongoose.Schema({
    instrumentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Instrument', required: true },
    symbol:       { type: String, required: true },
    timeframe:    { type: String, required: true },
    timestamp:    { type: Date, required: true },
    type:         { type: String, enum: ['MACD', 'RSI', 'BB', 'EMA'], required: true },

    // campos MACD
    macd: {
        macdLine:    { type: Number },  // línea MACD
        signalLine:  { type: Number },  // línea de señal
        histogram:   { type: Number },  // diferencia
        ema12:       { type: Number },
        ema26:       { type: Number }
    },

    // campos Iron Condor
    ironCondor: {
        upperStrike:  { type: Number },  // strike del call vendido
        lowerStrike:  { type: Number },  // strike del put vendido
        upperWing:    { type: Number },  // strike del call comprado
        lowerWing:    { type: Number },  // strike del put comprado
        maxProfit:    { type: Number },
        maxLoss:      { type: Number },
        breakEvenUp:  { type: Number },
        breakEvenDown:{ type: Number }
    }
});

indicatorSchema.index({ symbol: 1, type: 1, timestamp: -1 });

export const Indicator = mongoose.model('Indicator', indicatorSchema);