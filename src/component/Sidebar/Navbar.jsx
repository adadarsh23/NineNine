import React from "react";
import { IoNotifications } from "react-icons/io5";
import logo1 from "../../assets/image/download.png";

function Navbar() {
  return (
    <div className="content_Right">
      <div className="content__wrapper p-4">
        <nav className="bg-white text-white rounded-2xl" aria-label="Global">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <a
                      href="/"
                      className="button1 rounded-full btn btn-dark px-3 py-2 text-sm font-medium text-white"
                    >
                      Dashboard
                    </a>
                    <a
                      href="/"
                      className="button1 rounded-full btn btn-dark px-3 py-2 text-sm font-medium text-white"
                    >
                      Tasks
                    </a>
                    <a
                      href="https://github.com/adadarsh23"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button1 rounded-full btn btn-dark px-3 py-2 text-sm font-medium text-white"
                    >
                      GitHub
                    </a>
                    <a
                      href="/about"
                      className="button1 rounded-full btn btn-dark px-3 py-2 text-sm font-medium text-white"
                    >
                      About
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Notification Icon */}
                <a
                  href="/notification"
                  className="relative rounded bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <IoNotifications size={24} />
                </a>

                {/* Profile Dropdown */}
                <div className="relative ml-3">
                  <a
                    href="/profile"
                    className="flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src={logo1}
                      alt="Profile"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3 text-center">
              <a
                href="/"
                className=" button1 bg-gray-900 block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Dashboard
              </a>
              <a
                href="/"
                className=" button1 bg-gray-900 block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Tasks
              </a>
              <a
                href="https://github.com/adadarsh23"
                target="_blank"
                rel="noopener noreferrer"
                className=" button1 bg-gray-900 block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                GitHub
              </a>
              <a
                href="/about"
                className=" button1 bg-gray-900 block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                About
              </a>
              
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;