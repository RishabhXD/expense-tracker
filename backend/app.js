// Import
const express = require("express");
const cors = require("cors");
const { db } = require("./db/db");
const transactionRoutes = require("./routes/transactions");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.render("Hello World");
});

app.use("/api/v1/transactions", transactionRoutes);

// Server
const server = () => {
  db();
  app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
  });
};

server();
