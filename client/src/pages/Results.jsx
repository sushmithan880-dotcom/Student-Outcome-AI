function Results() {
  const results = [
    {
      code: "21CS71",
      subject: "Machine Learning",
      internal: 45,
      external: 48,
      total: 93,
      grade: "O",
    },
    {
      code: "21CS72",
      subject: "Compiler Design",
      internal: 42,
      external: 46,
      total: 88,
      grade: "A+",
    },
    {
      code: "21CS73",
      subject: "Computer Networks",
      internal: 44,
      external: 45,
      total: 89,
      grade: "A+",
    },
    {
      code: "21CS74",
      subject: "Project Work",
      internal: 49,
      external: 50,
      total: 99,
      grade: "O",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-xl shadow-lg p-6">

        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Semester Results
        </h1>

        <table className="w-full border border-gray-300">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3">Subject Code</th>
              <th className="p-3">Subject Name</th>
              <th className="p-3">Internal</th>
              <th className="p-3">External</th>
              <th className="p-3">Total</th>
              <th className="p-3">Grade</th>
            </tr>
          </thead>

          <tbody>
            {results.map((item, index) => (
              <tr
                key={index}
                className="text-center border-b hover:bg-gray-100"
              >
                <td className="p-3">{item.code}</td>
                <td className="p-3">{item.subject}</td>
                <td className="p-3">{item.internal}</td>
                <td className="p-3">{item.external}</td>
                <td className="p-3 font-bold">{item.total}</td>
                <td className="p-3">{item.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default Results;