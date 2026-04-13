import { Router } from 'express';
import { IndicatorSnapshotController } from '../controllers/indicatorSnapshot.js';

export const createIndicatorSnapshotRouter = () => {
    const router = Router();
    const controller = new IndicatorSnapshotController();

    router.get('/',                              controller.getAll);
    router.get('/:id',                           controller.getById);
    router.get('/latest/:symbol/:timeframe',     controller.getLatestBySymbol);
    router.post('/',                             controller.create);
    router.patch('/:id',                         controller.update);
    router.delete('/:id',                        controller.delete);

    return router;
};