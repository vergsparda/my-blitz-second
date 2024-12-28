#!/bin/bash

echo "Setting up project for local development..."

# Установка зависимостей
echo "Installing dependencies..."
npm install

# Создание локальной базы данных
echo "Setting up PostgreSQL database..."
psql -U postgres <<EOF
CREATE DATABASE simple_notes_db;
CREATE USER my_user WITH PASSWORD 'my_password';
GRANT ALL PRIVILEGES ON DATABASE simple_notes_db TO my_user;
EOF

# Применение миграций
echo "Running migrations..."
npx prisma migrate dev

# Генерация Prisma Client
echo "Generating Prisma Client..."
npx prisma generate

echo "Setup complete. Ready to start development!"
