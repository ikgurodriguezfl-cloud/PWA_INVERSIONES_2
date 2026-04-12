import { Router } from "express";
import { IndicatorController } from "../controllers/indicator.js";

export const createIndicatorRouter = ({ indicatorModel }) => {
    const IndicatorRouter = Router();
    const indicatorController = new IndicatorController({ indicatorModel });

    IndicatorRouter.get("/", indicatorController.getAll);
    IndicatorRouter.post("/", indicatorController.create);
    IndicatorRouter.delete("/:id", indicatorController.delete);
    IndicatorRouter.patch("/:id", indicatorController.update);

    return IndicatorRouter;
}