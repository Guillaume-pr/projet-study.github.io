const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "projet",
});

// Endpoint pour récupérer les utilisateurs
app.get("/", (req, res) => {
  pool.query("SELECT * FROM stay", (err, rows) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.send(rows);
  });
});

// Endpoint pour enregistrer un nouvel utilisateur
app.post("/api/register", (req, res) => {
  const { firstName, lastName, email, password, address } = req.body;
  const query =
    "INSERT INTO user (firstName, lastName, email, password, address) VALUES (?, ?, ?, ?, ?)";
  pool.query(
    query,
    [firstName, lastName, email, password, address],
    (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.status(200).send("User registered");
    }
  );
});

app.listen(port, () => console.log(`Server running on port ${port}`));
