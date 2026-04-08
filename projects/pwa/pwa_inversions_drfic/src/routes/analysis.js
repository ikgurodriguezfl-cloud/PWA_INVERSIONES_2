import { Router } from "express"
import { AnalysisController } from "../controllers/analysis.js";

export const createAnalysisRouter = ({ analysisModel }) => {
    const AnalysisRouter = Router();
    const analysisController = new AnalysisController({ analysisModel });

    AnalysisRouter.get("/", analysisController.getAll);
    AnalysisRouter.post("/", analysisController.create);
    AnalysisRouter.delete("/:id", analysisController.delete);
    AnalysisRouter.patch("/:id", analysisController.update);

    return AnalysisRouter;
}