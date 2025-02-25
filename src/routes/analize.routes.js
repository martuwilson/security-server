import express from 'express';
import { analyzeURL } from '../controllers/analyze.controller.js';

const router = express.Router();

router.post('/analyze', analyzeURL);

export default router;
