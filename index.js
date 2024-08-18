const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
require("dotenv").config();
const morgan = require("morgan");
const apiLimit = require("express-rate-limit");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://shopeasy-e-commerce.web.app",
      "https://shopeasy-e-commerce.firebaseapp.com",
    ],
  })
);
app.use(express.json());
app.use(morgan("dev"));
app.use(
  apiLimit({
    windowMs: 30 * 60 * 1000, // 30 minutes
    max: 100,
    message: "Too many requests from this IP, please try again later!",
  })
);

// Database connection
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const database = client.db("shopeasy");
    const allProducts = database.collection("allproducts");

    await client.db("easyshop").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Uncomment the line below to close the connection after the server shuts down.
    // await client.close();
  }
}

run().catch(console.dir);

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to easyshop server.");
});

// Server error handler (500)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
