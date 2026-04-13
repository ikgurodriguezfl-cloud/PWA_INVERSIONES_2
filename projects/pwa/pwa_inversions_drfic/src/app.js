import dotenv from 'dotenv';
dotenv.config();

import { conectarDB } from './config/mongo.js';
import { createApp } from './index.js';
import { Instrument } from './models/instrument.js';
import { OptionsChain } from './models/optionsChain.js'
import { UserAlert } from './models/userAlert.js'
import { IndicatorSnapshot } from './models/indicatorSnapshot.js'
import { Signal } from './models/signal.js';

await conectarDB();
createApp({ instrumentModel: Instrument, signalModel: Signal, optionsChainModel: OptionsChain, indicatorSnapshotModel: IndicatorSnapshot, userAlertModel: UserAlert });