function AttendanceCard() {
  const attendance = [
    {
      subject: "Machine Learning",
      percentage: 96,
    },
    {
      subject: "Compiler Design",
      percentage: 82,
    },
    {
      subject: "Computer Networks",
      percentage: 91,
    },
    {
      subject: "Project Work",
      percentage: 98,
    },
  ];

  return (
    <div className="mt-8 bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-blue-700 mb-6">
        Attendance Report
      </h2>

      <div className="mb-8">

        <h3 className="font-semibold mb-2">
          Overall Attendance
        </h3>

        <div className="w-full bg-gray-200 rounded-full h-6">

          <div
            className="bg-green-500 h-6 rounded-full text-white text-center"
            style={{ width: "92%" }}
          >
            92%
          </div>

        </div>

      </div>

      <div className="space-y-5">

        {attendance.map((item) => (

          <div key={item.subject}>

            <div className="flex justify-between mb-1">

              <span>{item.subject}</span>

              <span>{item.percentage}%</span>

            </div>

            <div className="w-full bg-gray-200 rounded-full h-4">

              <div
                className="bg-blue-600 h-4 rounded-full"
                style={{ width: `${item.percentage}%` }}
              ></div>

            </div>

          </div>

        ))}

      </div>

      <div className="mt-8 p-4 bg-yellow-100 rounded-lg">

        <h3 className="font-bold text-yellow-700">
          ⚠ Attendance Alert
        </h3>

        <p className="mt-2">
          Compiler Design attendance is below 85%.
          Attend the next few classes to stay eligible for exams.
        </p>

      </div>

    </div>
  );
}

export default AttendanceCard;