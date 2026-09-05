 import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import Navbar from "../components/Navbar";
import ResultsTable from "../components/ResultsTable";
import AIPrediction from "../components/AIPrediction";
import AttendanceCard from "../components/AttendanceCard";

function StudentDashboard() {
  const [student, setStudent] = useState(null);
  const [results, setResults] = useState([]);
  const [studentRank, setStudentRank] = useState(null);
  const [loading, setLoading] = useState(true);

  const STUDENT_ID = 13;

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:5000/api/students").then((response) =>
        response.json()
      ),

      fetch(`http://localhost:5000/api/results/${STUDENT_ID}`).then(
        (response) => response.json()
      ),

      fetch(
        `http://localhost:5000/api/students/${STUDENT_ID}/rank`
      ).then((response) => response.json()),
    ])
      .then(([studentData, resultData, rankData]) => {
        console.log("Student Data:", studentData);
        console.log("Result Data:", resultData);
        console.log("Rank Data:", rankData);

        if (studentData.length > 0) {
          setStudent(studentData[0]);
        }

        setResults(resultData);

        if (rankData.rank !== undefined) {
          setStudentRank(rankData.rank);
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error("❌ Error loading dashboard:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h2 className="text-xl font-semibold">
          Loading student data...
        </h2>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h2 className="text-xl font-semibold text-red-600">
          Unable to load student data.
        </h2>
      </div>
    );
  }

  // Find latest semester result
  const latestResult =
    results.length > 0
      ? results.reduce((latest, current) =>
          Number(current.semester) > Number(latest.semester)
            ? current
            : latest
        )
      : null;

  const currentSGPA = latestResult
    ? latestResult.sgpa
    : "N/A";

  return (
    <div className="flex">

      <Sidebar />

      <div className="ml-64 flex-1 bg-gray-100 min-h-screen">

        <Navbar />

        <div className="p-6">

          {/* Welcome */}
          <h2 className="text-3xl font-bold mb-6">
            Welcome Back 👋
          </h2>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <DashboardCard
              title="Current SGPA"
              value={currentSGPA}
              color="text-blue-600"
            />

            <DashboardCard
              title="Attendance"
              value={`${student.attendance}%`}
              color="text-green-600"
            />

            <DashboardCard
              title="Class Rank"
              value={
                studentRank !== null
                  ? `#${studentRank}`
                  : "N/A"
              }
              color="text-purple-600"
            />

            <DashboardCard
              title="AI Predicted SGPA"
              value="9.55"
              color="text-orange-600"
            />

          </div>

          {/* Academic Summary */}
          <div className="mt-8 bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-bold mb-4">
              Academic Summary
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              <div className="space-y-2">

                <p>
                  <strong>Name:</strong>{" "}
                  {student.name}
                </p>

                <p>
                  <strong>USN:</strong>{" "}
                  {student.usn}
                </p>

                <p>
                  <strong>Department:</strong>{" "}
                  {student.department}
                </p>

                <p>
                  <strong>Semester:</strong>{" "}
                  {student.semester}th
                </p>

              </div>

              <div className="space-y-2">

                <p>
                  <strong>Credits Earned:</strong>{" "}
                  140
                </p>

                <p>
                  <strong>CGPA:</strong>{" "}
                  {student.cgpa}
                </p>

                <p>
                  <strong>Status:</strong>{" "}
                  Excellent
                </p>

                <p>
                  <strong>Backlogs:</strong>{" "}
                  0
                </p>

              </div>

            </div>
          </div>

          {/* Semester Results */}
          <ResultsTable />

          {/* AI Prediction */}
          <AIPrediction />

          {/* Attendance */}
          <AttendanceCard />

        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;