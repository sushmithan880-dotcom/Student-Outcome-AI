const express = require("express");
const router = express.Router();

const db = require("../db");

// Get semester results for a student
router.get("/:studentId", (req, res) => {
  const studentId = req.params.studentId;

  const sql = `
    SELECT
      result_id,
      student_id,
      semester,
      sgpa,
      cgpa
    FROM semester_results
    WHERE student_id = ?
    ORDER BY semester ASC
  `;

  db.query(sql, [studentId], (err, results) => {
    if (err) {
      console.error("❌ Error fetching semester results:", err);

      return res.status(500).json({
        error: "Database error",
      });
    }

    res.json(results);
  });
});

module.exports = router;