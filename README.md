## ===== ENG // ниже есть на русском языке =====
# GULP Starter Kit
Modern build (2026) for website development using **Gulp** with **Pug** and **CSS** support.  
Created for fast and convenient static website development.

## Features
- **Automatic browser reload** (BrowserSync)
- **Pug to HTML compilation**
- **CSS file processing**
- **Clean `public` directory** before build
- **Watch mode** — real-time change tracking
- **Flexible folder structure** for convenient development

## Installation
**Clone the repository:**
```bash
git clone https://github.com/SergeiTWeb/gulp-project.git
cd gulp-starter

## Install dependencies:
npm install

## Start development server:
npm run dev
# or
gulp dev

## Project Structure
gulp-starter/
├── config/                     # Configuration files
│   ├── app.js                  # Application settings
│   └── path.js                 # File paths
│
├── data/                       # JSON data for Pug
│   └── news.json               # Sample data for templates
│
├── node_modules/               # npm dependencies (auto-generated)
│
├── public/                     # Production build (auto-generated)
│   ├── css/                    # Compiled styles
│   │   └── main.css
│   └── index.html              # Compiled HTML
│
├── src/                        # Source files
│   ├── css/                    # CSS files
│   │   ├── block/              # CSS blocks/components
│   │   └── base.css            # Base styles
│   │
│   ├── html/                   # HTML files (alternative to Pug)
│   │   ├── chunk/              # HTML parts (headers, footers)
│   │   └── index.html          # HTML pages
│   │
│   └── pug/                    # Pug templates (main)
│       ├── chunk/              # Reusable parts (buttons, cards)
│       ├── layout/             # Layouts & wrappers
│       │   ├── app.pug         # Main layout
│       │   └── index.pug       # Pages
│       └── ...                 # Other pug files
│
├── task/                       # Gulp tasks (modular structure)
│   ├── clear.js                # Clear public folder
│   ├── css.js                  # CSS processing
│   ├── html.js                 # HTML processing
│   └── pug.js                  # Pug compilation
│
├── gulpfile.js                 # Main Gulp file (orchestration)
├── package.json                # Dependencies & scripts
├── package-lock.json           # Locked dependency versions
└── README.md                   # Project documentation

🛠 Technologies & Plugins
Gulp — Build system
Pug — Template engine
BrowserSync — Browser synchronization
Gulp-Plumber — Error handling
Gulp-Notify — Notifications
Del — File deletion

🚀 Getting Started
Open src/pug/index.pug and start editing
Add styles to src/css/base.css
Create new pages in src/pug/
Changes will auto-reload in browser at http://localhost:3000

📝 Notes
The build supports both Pug and HTML (commented tasks)
The public folder is auto-generated — do NOT edit it manually
For production build, you can add minification and optimization

👨‍💻 Author
Sergei Tumanov | Junior Frontend Developer

📄 License
MIT License — feel free to use for your projects!

Happy Coding! 💻✨

## ===== RUS =====
# GULP Starter Kit
Современная сборка (2026) для вёрстки сайтов на **Gulp** с поддержкой **Pug** и **CSS**.  
Создана для быстрой и удобной разработки статических сайтов.

## Возможности
- **Автоматическая перезагрузка** браузера (BrowserSync)
- **Компиляция Pug** в HTML
- **Обработка CSS** файлов
- **Очистка** директории `public` перед сборкой
- **Watch-режим** — отслеживание изменений в реальном времени
- **Гибкая структура** папок для удобной разработки

## Установка
**Клонируйте репозиторий:**
```bash
git clone https://github.com/SergeiTWeb/gulp-project.git
cd gulp-starter

## Установка зависимости
npm install

## Запустите сборку:
npm run dev
# или
gulp dev

## Структура проекта
gulp-starter/
├── config/                     # Конфигурационные файлы
│   ├── app.js                  # Настройки приложения
│   └── path.js                 # Пути к папкам и файлам
│
├── data/                       # JSON данные для Pug
│   └── news.json               # Пример данных для шаблонов
│
├── node_modules/               # Зависимости npm (автогенерация)
│
├── public/                     # Готовая сборка (автогенерация)
│   ├── css/                    # Скомпилированные стили
│   │   └── main.css
│   └── index.html              # Скомпилированный HTML
│
├── src/                        # Исходные файлы разработки
│   ├── css/                    # CSS файлы
│   │   ├── block/              # Отдельные CSS блоки/компоненты
│   │   └── base.css            # Базовые стили
│   │
│   ├── html/                   # HTML файлы (альтернатива Pug)
│   │   ├── chunk/              # HTML части (хедеры, футеры)
│   │   └── index.html          # HTML страницы
│   │
│   └── pug/                    # Pug шаблоны (основное)
│       ├── chunk/              # Повторяемые части (кнопки, карточки)
│       ├── layout/             # Макеты и обёртки
│       │   ├── app.pug         # Главный layout
│       │   └── index.pug       # Страницы
│       └── ...                 # Другие pug файлы
│
├── task/                       # Gulp задачи (модульная структура)
│   ├── clear.js                # Очистка папки public
│   ├── css.js                  # Обработка CSS файлов
│   ├── html.js                 # Обработка HTML файлов
│   └── pug.js                  # Компиляция Pug в HTML
│
├── gulpfile.js                 # Главный файл Gulp (оркестрация)
├── package.json                # Зависимости и скрипты
├── package-lock.json           # Зафиксированные версии зависимостей
└── README.md                   # Документация проекта

🛠 Технологии и плагины
Gulp — система сборки
Pug — шаблонизатор
BrowserSync — синхронизация браузера
Gulp-Plumber — обработка ошибок
Gulp-Notify — уведомления
Del — удаление файлов

🚀 Начало работы
Откройте src/pug/index.pug и начните редактировать
Добавьте стили в src/css/base.css
Создавайте новые страницы в src/pug/
Изменения автоматически обновятся в браузере на http://localhost:3000

📝 Примечания
Сборка поддерживает работу как с Pug, так и с HTML (закомментированные задачи)
Папка public генерируется автоматически — не редактируйте её вручную
Для production-сборки можно добавить минификацию и оптимизацию

👨‍💻 Автор
Сергей Туманов
Начинающий frontend-разработчик

📄 Лицензия
MIT License — свободно используйте для своих проектов!

Happy Coding! 💻✨