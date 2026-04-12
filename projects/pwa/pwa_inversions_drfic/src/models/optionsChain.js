import mongoose from 'mongoose';

const greeksSchema = new mongoose.Schema({
    delta: { type: Number },
    gamma: { type: Number },
    theta: { type: Number },
    vega:  { type: Number },
    rho:   { type: Number }
}, { _id: false });

const optionLegSchema = new mongoose.Schema({
    bid:          { type: Number },
    ask:          { type: Number },
    last:         { type: Number },
    volume:       { type: Number },
    openInterest: { type: Number },
    iv:           { type: Number },
    greeks:       greeksSchema
}, { _id: false });

const strikeSchema = new mongoose.Schema({
    strike: { type: Number },
    call:   optionLegSchema,
    put:    optionLegSchema
}, { _id: false });

const expirationSchema = new mongoose.Schema({
    expiryDate:   { type: String },
    daysToExpiry: { type: Number },
    callPutRatio: { type: Number },
    totalCallOI:  { type: Number },
    totalPutOI:   { type: Number },
    strikes:      [strikeSchema]
}, { _id: false });

const optionsChainSchema = new mongoose.Schema({
    symbol:           { type: String, required: true },
    timestamp:        { type: Date, required: true },
    underlyingPrice:  { type: Number },
    expirations:      [expirationSchema],
    ivSurface: {
        ivRank:         { type: Number },
        ivPercentile:   { type: Number },
        historicalIV30d:{ type: Number },
        impliedMove:    { type: Number },
        skewIndex:      { type: Number }
    },
    ttl: { type: Date }  // MongoDB elimina el documento automáticamente en esta fecha
});

// índice TTL — MongoDB borra el documento cuando llega la fecha
optionsChainSchema.index({ ttl: 1 }, { expireAfterSeconds: 0 });
optionsChainSchema.index({ symbol: 1, timestamp: -1 });

export const OptionsChain = mongoose.model('OptionsChain', optionsChainSchema);