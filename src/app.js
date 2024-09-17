import express from 'express';
import { __dirname } from './utils.js';
import { AppInit } from './init/initialConfig.js';
import path from 'path';

const app = express();

AppInit(app);


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 

app.listen(process.env.PORT || 8080, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT || 8080}`);
});
