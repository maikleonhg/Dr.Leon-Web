// server.js
import app from './app.js';

const PORT = process.env.PORTB || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default server;
