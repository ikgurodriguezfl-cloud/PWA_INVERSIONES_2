import { Analysis } from "../models/analysis.js";

export class AnalysisController {

    getAll = async (req, res) => {
        try {
            const analyses = await Analysis.find();
            res.json(analyses);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    create = async (req, res) => {
        try {
            const analysis = new Analysis(req.body);
            await analysis.save();
            res.status(201).json(analysis);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    delete = async (req, res) => {
        try {
            const { id } = req.params;
            await Analysis.findByIdAndDelete(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    update = async (req, res) => {
        try {
            const { id } = req.params;
            const analysis = await Analysis.findByIdAndUpdate(id, req.body, { new: true });
            res.json(analysis);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}