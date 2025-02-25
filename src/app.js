import dotenv from 'dotenv';
import express from 'express'; 
//import pool from './database/index.js'; // call pool to connect to database


const app = express();
dotenv.config();

app.use(express.json());

app.use('/api/sec', /* add route here */);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});