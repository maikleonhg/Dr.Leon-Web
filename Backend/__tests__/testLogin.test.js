// tests/login.test.js
import supertest from 'supertest';
import app from '../app.js'; // Asegúrate de que esta ruta sea correcta
import bcrypt from 'bcryptjs';
import User from '../models/user.js'; // Asegúrate de que esta ruta sea correcta
import db from '../database/db.js';
import dotenv from 'dotenv';
dotenv.config();


const request = supertest(app);

describe.skip('POST /api/users/login', () => {
  beforeAll(async () => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    console.log('Setting up database for test...');
    // Inserta usuarios de prueba en la base de datos antes de los tests
    const hashedPassword = await bcrypt.hash('password123', 8);
    await User.create({
      username: 'testuser',
      email: 'testuser@example.com',
      password: hashedPassword,
      role: 'USER'
    });

    const hashedMedicPassword = await bcrypt.hash('medicpass123', 8);
    await User.create({
      username: 'medicuser',
      email: 'medicuser@example.com',
      password: hashedMedicPassword,
      role: 'MEDIC'
    });
  });

  it('should authenticate a user with valid credentials', async () => {
    console.log('Testing authentication with valid credentials...');
    const res = await request
      .post('/api/users/login')
      .send({
        username: 'testuser',
        password: 'password123'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token'); // Asegúrate de que la API responda con un token
  });

  it('should not authenticate a user with invalid credentials', async () => {
    console.log('Testing authentication with invalid credentials...');
    const res = await request
      .post('/api/users/login')
      .send({
        username: 'testuser',
        password: 'wrongpassword'
      });
    expect(res.statusCode).toEqual(400); // Ajusta este código según tu API
  });

  afterAll(async () => {
    // Limpia los usuarios de prueba y cierra la conexión a la base de datos
    console.log('Cleaning up database after tests...');
    await User.destroy({ where: {}, truncate: true });
    await db.close();
  });
});
