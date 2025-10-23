# Express TypeScript MongoDB API

Pusta struktura Express.js z TypeScript i MongoDB.

## Struktura projektu

```
src/
├── config/
│   └── database.ts      # Konfiguracja MongoDB
├── controllers/         # Kontrolery
├── middleware/          # Middleware
├── models/
│   └── User.ts         # Model użytkownika
├── routes/
│   ├── index.ts        # Główna trasa
│   └── users.ts        # Trasy użytkowników
├── app.ts              # Konfiguracja Express
└── server.ts           # Punkt wejścia aplikacji
```

## Instalacja

```bash
npm install
```

## Konfiguracja

1. Skopiuj `.env.example` do `.env`:

```bash
cp .env.example .env
```

2. Edytuj zmienne środowiskowe w `.env`

## Uruchomienie

### Tryb development

```bash
npm run dev
```

### Tryb production

```bash
npm run build
npm start
```

## Dostępne skrypty

- `npm run dev` - Uruchomienie w trybie development z hot reload
- `npm run build` - Kompilacja TypeScript do JavaScript
- `npm run build:watch` - Kompilacja w trybie watch
- `npm start` - Uruchomienie skompilowanej aplikacji
- `npm run clean` - Usunięcie katalogu dist

## API Endpoints

- `GET /` - Główny endpoint
- `GET /users` - Lista użytkowników

## Wymagania

- Node.js
- MongoDB
- npm
