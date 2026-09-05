const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sushmitha@123",
  database: "student_outcome_ai",
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database Connection Failed:", err);
  } else {
    console.log("✅ MySQL Connected Successfully!");
  }
});

module.exports = db;