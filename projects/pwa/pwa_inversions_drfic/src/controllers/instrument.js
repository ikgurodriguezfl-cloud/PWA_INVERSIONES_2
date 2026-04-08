import { Instrument } from "../models/instrument.js";

export class InstrumentController {

    getAll = async (req, res) => {
        try {
            const instruments = await Instrument.find();
            res.json(instruments);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    create = async (req, res) => {
        try {
            const instrument = new Instrument(req.body);
            await instrument.save();
            res.status(201).json(instrument);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    delete = async (req, res) => {
        try {
            const { id } = req.params;
            await Instrument.findByIdAndDelete(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    update = async (req, res) => {
        try {
            const { id } = req.params;
            const instrument = await Instrument.findByIdAndUpdate(id, req.body, { new: true });
            res.json(instrument);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}