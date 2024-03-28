
// tests/signup.test.js
import supertest from 'supertest';
import app from '../app.js'; // Asegúrate de que esta ruta sea correcta
import User from '../models/user.js'; // Asegúrate de que esta ruta sea correcta
import db from '../database/db.js';
//falta implementar el jpi y bcryptjs

const request = supertest(app);

describe.skip('POST /api/users/sign-up', () => {
  beforeEach(async () => {
    await User.destroy({ where: {}, truncate: true });
  });

  it('should register a new user', async () => {
    const res = await request
      .post('/api/users/sign-up')
      .send({
        username: 'newuser',
        email: 'newuser@example.com',
        password: 'password123',
        role: 'USER'
      });
    expect(res.statusCode).toEqual(201);
    // Ajusta las expectativas según las respuestas reales de tu API
  });

  it('should register a new user with role MEDIC', async () => {
    const res = await request
      .post('/api/users/sign-up')
      .send({
        username: 'medicuser',
        email: 'medicuser@example.com',
        password: 'medicpass123',
        role: 'MEDIC'
      });
    expect(res.statusCode).toEqual(201);
    // Ajusta las expectativas según las respuestas reales de tu API
  });
  

  it('should not register a user with an existing username', async () => {
    await User.create({
      username: 'testuser',
      email: 'testuser@example.com',
      password: 'password123',
      role: 'USER'
    });

    const res = await request
      .post('/api/users/sign-up')
      .send({
        username: 'testuser',
        email: 'newemail@example.com',
        password: 'password123',
        role: 'USER'
      });
      console.log('Respuesta al intentar registrar un nuevo usuario:', res.statusCode, res.body);
    expect(res.statusCode).toEqual(400);
    // Ajusta las expectativas según las respuestas reales de tu API
  });
  afterAll(async () => {
    // Cierra la conexión a la base de datos
    await db.close();
  });
});
