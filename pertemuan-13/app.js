// Import express
const express = require("express");

// Membuat object express
const app = express();

// Menggunakan middleware
app.use(express.json());


// Definisikan route
const router = require("./routes/api");
app.use(router);

// Mendefinisikan port.
const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running at: http://localhost:${PORT}`)
);
