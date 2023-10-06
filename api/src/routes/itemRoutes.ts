import express, { Router } from 'express';
import { getItems, getItem } from '@controllers/itemController';

const router: Router = express.Router();

router.get('/items', getItems);
router.get('/items/:id', getItem);

export default router;