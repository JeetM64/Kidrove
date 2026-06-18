import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import enquiryRouter from './routes/enquiry';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS with optional production configuration
const allowedOrigins = process.env.FRONTEND_URL ? process.env.FRONTEND_URL.split(',') : '*';
app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

// Middleware for parsing JSON requests
app.use(express.json());

// Connect to Database
connectDB();

// API Routes
app.use('/api', enquiryRouter);

// Health Check Route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Kidrove API is running smoothly.' });
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
