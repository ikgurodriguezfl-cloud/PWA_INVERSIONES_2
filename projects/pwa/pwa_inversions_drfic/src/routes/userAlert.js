import { Router } from 'express';
import { UserAlertController } from '../controllers/userAlert.js';

export const createUserAlertRouter = () => {
    const router = Router();
    const controller = new UserAlertController();

    router.get('/',                    controller.getAll);
    router.get('/:id',                 controller.getById);
    router.get('/user/:userId',        controller.getByUser);
    router.post('/',                   controller.create);
    router.patch('/:id',               controller.update);
    router.patch('/:id/toggle',        controller.toggleActive);
    router.delete('/:id',              controller.delete);

    return router;
};