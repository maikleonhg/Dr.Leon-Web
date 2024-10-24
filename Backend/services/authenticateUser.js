// services/authenticateUser.js
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js'; // Asegúrate de que la ruta al modelo User sea correcta

const authenticateUser = async ({ username, password }) => {

  const user = await User.findOne({ where: { username } });
  
  if (!user) {
    throw new Error('Invalid username or password.');
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  
  if (!passwordMatch) {
    throw new Error('Invalid username or password.');
  }
  
  const tokenPayload = {
    id: user.id,
    username: user.username,
    email: user.email,
    role: user.role, // Incluye el campo role
  };

  const token = jwt.sign(tokenPayload, process.env.SECRET_KEY, {
    expiresIn: '30m', // Expira en 30 minutos
  });;
  
  return { token, userInfo: tokenPayload }; 
};

export default authenticateUser;
