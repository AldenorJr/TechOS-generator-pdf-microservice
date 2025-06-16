import express, { Request, Response, NextFunction } from 'express'
import { ErrorRequestHandler } from 'express';
import { router } from './Router';
import cors from 'cors';

export const server = express();
const port = 8081;
export const andress = process.env.ADDRESS;

server.use(express.json())
server.use(cors());
server.use(router);
server.set('trust proxy', true);

server.listen(port, () => {
    console.log('')
    console.log(' * Servidores de TeleVideo ligados.')
    console.log(` Servidor back-end na porta ${port}`);
    console.log('')
});