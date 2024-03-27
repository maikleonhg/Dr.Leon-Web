// services/createUser.js
import bcrypt from 'bcryptjs';
import Joi from 'joi';
import User from '../models/user.js'; // Asegúrate de que la ruta al modelo User sea correcta

const validateUserForm = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(5).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid('USER', 'MEDIC').required(),
  });

  return schema.validate(data);
};

const createUser = async (userData) => {
  console.log('Datos recibidos en createUser:', userData);
  const { error } = validateUserForm(userData);

  if (error) {
    console.log('Error de validación:', error.details[0].message);
    throw new Error(error.details[0].message);
  }

  const existingUser = await User.findOne({ where: { username: userData.username } });
  const existingEmail = await User.findOne({ where: { email: userData.email } });

  
  console.log('Usuario existente:', existingUser);
  console.log('Email existente:', existingEmail);

  if (existingUser || existingEmail) {
    throw new Error('Username or Email already exists.');
  }

  const hashedPassword = await bcrypt.hash(userData.password, 8);

  const newUser = await User.create({
    ...userData,
    password: hashedPassword
  });

  console.log('Nuevo usuario creado:', newUser);
  return { status: 'success', message: 'You have been successfully registered', user: newUser };
};

export default createUser;
