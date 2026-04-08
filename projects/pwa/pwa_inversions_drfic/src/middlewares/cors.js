import cors from "cors";

const ACCEPTED_ORIGINS = [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:3000"
];

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
    origin: (origin, callback) => {
        if (acceptedOrigins.includes(origin)) {
            return callback(null, true);
        }

        if (!origin || origin === 'null') {
            return callback(null, true);
        }

        return callback(new Error("origen no permitido por cors"));

    }
});