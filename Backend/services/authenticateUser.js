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

  console.log('Datos del usuario encontrado:', user.toJSON());

  const passwordMatch = await bcrypt.compare(password, user.password);
  console.log('Longitud de la contraseña almacenada:', user.password.length);
  console.log('Longitud de la contraseña proporcionada:', password.length);
  console.log('Coincidencia de contraseña:', passwordMatch ? 'Sí' : 'No');
  if (!passwordMatch) {
    throw new Error('Invalid username or password.');
  }
  console.log('Generando token JWT...');
  const tokenPayload = {
    id: user.id,
    username: user.username,
    email: user.email,
    role: user.role, // Incluye el campo role
  };

  const token = jwt.sign(tokenPayload, process.env.SECRET_KEY, {
    expiresIn: '30m', // Expira en 30 minutos
  });

  console.log('Autenticación exitosa:', { tokenPayload, token });
  return { token, userInfo: tokenPayload }; // Devuelve tokenPayload en lugar de userData
};

export default authenticateUser;