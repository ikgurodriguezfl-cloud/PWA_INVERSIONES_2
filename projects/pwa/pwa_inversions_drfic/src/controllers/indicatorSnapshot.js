import { IndicatorSnapshot } from '../models/indicatorSnapshot.js';

export class IndicatorSnapshotController {
    getAll = async (req, res) => {
        try {
            const { symbol, timeframe } = req.query;
            const filter = {};
            if (symbol)    filter.symbol    = symbol;
            if (timeframe) filter.timeframe = timeframe;

            const snapshots = await IndicatorSnapshot.find(filter).sort({ timestamp: -1 });
            res.json(snapshots);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    getById = async (req, res) => {
        try {
            const snapshot = await IndicatorSnapshot.findById(req.params.id);
            if (!snapshot) return res.status(404).json({ message: 'Snapshot no encontrado' });
            res.json(snapshot);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    getLatestBySymbol = async (req, res) => {
        try {
            const { symbol, timeframe } = req.params;
            const snapshot = await IndicatorSnapshot
                .findOne({ symbol, timeframe })
                .sort({ timestamp: -1 });
            if (!snapshot) return res.status(404).json({ message: `No hay snapshot para ${symbol} ${timeframe}` });
            res.json(snapshot);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    create = async (req, res) => {
        try {
            const snapshot = new IndicatorSnapshot(req.body);
            await snapshot.save();
            res.status(201).json(snapshot);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    update = async (req, res) => {
        try {
            const snapshot = await IndicatorSnapshot.findByIdAndUpdate(
                req.params.id, req.body, { new: true }
            );
            res.json(snapshot);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    delete = async (req, res) => {
        try {
            await IndicatorSnapshot.findByIdAndDelete(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}