import mongoose from 'mongoose';

const signalSchema = new mongoose.Schema({
    instrumentId:  { type: mongoose.Schema.Types.ObjectId, ref: 'Instrument', required: true },
    indicatorId:   { type: mongoose.Schema.Types.ObjectId, ref: 'Indicator', required: true },
    symbol:        { type: String, required: true },
    timestamp:     { type: Date, default: Date.now },
    type:          { type: String, enum: ['BUY', 'SELL', 'HOLD', 'OPEN_CONDOR', 'CLOSE_CONDOR'], required: true },
    strategy:      { type: String, enum: ['MACD', 'IRON_CONDOR', 'COMBINED'], required: true },
    strength:      { type: Number, min: 0, max: 100 },  // qué tan fuerte es la señal (0-100)
    reason:        { type: String },                     // ej. "MACD cruce alcista + histograma bajo"
    price:         { type: Number },                     // precio al momento de la señal
    status:        { type: String, enum: ['PENDING', 'EXECUTED', 'EXPIRED'], default: 'PENDING' }
});

export const Signal = mongoose.model('Signal', signalSchema);