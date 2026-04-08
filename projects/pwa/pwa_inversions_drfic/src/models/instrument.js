import mongoose from 'mongoose';

const instrumentSchema = new mongoose.Schema({
    symbol:      { type: String, required: true, unique: true }, // ej. "AAPL", "BTC/USD"
    name:        { type: String, required: true },               // ej. "Apple Inc."
    type:        { type: String, enum: ['stock', 'crypto', 'forex', 'option'], required: true },
    exchange:    { type: String },                               // ej. "NASDAQ", "Binance"
    currency:    { type: String, default: 'USD' },
    active:      { type: Boolean, default: true },
    createdAt:   { type: Date, default: Date.now }
});

export const Instrument = mongoose.model('Instrument', instrumentSchema);