import { Candle } from "../models/candle.js";

export class CandleController {

    getAll = async (req, res) => {
        const { symbol, timeframe } = req.query;
        const filter = {};
        if (symbol) filter.symbol = symbol;
        if (timeframe) filter.timeframe = timeframe;

        const candles = await Candle.find(filter);
        res.json(candles);
    }

    create = async (req, res) => {
        try {
            const candle = new Candle(req.body);
            await candle.save();
            res.status(201).json(candle);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    delete = async (req, res) => {
        try {
            const { id } = req.params;
            await Candle.findByIdAndDelete(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    update = async (req, res) => {
        try {
            const { id } = req.params;
            const candle = await Candle.findByIdAndUpdate(id, req.body, { new: true });
            res.json(candle);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}