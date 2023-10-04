import express, { Router } from 'express';
import { getItems } from '@controllers/itemController';

const router: Router = express.Router();

// Define the route for getting a list of items
router.get('/items', getItems);

export default router;