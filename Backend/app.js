// app.js
import express from 'express';
import userRouter from './router/userRoutes.js';
import dotenv from 'dotenv';
dotenv.config();
console.log('Clave secreta después de cargar dotenv:', process.env.SECRET_KEY);


const app = express();
app.use(express.json());

app.use('/api/users', userRouter);

export default app;
