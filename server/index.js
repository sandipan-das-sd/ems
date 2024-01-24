// Import the 'express' module
import express from "express";

// Import 'dotenv' to load environment variables from a .env file
import dotenv from 'dotenv';

// Import 'cors' for enabling Cross-Origin Resource Sharing
import cors from 'cors';

// Import 'body-parser' for parsing incoming request bodies
import bodyParser from 'body-parser';

// Import the 'Connection' class from the 'db' module for establishing a database connection
import Connection from "./database/db.js";

// Import the 'Routes' from the 'route' module to define application routes
import Routes from "./routes/route.js";

// Create an instance of the Express application
const app = express();

// Load environment variables from a .env file
dotenv.config();

// Parse JSON-encoded and URL-encoded bodies of incoming requests
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// Enable Cross-Origin Resource Sharing
app.use(cors());

// Use the defined routes from the 'Routes' module
app.use('/', Routes);

// Serve static files (e.g., uploaded images) from the 'uploads' directory
app.use('/uploads', express.static('uploads'));

// Set the port number for the server to listen on
const PORT = 5000;

// Get database credentials from environment variables
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

// Establish a database connection using the 'Connection' class
Connection(username, password);

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log('Server is Running Successfully on Port no: 5000');
});
