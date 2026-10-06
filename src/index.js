import express from 'express';
import { port } from './config.js';
import router from './routes/movies.routes.js';
import { sequelize } from './db.js';
import morgan from 'morgan';
import "./models/Movie.js";

const app = express();

try {
    app.use(express.json());

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "*");
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        next();
    });

    app.use(morgan("dev"));
    app.listen(port);

    app.use(router);

    await sequelize.sync();

    console.log(`Servidor expuesto en: http://localhost:${port}`);
} catch (error) {
    console.log(`Hubo un error: ${error}`);
}