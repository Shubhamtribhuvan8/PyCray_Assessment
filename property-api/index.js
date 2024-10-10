const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
const port = 3000;

// Database connection
const pool = new Pool({
  user: "bob",
  host: "localhost",
  database: "postgres",
  password: "admin@123",
  port: 5432,
});

pool.connect((err, client, release) => {
  if (err) {
    console.error("Error acquiring client", err.stack);
  } else {
    console.log("Database connected successfully");
    release();
  }
});

app.use(cors());
app.use(express.json());

app.get("/api/properties", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM properties");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

app.get("/api/financials/:propertyId", async (req, res) => {
  const { propertyId } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM financial_records WHERE property_id = $1",
      [propertyId]
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
