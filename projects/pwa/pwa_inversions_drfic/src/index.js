import express, { json } from 'express';
import { createInstrumentRouter } from './routes/instrument.js';
import { createSignalRouter } from './routes/signal.js';
import { createOptionsChainRouter } from './routes/optionsChain.js';
import { createIndicatorSnapshotRouter } from './routes/indicatorSnapshot.js';
import { createUserAlertRouter } from './routes/userAlert.js';
import { corsMiddleware } from './middlewares/cors.js';

export const createApp = ({ instrumentModel, signalModel, optionsChainModel, indicatorSnapshotModel, userAlertModel }) => {
    const app = express();
    app.use(json());
    app.disable("x-powered-by");

    app.use(corsMiddleware());

    app.use('/instruments', createInstrumentRouter({ instrumentModel }));
    app.use('/signals', createSignalRouter({ signalModel }));
    app.use('/optionsChains', createOptionsChainRouter({ optionsChainModel }));
    app.use('/indicatorSnapshots', createIndicatorSnapshotRouter({ indicatorSnapshotModel }));
    app.use('/userAlerts', createUserAlertRouter({ userAlertModel }));

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
}