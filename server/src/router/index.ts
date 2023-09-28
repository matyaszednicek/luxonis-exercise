import { Router } from 'express';
import flats from './flats';

const router = Router();

export default (): Router => {
  flats(router);

  return router;
};
