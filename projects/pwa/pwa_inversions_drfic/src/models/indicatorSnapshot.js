import mongoose from 'mongoose';

const indicatorSnapshotSchema = new mongoose.Schema({
    symbol:    { type: String, required: true },
    timeframe: { type: String, required: true },
    timestamp: { type: Date, required: true },

    ohlcv: {
        open:   { type: Number },
        high:   { type: Number },
        low:    { type: Number },
        close:  { type: Number },
        volume: { type: Number }
    },

    indicators: {
        rsi14:  { type: Number },
        rsi9:   { type: Number },
        macd: {
            line:      { type: Number },
            signal:    { type: Number },
            histogram: { type: Number }
        },
        bb20: {
            upper:     { type: Number },
            middle:    { type: Number },
            lower:     { type: Number },
            bandwidth: { type: Number },
            pctB:      { type: Number }
        },
        atr14:   { type: Number },
        stochK:  { type: Number },
        stochD:  { type: Number },
        ema9:    { type: Number },
        ema21:   { type: Number },
        ema50:   { type: Number },
        ema100:  { type: Number },
        ema200:  { type: Number },
        sma20:   { type: Number },
        sma50:   { type: Number },
        obv:     { type: Number },
        vwap:    { type: Number }
    },

    ttl: { type: Date }
});

// TTL igual que options_chains
indicatorSnapshotSchema.index({ ttl: 1 }, { expireAfterSeconds: 0 });
indicatorSnapshotSchema.index({ symbol: 1, timeframe: 1, timestamp: -1 });

export const IndicatorSnapshot = mongoose.model('IndicatorSnapshot', indicatorSnapshotSchema);