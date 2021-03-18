import 'reflect-metadata';
import express from 'express';
import createConnection from './database';
import { router } from './routes';
import cors from 'cors';

createConnection();
const app = express();
app.use(express.json());
app.use(cors());
app.use(router);


export {app};