import User from '../models/user.js'; // Asegúrate de que la ruta al modelo User sea correcta
import 'dotenv/config';
import jwt from 'jsonwebtoken';

const updateUser = async ({ id, username, email }) => {

  const user = await User.findByPk(id);
  if (!user) {
    throw new Error('User not found.');
  }

  const updatedUser = await User.update(
    { username, email },
    { where: { id } }
  );

  const { password: _, ...userData } = user.toJSON();

  const token = jwt.sign(userData, process.env.SECRET_KEY, {
    subject: user.id,
    expiresIn: '5m',
  });
  // console.log('Usuario actualizado:', updatedUser);
  
  return { token, userInfo: { ...userData } };
};

export default updateUser;
