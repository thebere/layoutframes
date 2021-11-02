import express from 'express';
import gridContoller from '../controllers/Grids';

export function registerApp(app: express.Application) {
  app.get('/', (_, res) => res.json({ message: 'All good!' }));

  app.get('/grids/filter/:width/:height', gridContoller.getSquares);
}
