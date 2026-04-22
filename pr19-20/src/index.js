require('dotenv').config();
const express = require('express');
const sequelize = require('./config/postgres');
const connectMongo = require('./config/mongo');
const pgUsersRouter = require('./routes/pgUsers');
const mongoUsersRouter = require('./routes/mongoUsers');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Практика 19 — PostgreSQL
app.use('/api/pg/users', pgUsersRouter);

// Практика 20 — MongoDB
app.use('/api/mongo/users', mongoUsersRouter);

// Health-check
app.get('/health', (_, res) => res.json({ status: 'ok' }));

app.use((req, res) => res.status(404).json({ error: 'Маршрут не найден' }));
app.use((err, req, res, next) => res.status(500).json({ error: err.message }));

const start = async () => {
  try {
    // PostgreSQL
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log('✅ PostgreSQL подключён');

    // MongoDB
    await connectMongo();

    app.listen(PORT, () => {
      console.log(`🚀 Сервер запущен: http://localhost:${PORT}`);
      console.log(`   PostgreSQL API: http://localhost:${PORT}/api/pg/users`);
      console.log(`   MongoDB API:    http://localhost:${PORT}/api/mongo/users`);
    });
  } catch (err) {
    console.error('❌ Ошибка подключения:', err.message);
    process.exit(1);
  }
};

start();
