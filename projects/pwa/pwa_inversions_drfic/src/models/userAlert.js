import mongoose from 'mongoose';

const userAlertSchema = new mongoose.Schema({
    userId:    { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    symbol:    { type: String, required: true },
    alertType: { type: String, enum: ['SIGNAL', 'PRICE', 'IV_RANK', 'RSI'], required: true },

    conditions: {
        direction:    [{ type: String, enum: ['BUY', 'SELL', 'NEUTRAL'] }],
        minConfidence:{ type: Number, min: 0, max: 100 },
        timeframes:   [{ type: String }],
        signalTypes:  [{ type: String, enum: ['TECHNICAL', 'OPTIONS', 'COMBINED'] }]
    },

    channels:     [{ type: String, enum: ['email', 'push', 'webhook'] }],
    webhookUrl:   { type: String },
    isActive:     { type: Boolean, default: true },
    lastTriggered:{ type: Date },
    triggerCount: { type: Number, default: 0 },
    createdAt:    { type: Date, default: Date.now }
});

userAlertSchema.index({ userId: 1 });
userAlertSchema.index({ symbol: 1, isActive: 1 });

export const UserAlert = mongoose.model('UserAlert', userAlertSchema);