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
// GET CLASS RANK
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

module.exports = router;