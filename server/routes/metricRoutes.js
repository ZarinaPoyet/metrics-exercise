import express from 'express';
import { createMetric, getMetrics } from '../controllers/metricController.js';

const router = express.Router();

router.post('/metric', createMetric);
router.get('/metrics', getMetrics);

export default router;
