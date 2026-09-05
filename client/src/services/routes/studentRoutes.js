const express = require("express");
const router = express.Router();

const db = require("../db");

// ==========================================
// GET ALL STUDENTS
// ==========================================

router.get("/", (req, res) => {
  const sql = `
    SELECT
      student_id,
      usn,
      name,
      email,
      department,
      semester,
      cgpa,
      attendance,
      created_at
    FROM students
    ORDER BY cgpa DESC
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error("❌ Error fetching students:", err);
      return res.status(500).json({
        error: "Database error"
      });
    }

    res.json(results);
  });
});


// ==========================================
// AI PREDICTION
// ==========================================

router.get("/:studentId/prediction", (req, res) => {

  const studentId = req.params.studentId;

  console.log("🤖 Prediction request for student:", studentId);

  const sql = `
    SELECT semester, sgpa
    FROM semester_results
    WHERE student_id = ?
    ORDER BY semester ASC
  `;

  db.query(sql, [studentId], (err, results) => {

    if (err) {
      console.error("❌ Prediction SQL Error:", err);

      return res.status(500).json({
        error: "Database error",
        message: err.message
      });
    }

    console.log("📊 Results used for prediction:", results);

    if (results.length === 0) {
      return res.status(404).json({
        error: "No semester results found"
      });
    }

    const sgpas = results.map((row) => Number(row.sgpa));

    const average =
      sgpas.reduce((sum, value) => sum + value, 0) /
      sgpas.length;

    const predictedSGPA = Math.min(
      10,
      Number((average + 0.2).toFixed(2))
    );

    res.json({
      student_id: Number(studentId),
      previous_sgpa: sgpas,
      predicted_sgpa: predictedSGPA
    });
  });
});


// ==========================================
// CLASS RANK
// ==========================================

router.get("/:studentId/rank", (req, res) => {

  const studentId = req.params.studentId;

  const sql = `
    SELECT COUNT(*) + 1 AS student_rank
    FROM students
    WHERE cgpa > (
      SELECT cgpa
      FROM students
      WHERE student_id = ?
    )
  `;

  db.query(sql, [studentId], (err, results) => {

    if (err) {
      console.error("❌ Error calculating rank:", err);

      return res.status(500).json({
        error: "Database error"
      });
    }

    res.json({
      student_id: Number(studentId),
      rank: results[0].student_rank
    });
  });
});
// ==========================================
// STUDENT LOGIN
// ==========================================

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      error: "Email and password are required"
    });
  }

  const sql = `
    SELECT
      student_id,
      usn,
      name,
      email,
      department,
      semester,
      cgpa,
      attendance
    FROM students
    WHERE email = ? AND password = ?
  `;

  db.query(sql, [email, password], (err, results) => {

    if (err) {
      console.error("❌ Login error:", err);

      return res.status(500).json({
        error: "Database error"
      });
    }

    if (results.length === 0) {
      return res.status(401).json({
        error: "Invalid email or password"
      });
    }

    res.json({
      message: "Login successful",
      student: results[0]
    });
  });
});

module.exports = router;