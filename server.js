require('dotenv').config();
const validateEnv = require('./src/config/env');
validateEnv();

const app = require('./src/app');
const connectDB = require('./src/config/db');

const PORT = process.env.PORT || 5000;

(async () => {
  await connectDB();
  const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

  process.on('unhandledRejection', (err) => {
    console.error('Unhandled rejection:', err);
    server.close(() => process.exit(1));
  });
})();
