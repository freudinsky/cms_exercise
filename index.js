import express from 'express';
import pool from './db/server.js';
import filmsRouter from './routes/filmsRouter.js';

const app = express();
const port = 8000;

app.use(express.json());
app.use('/films', filmsRouter);

app.listen(port, () => console.log(`server is running on port: ${port}`));