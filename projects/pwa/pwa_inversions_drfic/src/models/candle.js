import mongoose from 'mongoose';

const candleSchema = new mongoose.Schema({
    instrumentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Instrument', required: true },
    symbol:       { type: String, required: true },
    timeframe:    { type: String, enum: ['1m', '5m', '15m', '1h', '4h', '1d'], required: true },
    timestamp:    { type: Date, required: true },
    open:         { type: Number, required: true },
    high:         { type: Number, required: true },
    low:          { type: Number, required: true },
    close:        { type: Number, required: true },
    volume:       { type: Number, required: true }
});

candleSchema.index({ symbol: 1, timeframe: 1, timestamp: -1 });

export const Candle = mongoose.model('Candle', candleSchema);