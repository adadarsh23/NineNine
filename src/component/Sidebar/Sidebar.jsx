import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/991.jpg";
import logo1 from "../../assets/image/Nine-Photoroom.png";
import { FaSlideshare, FaTasks, FaSignInAlt } from "react-icons/fa";
import { IoAnalytics } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { PiContactlessPaymentFill } from "react-icons/pi";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { IoMdContacts } from "react-icons/io";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-[110]">
        <button
          onClick={toggleSidebar}
          className="text-gray-800 bg-white p-2 rounded-md shadow-md focus:outline-none"
        >
          {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 z-[100] h-full bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out w-[70%] md:w-[15%] min-w-[200px] max-w-[250px]`}
      >
        {/* Logo Section */}
        <Link to="/" onClick={() => setIsOpen(false)}>
          <div className="py-3 flex flex-col items-center">
            <div className="relative group">
              <img
                src={logo}
                alt="Main logo"
                className="w-20 h-20 rounded-full shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-6"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <img
              src={logo1}
              alt="Secondary logo"
              className="w-32 h-10 mt-3 rounded shadow-2xl transition-all duration-300 ease-in-out hover:scale-105 hover:rotate-1 hover:shadow-purple-500/50"
            />
          </div>
        </Link>


        {/* Menu Items */}
        <div className="sidebar__menu px-4 mt-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className=" link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 button1 w-full text-white bg-blue-700 hover:scale-105 hover:shadow-xl hover:translate-y-[-1px] focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 mb-2 flex items-center justify-start transition duration-300 ease-in-out"
          >
            <span className="icon me-2">
              <FaSlideshare />
            </span>
            Deshboard
          </Link>
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className=" link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 button1 w-full text-white bg-blue-700 hover:scale-105 hover:shadow-xl hover:translate-y-[-1px] focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 mb-2 flex items-center justify-start transition duration-300 ease-in-out"
          >
            <span className="icon me-2">
              <FaTasks />
            </span>
            Tasks
          </Link>
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className=" link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 button1 w-full text-white bg-blue-700 hover:scale-105 hover:shadow-xl hover:translate-y-[-1px] focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 mb-2 flex items-center justify-start transition duration-300 ease-in-out"
          >
            <span className="icon me-2">
              <IoAnalytics />
            </span>
            Analytics
          </Link>
          <Link
            to="/payment"
            onClick={() => setIsOpen(false)}
            className=" link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 button1 w-full text-white bg-blue-700 hover:scale-105 hover:shadow-xl hover:translate-y-[-1px] focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 mb-2 flex items-center justify-start transition duration-300 ease-in-out"
          >
            <span className="icon me-2">
              <PiContactlessPaymentFill />
            </span>
            Payment
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="  link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 button1 w-full text-white bg-blue-700 hover:scale-105 hover:shadow-xl hover:translate-y-[-1px] focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 mb-2 flex items-center justify-start transition duration-300 ease-in-out"
          >
            <span className="icon me-2">
              <IoMdContacts />
            </span>
            Contact
          </Link>

          <hr className="w-full h-1 bg-gray-100 border-0 rounded-sm my-10 dark:bg-gray-700 opacity-100" />

          {/* Auth Items */}
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="  link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 log w-full mx-0 text-white bg-gray-800 hover:scale-105 hover:shadow-xl hover:translate-y-[-1px] focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2 flex items-center justify-start transition duration-300 ease-in-out"
          >
            <span className="run me-2">
              <CiLogin />
            </span>
            Log In
          </Link>
          <Link
            to="/signin"
            onClick={() => setIsOpen(false)}
            className=" link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 log w-full mx-0 text-white bg-gray-800 hover:scale-105 hover:shadow-xl hover:translate-y-[-1px] focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2 flex items-center justify-start transition duration-300 ease-in-out"
          >
            <span className="run me-2">
              <FaSignInAlt />
            </span>
            Sign In
          </Link>
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[90] md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;