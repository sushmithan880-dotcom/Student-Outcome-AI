function Profile() {
  return (
    <div className="p-6">
      <div className="bg-white rounded-xl shadow-lg p-8">

        <div className="flex items-center gap-6">
          <img
            src="https://i.pravatar.cc/150"
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-blue-600"
          />

          <div>
            <h1 className="text-3xl font-bold">Sushmitha N</h1>
            <p className="text-gray-500">Computer Science Engineering</p>
            <p className="text-gray-500">7th Semester</p>
          </div>
        </div>

        <hr className="my-6" />

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <p><strong>USN:</strong> 1JV22CSXXX</p>
            <p><strong>Email:</strong> sushmitha@gmail.com</p>
            <p><strong>Phone:</strong> 9876543210</p>
          </div>

          <div>
            <p><strong>CGPA:</strong> 9.12</p>
            <p><strong>Attendance:</strong> 92%</p>
            <p><strong>Backlogs:</strong> 0</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Profile;