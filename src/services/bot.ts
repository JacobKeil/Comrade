import { config } from 'dotenv';
config();

import { CustomClient } from '../common/interfaces.js';

const Comrade = new CustomClient();
Comrade.login(process.env.BOT_TOKEN);
