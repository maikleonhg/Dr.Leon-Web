// app.js
import express from 'express';
import cors from 'cors'; // Importar el paquete cors
import userRouter from './router/userRoutes.js';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

const app = express();
const originCors = process.env.ORIGIN_CORS;

// Configuración de CORS
app.use(cors({
  origin: originCors, // Permitir solo el origen del frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Cabeceras permitidas
  credentials: true, // Permitir el envío de credenciales
}));

app.use(express.json());

app.use((req, res, next) => {
    console.log(`Solicitud recibida: ${req.method} ${req.url}`);
    next();
  });

app.use('/api/users', userRouter);

export default app;
