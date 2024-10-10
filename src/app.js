import express from 'express';
import dotenv from 'dotenv';
import { AppInit } from './init/initialConfig.js';
dotenv.config();

const app = express();
AppInit(app);

app.listen(process.env.PORT, () => {
    console.log(`Servidor en puerto ${process.env.PORT}`);
});
