 import {
  FaHome,
  FaUser,
  FaChartBar,
  FaRobot,
  FaCalendarCheck,
  FaBell,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-700 text-white fixed p-5">

      <h1 className="text-2xl font-bold mb-10">
        🎓 ERP Portal
      </h1>

      <ul className="space-y-5">

        <li>
          <Link
            to="/student"
            className="flex items-center gap-3 hover:text-yellow-300"
          >
            <FaHome />
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/profile"
            className="flex items-center gap-3 hover:text-yellow-300"
          >
            <FaUser />
            Profile
          </Link>
        </li>

        <li>
          <Link
            to="/results"
            className="flex items-center gap-3 hover:text-yellow-300"
          >
            <FaChartBar />
            Results
          </Link>
        </li>

        <li>
          <Link
            to="/attendance"
            className="flex items-center gap-3 hover:text-yellow-300"
          >
            <FaCalendarCheck />
            Attendance
          </Link>
        </li>

        <li>
          <Link
            to="/prediction"
            className="flex items-center gap-3 hover:text-yellow-300"
          >
            <FaRobot />
            AI Prediction
          </Link>
        </li>

        <li>
          <Link
            to="/notifications"
            className="flex items-center gap-3 hover:text-yellow-300"
          >
            <FaBell />
            Notifications
          </Link>
        </li>

        <li>
          <Link
            to="/settings"
            className="flex items-center gap-3 hover:text-yellow-300"
          >
            <FaCog />
            Settings
          </Link>
        </li>

        <li>
          <Link
            to="/"
            className="flex items-center gap-3 text-red-300"
          >
            <FaSignOutAlt />
            Logout
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;