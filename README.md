# Bar Exam Quiz App

A comprehensive web application to help law students prepare for the bar exam.

## Monorepo Structure

```
bar-exam-quiz-app/
├── packages/
│   ├── frontend/          # Next.js frontend application
│   ├── backend/           # Express.js backend API
│   └── shared-types/      # Shared TypeScript types and interfaces
├── package.json           # Root package.json for workspace management
└── turbo.json            # Turborepo configuration
```

## Setup Instructions

1. Create the monorepo structure:
```bash
mkdir -p packages/frontend packages/backend packages/shared-types
```

2. Move existing code:
```bash
# Move frontend code
mv frontend/* packages/frontend/
mv components/* packages/frontend/components/
mv app/* packages/frontend/app/

# Move backend code
mv backend/* packages/backend/
```

3. Install dependencies:
```bash
npm install
```

4. Install package-specific dependencies:
```bash
# Frontend
cd packages/frontend
npm install next@latest react@latest react-dom@latest typescript@latest @types/react@latest @types/node@latest tailwindcss@latest

# Backend
cd ../backend
npm install express@latest mongoose@latest typescript@latest @types/express@latest @types/node@latest

# Shared Types
cd ../shared-types
npm init -y
npm install typescript@latest
```

## Development

- Run all services: `npm run dev`
- Build all packages: `npm run build`
- Lint all packages: `npm run lint`
- Run tests: `npm run test`

## Package-Specific Commands

### Frontend
- Development: `npm run dev -w frontend`
- Build: `npm run build -w frontend`

### Backend
- Development: `npm run dev -w backend`
- Build: `npm run build -w backend`

## Environment Variables

Create `.env.local` files in respective package directories:

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Backend (.env.local)
```
PORT=3001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
``` 