import mongoose from 'mongoose';

const legSchema = new mongoose.Schema({
    action: { type: String, enum: ['BUY', 'SELL'] },
    type:   { type: String, enum: ['CALL', 'PUT'] },
    strike: { type: Number },
    expiry: { type: String },
    bid:    { type: Number },
    ask:    { type: Number }
}, { _id: false });

const unusualActivitySchema = new mongoose.Schema({
    strike: { type: Number },
    expiry: { type: String },
    type:   { type: String, enum: ['CALL', 'PUT'] },
    volume: { type: Number },
    oi:     { type: Number },
    reason: { type: String }
}, { _id: false });

const signalSchema = new mongoose.Schema({
    signalId:       { type: String, required: true, unique: true },
    symbol:         { type: String, required: true },
    timestamp:      { type: Date, required: true },
    direction:      { type: String, enum: ['BUY', 'SELL', 'NEUTRAL'], required: true },
    signalType:     { type: String, enum: ['TECHNICAL', 'OPTIONS', 'COMBINED'], required: true },
    confidence:     { type: Number, min: 0, max: 100 },
    timeframe:      { type: String, required: true },
    priceAtSignal:  { type: Number },
    suggestedEntry: { type: Number },
    suggestedSL:    { type: Number },
    suggestedTP1:   { type: Number },
    suggestedTP2:   { type: Number },
    riskRewardRatio:{ type: Number },

    technicalInputs: {
        rsi: {
            value:      { type: Number },
            signal:     { type: String, enum: ['OVERSOLD', 'OVERBOUGHT', 'NEUTRAL'] },
            divergence: { type: String, enum: ['BULLISH', 'BEARISH', 'NONE'] }
        },
        macd: {
            macdLine:   { type: Number },
            signalLine: { type: Number },
            histogram:  { type: Number },
            signal:     { type: String, enum: ['BULLISH_CROSS', 'BEARISH_CROSS', 'NEUTRAL'] }
        },
        bollingerBands: {
            upper:    { type: Number },
            middle:   { type: Number },
            lower:    { type: Number },
            bandwidth:{ type: Number },
            percentB: { type: Number },
            signal:   { type: String }
        },
        ema: {
            ema9:   { type: Number },
            ema21:  { type: Number },
            ema50:  { type: Number },
            ema200: { type: Number },
            signal: { type: String }
        },
        volume: {
            current: { type: Number },
            avg20d:  { type: Number },
            ratio:   { type: Number }
        },
        confirmedIndicators: { type: Number },
        totalIndicators:     { type: Number }
    },

    optionsInputs: {
        ivRank:       { type: Number },
        ivPercentile: { type: Number },
        maxPainStrike:{ type: Number },
        putCallRatio: { type: Number },
        skew:         { type: String, enum: ['BULLISH', 'BEARISH', 'NEUTRAL'] },
        unusualActivity: [unusualActivitySchema],
        recommendedStrategy: { type: String },
        strategyDetails: {
            legs:      [legSchema],
            maxProfit: { type: Number },
            maxLoss:   { type: Number },
            netDebit:  { type: Number },
            breakeven: { type: Number }
        }
    },

    marketContext: {
        vix:           { type: Number },
        spyTrend:      { type: String, enum: ['BULLISH', 'BEARISH', 'NEUTRAL'] },
        sectorTrend:   { type: String, enum: ['BULLISH', 'BEARISH', 'NEUTRAL'] },
        marketSession: { type: String, enum: ['PRE', 'REGULAR', 'AFTER'] }
    },

    status:      { type: String, enum: ['ACTIVE', 'TRIGGERED', 'EXPIRED', 'CANCELLED'], default: 'ACTIVE' },
    triggeredAt: { type: Date, default: null },
    outcome:     { type: String, enum: ['WIN', 'LOSS', 'BREAKEVEN', null], default: null },
    pnlPct:      { type: Number, default: null },
    tags:        [{ type: String }],
    createdBy:   { type: String, default: 'signal-engine-v1' },
    version:     { type: Number, default: 1 }
});

signalSchema.index({ symbol: 1, timestamp: -1 });
signalSchema.index({ status: 1 });

export const Signal = mongoose.model('Signal', signalSchema);