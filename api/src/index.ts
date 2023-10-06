import express, { Application } from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';

// Import your routes
// import userRoutes from '@routes/userRoutes';
import itemsRoutes from '@routes/itemRoutes';

// Create an Express application
const app: Application = express();

// Enable CORS for all routes
app.use(cors());

// Middleware for parsing JSON and URL-encoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use your routes
/* app.use('/users', userRoutes); */
app.use('/api', itemsRoutes);

// Define a default route
app.get('/', (req, res) => {
  res.send('Welcome to your Express.js application');
});

// Start the server
const port: number = parseInt(process.env.PORT as string, 10) || 3001;
app.listen(port, () => {
  console.log(`MeLi test Server is running on port ${port}`);
});
