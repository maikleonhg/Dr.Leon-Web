//authenticateUser
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js'; // Asegúrate de que la ruta al modelo User sea correcta
//import 'dotenv/config';

const authenticateUser = async ({ username, password }) => {
  console.log('Datos recibidos en authenticateUser:', { username, password });

  const user = await User.findOne({ where: { username } });
  console.log('Usuario encontrado:', user ? 'Sí' : 'No');
  if (!user) {
    throw new Error('Invalid username or password.');
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  console.log('Coincidencia de contraseña:', passwordMatch ? 'Sí' : 'No');
  if (!passwordMatch) {
    throw new Error('Invalid username or password.');
  }
  console.log('Clave secreta:', process.env.SECRET_KEY);
  console.log('Generando token JWT...');
  const { password: _, ...userData } = user.toJSON();
  const token = jwt.sign(userData, process.env.SECRET_KEY, {
    subject: userData.id,
    expiresIn: '30m', // Expira en 30 minutos
  });

  console.log('Autenticación exitosa:', { userData, token });
  return { token, userInfo: userData };
};

export default authenticateUser;
