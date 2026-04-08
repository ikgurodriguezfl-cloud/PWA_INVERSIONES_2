import { Router } from "express";
import { CandleController } from "../controllers/candle.js";

export const createCandleRouter = ({ candleModel }) => {
    const CandleRouter = Router();
    const candleController = new CandleController({ candleModel });

    CandleRouter.get("/", candleController.getAll);
    CandleRouter.post("/", candleController.create);
    CandleRouter.delete("/:id", candleController.delete);
    CandleRouter.patch("/:id", candleController.update);

    return CandleRouter;
}