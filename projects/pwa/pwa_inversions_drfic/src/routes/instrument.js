import { Router } from "express";
import { InstrumentController } from "../controllers/instrument.js";

export const createInstrumentRouter = ({ instrumentModel }) => {
    const InstrumentRouter = Router();
    const instrumentController = new InstrumentController({ instrumentModel });

    InstrumentRouter.get("/", instrumentController.getAll);
    InstrumentRouter.post("/", instrumentController.create);
    InstrumentRouter.delete("/:id", instrumentController.delete);
    InstrumentRouter.patch("/:id", instrumentController.update);

    return InstrumentRouter;
}