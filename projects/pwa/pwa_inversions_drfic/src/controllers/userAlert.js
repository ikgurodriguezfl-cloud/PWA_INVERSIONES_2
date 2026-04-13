import { UserAlert } from '../models/userAlert.js';

export class UserAlertController {
    getAll = async (req, res) => {
        try {
            const { userId, symbol } = req.query;
            const filter = {};
            if (userId) filter.userId = userId;
            if (symbol) filter.symbol = symbol;

            const alerts = await UserAlert.find(filter).sort({ createdAt: -1 });
            res.json(alerts);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    getById = async (req, res) => {
        try {
            const alert = await UserAlert.findById(req.params.id);
            if (!alert) return res.status(404).json({ message: 'Alerta no encontrada' });
            res.json(alert);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    getByUser = async (req, res) => {
        try {
            const alerts = await UserAlert
                .find({ userId: req.params.userId, isActive: true })
                .sort({ createdAt: -1 });
            res.json(alerts);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    create = async (req, res) => {
        try {
            const alert = new UserAlert(req.body);
            await alert.save();
            res.status(201).json(alert);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    update = async (req, res) => {
        try {
            const alert = await UserAlert.findByIdAndUpdate(
                req.params.id, req.body, { new: true }
            );
            res.json(alert);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    toggleActive = async (req, res) => {
        try {
            const alert = await UserAlert.findById(req.params.id);
            if (!alert) return res.status(404).json({ message: 'Alerta no encontrada' });

            alert.isActive = !alert.isActive;
            await alert.save();
            res.json({ id: alert._id, isActive: alert.isActive });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    delete = async (req, res) => {
        try {
            await UserAlert.findByIdAndDelete(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}