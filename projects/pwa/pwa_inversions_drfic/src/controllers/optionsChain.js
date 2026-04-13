import { OptionsChain } from '../models/optionsChain.js';

export class OptionsChainController {
    getAll = async (req, res) => {
        try {
            const { symbol } = req.query;
            const filter = {};
            if (symbol) filter.symbol = symbol;

            const chains = await OptionsChain.find(filter).sort({ timestamp: -1 });
            res.json(chains);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    getById = async (req, res) => {
        try {
            const chain = await OptionsChain.findById(req.params.id);
            if (!chain) return res.status(404).json({ message: 'Options chain no encontrada' });
            res.json(chain);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    getLatestBySymbol = async (req, res) => {
        try {
            const { symbol } = req.params;
            const chain = await OptionsChain.findOne({ symbol }).sort({ timestamp: -1 });
            if (!chain) return res.status(404).json({ message: `No hay options chain para ${symbol}` });
            res.json(chain);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    create = async (req, res) => {
        try {
            const chain = new OptionsChain(req.body);
            await chain.save();
            res.status(201).json(chain);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    update = async (req, res) => {
        try {
            const chain = await OptionsChain.findByIdAndUpdate(
                req.params.id, req.body, { new: true }
            );
            res.json(chain);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    delete = async (req, res) => {
        try {
            await OptionsChain.findByIdAndDelete(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}