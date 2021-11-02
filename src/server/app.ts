import express from 'express';
import { registerApp } from '../routes';

const app: express.Application = express();

app.use(express.json());

registerApp(app);

export default app;
