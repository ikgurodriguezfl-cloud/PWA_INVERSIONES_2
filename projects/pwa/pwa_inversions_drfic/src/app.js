import dotenv from 'dotenv';
dotenv.config();

import { conectarDB } from './config/mongo.js';
import { createApp } from './index.js';
import { Instrument } from './models/instrument.js';
import { Indicator } from './models/indicator.js';
import { Candle } from './models/candle.js';
import { Signal } from './models/signal.js';
import { Analysis } from './models/analysis.js';

await conectarDB();
createApp({ instrumentModel: Instrument, indicatorModel: Indicator, candleModel: Candle, signalModel: Signal, analysisModel: Analysis });