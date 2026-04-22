# Практики 19 и 20 — PostgreSQL + MongoDB в одном проекте

**Дисциплина:** Фронтенд и бэкенд разработка  
**Группа:** ЭФБО-18-24

## Стек

- Node.js + Express
- PostgreSQL + Sequelize (практика 19)
- MongoDB + Mongoose (практика 20)
- dotenv

## Структура проекта

```
src/
├── config/
│   ├── postgres.js                 # Подключение Sequelize
│   └── mongo.js                   # Подключение Mongoose
├── models/
│   ├── PgUser.js                  # Модель PostgreSQL
│   └── MongoUser.js               # Модель MongoDB
├── controllers/
│   ├── pgUsersController.js       # CRUD для PostgreSQL
│   └── mongoUsersController.js    # CRUD для MongoDB
├── routes/
│   ├── pgUsers.js                 # Роутер /api/pg/users
│   └── mongoUsers.js              # Роутер /api/mongo/users
└── index.js                       # Точка входа
```

## Запуск

```bash
npm install
cp .env.example .env  # заполнить переменные
npm run dev
```

## API endpoints

### Практика 19 — PostgreSQL (`/api/pg/users`)

| Метод  | Адрес                  | Описание                     |
|--------|------------------------|------------------------------|
| POST   | /api/pg/users          | Создание пользователя        |
| GET    | /api/pg/users          | Список всех пользователей    |
| GET    | /api/pg/users/:id      | Получение по ID              |
| PATCH  | /api/pg/users/:id      | Обновление пользователя      |
| DELETE | /api/pg/users/:id      | Удаление пользователя        |

### Практика 20 — MongoDB (`/api/mongo/users`)

| Метод  | Адрес                     | Описание                     |
|--------|---------------------------|------------------------------|
| POST   | /api/mongo/users          | Создание пользователя        |
| GET    | /api/mongo/users          | Список всех пользователей    |
| GET    | /api/mongo/users/:id      | Получение по ID              |
| PATCH  | /api/mongo/users/:id      | Обновление пользователя      |
| DELETE | /api/mongo/users/:id      | Удаление пользователя        |

## Примеры запросов

### Создать пользователя (оба варианта)
```http
POST /api/pg/users
POST /api/mongo/users
Content-Type: application/json

{
  "first_name": "Иван",
  "last_name": "Иванов",
  "age": 25
}
```
