 import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { semester: "Sem 1", sgpa: 8.10 },
  { semester: "Sem 2", sgpa: 8.40 },
  { semester: "Sem 3", sgpa: 8.70 },
  { semester: "Sem 4", sgpa: 8.90 },
  { semester: "Sem 5", sgpa: 9.00 },
  { semester: "Sem 6", sgpa: 9.39 },
];

function PerformanceChart() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">
        SGPA Performance Trend
      </h2>

      <div style={{ width: "100%", height: 350 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="semester" />

            <YAxis domain={[7, 10]} />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="sgpa"
              stroke="#2563eb"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default PerformanceChart;