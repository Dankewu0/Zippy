```markdown
# Zippy - Портфолио проект на Next.js

[![Next.js](https://img.shields.io/badge/Next.js-14.2.3-000000?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)

Профессиональный портфолио проект, разработанный с использованием современных технологий:

- Next.js 14 с App Router
- React 19.1.0
- TypeScript
- shadcn/ui компоненты
- Оптимизированные шрифты через next/font

## 🛠 Установка и запуск

### Предварительные требования
- Node.js 20 или выше
- npm 10 или выше
- Git (для клонирования репозитория)

### Инструкция по запуску

1. Клонируйте репозиторий:
```bash
git clone https://github.com/zippy.git
cd zippy
```

2. Установите зависимости:
```bash
npm install --legacy-peer-deps
```

3. Запустите сервер разработки:
```bash
npm run dev
```

## 🔧 Решение возможных проблем

### Ошибки при установке зависимостей

Если возникают конфликты версий:

1. Очистите кеш и удалите существующие зависимости:
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
```

2. Повторите установку:
```bash
npm install --legacy-peer-deps
```

3. Альтернативный вариант:
```bash
npm install --force
```

### Поддержка React 19

Проект использует React 19.1.0. Некоторые зависимости могут требовать дополнительных флагов:
```bash
npm install --legacy-peer-deps
```

## 📦 Используемые технологии

- **Next.js 15** - фреймворк для React-приложений
- **React 19** - последняя версия React
- **TypeScript** - статическая типизация
- **shadcn/ui** - UI компоненты
- **Prettier** - форматирование кода
