 import { useEffect, useState } from "react";

function ResultsTable() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/results/13")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch results");
        }

        return response.json();
      })
      .then((data) => {
        console.log("Semester Results:", data);
        setResults(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("❌ Error:", error);
        setError("Unable to load semester results");
        setLoading(false);
      });
  }, []);

  return (
    <div className="mt-8 bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-bold mb-4">
        Recent Semester Results
      </h2>

      {loading && (
        <p className="text-gray-600">
          Loading results...
        </p>
      )}

      {error && (
        <p className="text-red-600">
          {error}
        </p>
      )}

      {!loading && !error && results.length === 0 && (
        <p className="text-gray-600">
          No semester results available.
        </p>
      )}

      {!loading && !error && results.length > 0 && (
        <div className="overflow-x-auto">

          <table className="w-full border-collapse">

            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3">
                  Semester
                </th>

                <th className="p-3">
                  SGPA
                </th>

                <th className="p-3">
                  CGPA
                </th>
              </tr>
            </thead>

            <tbody>
              {results.map((result) => (
                <tr
                  key={result.result_id}
                  className="text-center border-b"
                >
                  <td className="p-3">
                    {result.semester}th
                  </td>

                  <td className="p-3">
                    {result.sgpa}
                  </td>

                  <td className="p-3">
                    {result.cgpa}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>
      )}

    </div>
  );
}

export default ResultsTable;