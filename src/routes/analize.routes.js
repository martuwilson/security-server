import express from 'express';
import { analyzeURL,getWebsiteInfo  } from '../controllers/analyze.controller.js';

const router = express.Router();

router.post('/analyze', analyzeURL);
router.post('/infoweb', getWebsiteInfo);

export default router;
