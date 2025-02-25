import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
// import pool from './database/index.js'; // Conection to PostgreSQL
import analyzeRoute from './routes/analize.routes.js';

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/sec', analyzeRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`✅ Server listening on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('uncaughtException', (err) => {
    console.error('🔥 Uncaught Exception:', err);
});
