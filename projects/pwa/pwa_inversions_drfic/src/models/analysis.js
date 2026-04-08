import mongoose from 'mongoose';

const analysisSchema = new mongoose.Schema({
    instrumentId:  { type: mongoose.Schema.Types.ObjectId, ref: 'Instrument', required: true },
    signalId:      { type: mongoose.Schema.Types.ObjectId, ref: 'Signal' },
    symbol:        { type: String, required: true },
    timestamp:     { type: Date, default: Date.now },
    timeframe:     { type: String, required: true },

    macdAnalysis: {
        trend:        { type: String, enum: ['BULLISH', 'BEARISH', 'NEUTRAL'] },
        crossover:    { type: Boolean },   // ¿hubo cruce?
        histogramDir: { type: String, enum: ['GROWING', 'SHRINKING', 'FLAT'] }
    },

    ironCondorAnalysis: {
        viable:        { type: Boolean },  // ¿es buen momento para abrir un condor?
        volatility:    { type: String, enum: ['LOW', 'MEDIUM', 'HIGH'] },
        suggestedRange:{ type: String }    // ej. "150-170"
    },

    recommendation: { type: String, enum: ['INVEST', 'WAIT', 'AVOID'], required: true },
    confidence:     { type: Number, min: 0, max: 100 },
    notes:          { type: String }
});

export const Analysis = mongoose.model('Analysis', analysisSchema);