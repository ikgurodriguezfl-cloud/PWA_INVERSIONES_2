import { Router } from "express";
import { SignalController } from "../controllers/signal.js";

export const createSignalRouter = ({ signalModel }) => {
    const SignalRouter = Router();
    const signalController = new SignalController({ signalModel });

    SignalRouter.get("/", signalController.getAll);
    SignalRouter.post("/", signalController.create);
    SignalRouter.delete("/:id", signalController.delete);
    SignalRouter.patch("/:id", signalController.update);

    return SignalRouter;
}