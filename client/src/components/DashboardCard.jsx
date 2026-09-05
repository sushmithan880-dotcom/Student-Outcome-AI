function DashboardCard({ title, value, color }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
      <h3 className="text-gray-500 text-sm">{title}</h3>

      <p className={`text-4xl font-bold mt-3 ${color}`}>
        {value}
      </p>
    </div>
  );
}

export default DashboardCard;