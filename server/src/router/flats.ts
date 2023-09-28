import { getAllFlats } from '../controllers/flats';
import { Router } from 'express';

export default (router: Router) => {
  router.get('/flats/:limit/:page', getAllFlats);
};
