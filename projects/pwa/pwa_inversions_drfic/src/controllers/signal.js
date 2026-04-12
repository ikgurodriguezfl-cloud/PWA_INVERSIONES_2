import { Signal } from "../models/signal.js";

export class SignalController {

    getAll = async (req, res) => {
        try {
            const signals = await Signal.find();
            res.json(signals);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    create = async (req, res) => {
        try {
            const signal = new Signal(req.body);
            await signal.save();
            res.status(201).json(signal);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    delete = async (req, res) => {
        try {
            const { id } = req.params;
            await Signal.findByIdAndDelete(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    update = async (req, res) => {
        try {
            const { id } = req.params;
            const signal = await Signal.findByIdAndUpdate(id, req.body, { new: true });
            res.json(signal);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}