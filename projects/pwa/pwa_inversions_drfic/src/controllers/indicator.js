import { Indicator } from "../models/indicator.js";

export class IndicatorController {

    getAll = async (req, res) => {
        const { symbol, timeframe } = req.query;
        const filter = {};
        if (symbol) filter.symbol = symbol;
        if (timeframe) filter.timeframe = timeframe;

        const indicators = await Indicator.find(filter);
        res.json(indicators);
    }

    create = async (req, res) => {
        try {
            const indicator = new Indicator(req.body);
            await indicator.save();
            res.status(201).json(indicator);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    delete = async (req, res) => {
        try {
            const { id } = req.params;
            await Indicator.findByIdAndDelete(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    update = async (req, res) => {
        try {
            const { id } = req.params;
            const indicator = await Indicator.findByIdAndUpdate(id, req.body, { new: true });
            res.json(indicator);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}