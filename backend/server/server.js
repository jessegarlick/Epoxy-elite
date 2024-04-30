import express from "express";
import morgan from "morgan";
import session from "express-session";
import ViteExpress from "vite-express";
import handlerFunctions from "./controller.js";

const app = express();

// Middleware setup
app.use(morgan("dev")); // Logging HTTP requests
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({
    secret: "mySpecialSecret",
    saveUninitialized: false,
    resave: false,
  })
);

// Placeholder for your route handlers

app.post("/api/quote", handlerFunctions.createQuote);// Example: app.get('/api', (req, res) => res.send('API Root'));

// Run the server with ViteExpress
ViteExpress.listen(app, 5173, () => {
  console.log("Server running on http://localhost:5173");
});
