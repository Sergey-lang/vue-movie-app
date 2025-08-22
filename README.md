# 🎬 Mooz — Vue Movie Search App

> Тестовое задание: приложение для поиска фильмов, выполненное на **Vue 3**  
> Первый проект, в котором я использую **Vue**, ранее работал с **React**.

---

## 🚀 Описание

Mooz — это простое SPA-приложение на Vue 3 для поиска фильмов через API.  
Главная цель — разобраться с основами Vue, компонентным подходом, состоянием и реактивностью.
Тут происходит реализация (в процессе) того же проекта, но c использованием [Nuxt](https://github.com/Sergey-lang/nuxt-movie-app)

---

## 🛠 Стек технологий

- ⚙️ **Vue 3** + `<script setup>`
- 🔧 **TypeScript**
- ⚡ **Vite**
- 🎨 Верстка без UI-библиотек
- 📁 Атомарная структура компонентов
- 📦 API: [OMDb API](https://www.omdbapi.com/)

---

## 📦 Функциональность

- 🔍 Поиск фильмов по названию
- 🗂 Список фильмов в сетке
- 🧭 Пагинация с адаптивной логикой
- 🧑‍💻 Адаптивная вёрстка
- 💬 Дебаунс поиска
- ♿ Улучшенная доступность

---

## 🧩 Структура проекта

```bash
src/
├── assets/            # Шрифты и изображения
├── components/        # UI-компоненты (Button, Header, SearchBar)
├── composables/       # useMovies, useDebouncedRef и т.д.
├── pages/             # Главная страница (Home.vue)
├── shared/            # Типы, стили, утилиты
└── main.ts            # Точка входа

git clone https://github.com/your-username/vue-movie-app.git
cd vue-movie-app

```
## 🌐 Демо

Приложение развёрнуто на GitHub Pages:
🔗 https://sergey-lang.github.io/vue-movie-app/
---

## ⚙️ CI/CD (GitHub Actions + Pages)

- 📦 Сборка проекта (vite build) и проверка качества кода (lint, prettier, tsc) автоматизированы через GitHub Actions
- 🚀 Автодеплой на GitHub Pages при пуше в master
- 🔐 API-ключ OMDb хранится в .env (локально) и в GitHub Secrets (в CI/CD) как VITE_OMDB_API_KEY
- 🛠 Во время билда ключ передаётся через env, и встраивается в import.meta.env.VITE_OMDB_API_KEY для использования в коде
