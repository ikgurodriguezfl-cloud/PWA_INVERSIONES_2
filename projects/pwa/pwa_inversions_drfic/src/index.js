import express, { json } from 'express';
import { createInstrumentRouter } from './routes/instrument.js';
import { createIndicatorRouter } from './routes/indicator.js';
import { createCandleRouter } from './routes/candle.js';
import { createSignalRouter } from './routes/signal.js';
import { createAnalysisRouter } from './routes/analysis.js';
import { corsMiddleware } from './middlewares/cors.js';

export const createApp = ({ instrumentModel, indicatorModel, candleModel, signalModel, analysisModel }) => {
    const app = express();
    app.use(json());
    app.disable("x-powered-by");

    app.use(corsMiddleware());

    app.use('/instruments', createInstrumentRouter({ instrumentModel }));
    app.use('/indicators', createIndicatorRouter({ indicatorModel }));
    app.use('/candles', createCandleRouter({ candleModel }));
    app.use('/signals', createSignalRouter({ signalModel }));
    app.use('/analyses', createAnalysisRouter({ analysisModel }));

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
}