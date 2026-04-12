import { Router } from 'express';
import { OptionsChainController } from '../controllers/optionsChain.js';

export const createOptionsChainRouter = () => {
    const router = Router();
    const controller = new OptionsChainController();

    router.get('/',                      controller.getAll);
    router.get('/:id',                   controller.getById);
    router.get('/latest/:symbol',        controller.getLatestBySymbol);
    router.post('/',                     controller.create);
    router.patch('/:id',                 controller.update);
    router.delete('/:id',                controller.delete);

    return router;
};