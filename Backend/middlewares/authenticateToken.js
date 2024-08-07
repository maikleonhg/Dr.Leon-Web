//authenticateToken.js
import jwt from 'jsonwebtoken';
//import 'dotenv/config';

const authenticateMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log('Token recibido:', authHeader);

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ status: 'error', message: 'Token not provided or invalid.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Error al insertar datos de prueba:', error);
    return res.status(401).json({ status: 'error', message: 'Token invalid or expired.' });
  }
};

export default authenticateMiddleware;
