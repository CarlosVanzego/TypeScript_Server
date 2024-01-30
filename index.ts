import express, { Express, Request, Response } from 'express'; // Importing Express framework and types from Express library
import dotenv from 'dotenv'; // Importing dotenv library for environment variables

dotenv.config(); // Loading environment variables from .env file

const app: Express = express(); // Creating an instance of Express application
const port = process.env.PORT; // Getting the port from environment variables

// Setting up a route for the root URL
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server'); // Sending a response with a message to the client
});

// Starting the server and listening on the specified port
app.listen(port, () => {
    console.log(` [server]: Server is running at http://localhost:${port}`); // Logging a message to indicate that the server is running
});
