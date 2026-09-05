function AIPrediction() {
  return (
    <div className="mt-8 bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-blue-700 mb-6">
        🤖 AI Academic Prediction
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-blue-50 rounded-lg p-5 shadow">
          <h3 className="font-semibold text-gray-600">
            Predicted SGPA
          </h3>

          <p className="text-3xl font-bold text-blue-700 mt-2">
            9.55
          </p>
        </div>

        <div className="bg-red-50 rounded-lg p-5 shadow">
          <h3 className="font-semibold text-gray-600">
            Backlog Risk
          </h3>

          <p className="text-3xl font-bold text-red-600 mt-2">
            Low
          </p>
        </div>

        <div className="bg-yellow-50 rounded-lg p-5 shadow">
          <h3 className="font-semibold text-gray-600">
            Weak Subject
          </h3>

          <p className="text-xl font-bold text-yellow-700 mt-2">
            Compiler Design
          </p>
        </div>

        <div className="bg-green-50 rounded-lg p-5 shadow">
          <h3 className="font-semibold text-gray-600">
            Attendance Status
          </h3>

          <p className="text-3xl font-bold text-green-600 mt-2">
            Excellent
          </p>
        </div>

      </div>

      <div className="mt-8 bg-gray-100 rounded-lg p-5">

        <h3 className="text-xl font-bold mb-3">
          💡 AI Suggestions
        </h3>

        <ul className="list-disc ml-6 space-y-2">
          <li>Increase practice in Compiler Design.</li>
          <li>Maintain attendance above 90%.</li>
          <li>Continue consistent performance in Machine Learning.</li>
          <li>Practice previous VTU question papers weekly.</li>
        </ul>

      </div>

    </div>
  );
}

export default AIPrediction;