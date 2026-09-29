import express from 'express';
import { port } from './config.js';
import router from './routes/moviesRoutes.js';
import { sequelize } from './db.js';
import morgan from 'morgan';
import "./models/Movie.js";

const app = express();

try {
    app.use(express.json());
    app.use(morgan("dev"));
    app.listen(port);

    app.use(router);

    await sequelize.sync();

    console.log(`Servidor expuesto en: http://localhost:${port}`);
} catch (error) {
    console.log(`Hubo un error: ${error}`);
}