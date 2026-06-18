# Kidrove Workshop Landing Page

A high-converting, fully responsive landing page for "Kidrove" (an organization hosting kids' workshops). Built with a modern, modular, production-ready stack.

## Tech Stack

- **Frontend**: React.js (Vite), Tailwind CSS v4 (native compiler), TypeScript, Lucide Icons.
- **Backend**: Express.js, TypeScript.
- **Database**: MongoDB (Mongoose).
- **Tooling**: Concurrently (for running frontend and backend in one terminal).

## Architecture Layout

```
/ (root)
├── package.json - Monorepo concurrent runner configurations
├── .gitignore - Standard VCS filters
├── README.md - Document entry point
├── frontend/ - Vite + React client app
│   ├── src/components/ - Modular UI parts (Hero, DetailsGrid, Outcomes, FAQ, Form)
│   └── src/index.css - Custom styling, glassmorphism, animations
└── backend/ - Express DB endpoint
    ├── src/config/db.ts - MongoDB connection handler
    ├── src/models/Enquiry.ts - Mongoose Schema specifying enquiry storage
    └── src/routes/enquiry.ts - Server router and input validation rules
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [MongoDB](https://www.mongodb.com/) running locally or a connection URI for MongoDB Atlas.

### Installation & Run

1. Clone or download the repository.
2. In the root directory, install all monorepo dependencies:
   ```bash
   npm run install:all
   ```
3. Set up the environment variables. Rename `backend/.env.example` to `backend/.env` (if not already done) and configure your MongoDB URI.
4. Launch both development servers concurrently:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:5000/health](http://localhost:5000/health)

## Production Build

To compile and pack both stacks for production deployment:
```bash
npm run build
```
The compiled server code will reside in `backend/dist` and the static web assets in `frontend/dist`.
