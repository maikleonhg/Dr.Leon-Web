// app.js
import express from 'express';
import userRouter from './router/userRoutes.js';

const app = express();
app.use(express.json());

app.use('/api/users', userRouter);

export default app;
