// tests/updateUser.test.js
import supertest from 'supertest';
import app from '../app.js'; // Asegúrate de que esta ruta sea correcta
import bcrypt from 'bcryptjs';
import User from '../models/user.js'; // Asegúrate de que la ruta al modelo User sea correcta
import db from '../database/db.js';
import dotenv from 'dotenv';

dotenv.config();
const request = supertest(app);

describe('PUT /api/users/edit', () => {
  let testUser;

  beforeAll(async () => {
    try {
      await db.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }

    console.log('Setting up database for test...');
    // Crea un usuario de prueba en la base de datos antes de los tests
    const hashedPassword = await bcrypt.hash('testpassword', 8);
    testUser = await User.create({
      username: 'testupdateuser',
      email: 'testupdateuser@example.com',
      password: hashedPassword,
      role: 'USER'
    });
  });

  it('should update a user with valid data', async () => {
    console.log('Testing user update with valid data...');
    const res = await request
      .put('/api/users/edit')
      .send({
        id: testUser.id,
        username: 'updateduser',
        email: 'updateduser@example.com'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.userInfo).toHaveProperty('username', 'updateduser');
    expect(res.body.userInfo).toHaveProperty('email', 'updateduser@example.com');
  });

  // Agrega más pruebas según sea necesario, por ejemplo, intentar actualizar un usuario que no existe

  afterAll(async () => {
    // Limpia los usuarios de prueba y cierra la conexión a la base de datos
    console.log('Cleaning up database after tests...');
    await User.destroy({ where: {}, truncate: true });
    await db.close();
  });
});
