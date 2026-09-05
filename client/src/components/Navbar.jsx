import { FaBell, FaSearch, FaMoon } from "react-icons/fa";

function Navbar() {
  return (
    <header className="bg-white shadow-md h-16 flex items-center justify-between px-6">

      {/* Left Side */}
      <div className="flex items-center gap-4">

        <h1 className="text-2xl font-bold text-blue-700">
          Student ERP
        </h1>

        <div className="relative">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">

        <button className="text-xl text-gray-600 hover:text-blue-600">
          <FaMoon />
        </button>

        <button className="text-xl text-gray-600 hover:text-blue-600 relative">
          <FaBell />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </button>

        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/50"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />

          <div>
            <h3 className="font-semibold">Sushmitha</h3>
            <p className="text-sm text-gray-500">Student</p>
          </div>
        </div>

      </div>

    </header>
  );
}

export default Navbar;