# Finflow

Personal finance tracker with analytics and budgeting tools.

## Features

- Каталог транзакций с фильтрами по дате, категории, сумме
- Агрегация расходов по категориям с интерактивными графиками
- Система финансовых целей с отслеживанием прогресса
- Модель бюджета: лимиты по категориям + уведомления
- PWA, Supabase, PostgreSQL
- Next.js 16, React 19, TypeScript, Recharts, Zod

## Screenshots

![Finflow Refs 1](public/screenshots/Finflow%20Refs.jpg)
![Finflow Refs 2](public/screenshots/Finflow%20Refs2.jpg)
![Finflow Refs 3](public/screenshots/Finflow%20Refs3.jpg)
![Finflow Refs 4](public/screenshots/Finflow%20Refs4.jpg)

## Подключение Supabase

1. Создайте проект на [supabase.com](https://supabase.com/dashboard)
2. Выполните SQL из `supabase-schema.sql` в SQL Editor
3. Скопируйте ключи (Settings → API) и добавьте в `.env.local`:

| Переменная | Описание |
|------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | URL проекта |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Анонимный ключ |
| `NEXT_PUBLIC_BASE_URL` | URL приложения |

## Подключение к локальному PostgreSQL

Для работы с локальным PostgreSQL вместо Supabase создайте `.env.local` и укажите:

| Переменная | Описание |
|------------|----------|
| `DB_HOST` | Адрес сервера (по умолчанию `localhost`) |
| `DB_PORT` | Порт (по умолчанию `5432`) |
| `DB_NAME` | Имя базы данных |
| `DB_USER` | Имя пользователя |
| `DB_PASSWORD` | Пароль |

Подробнее — см. `README-DB.md`.