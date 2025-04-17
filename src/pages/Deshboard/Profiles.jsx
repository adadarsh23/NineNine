import React from "react";
import image2 from "../../assets/image/991.jpg"

function Profiles() {
  return (
    <div className="profiles-container min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="profile-card w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Profile Header */}
        <div className="profile-header bg-blue-600 h-32"></div>
        <div className="profile-avatar -mt-16 flex justify-center">
          <img
            className="w-32 h-32 rounded-full border-4 border-white shadow-md"
            src={image2}
            alt="User Avatar"
          />
        </div>

        {/* Profile Details */}
        <div className="profile-details text-center p-6">
          <h2 className="text-2xl font-bold text-gray-800">Ad Adarsh</h2>
          <p className="text-gray-600">Software Engineer</p>
          <p className="text-gray-500 mt-2">
            Passionate about building scalable web applications and exploring
            new technologies.
          </p>
        </div>

        {/* Profile Stats */}
        <div className="profile-stats flex justify-around bg-gray-100 p-4 border-t">
          <div className="stat text-center">
            <h3 className="text-xl font-bold text-gray-800">120</h3>
            <p className="text-gray-600">Projects</p>
          </div>
          <div className="stat text-center">
            <h3 className="text-xl font-bold text-gray-800">50k</h3>
            <p className="text-gray-600">Followers</p>
          </div>
          <div className="stat text-center">
            <h3 className="text-xl font-bold text-gray-800">30</h3>
            <p className="text-gray-600">Following</p>
          </div>
        </div>

        {/* Profile Actions */}
        <div className="profile-actions flex justify-around p-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300">
            Follow
          </button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-gray-300 transition duration-300">
            Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profiles;
