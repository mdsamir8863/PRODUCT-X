import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/PRODUCT-X-2.png";
import Tools from "./Tools";
const Navbar = () => {
  const [popup, setPopup] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setIsDropdownOpen(false);
    setIsProfileMenuOpen(false);
  };
  const handleTools = (tabName) => {
    setActiveTab(tabName);
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleLogout = () => {
    setPopup(true);
    setIsProfileMenuOpen(false);
  };

  return (
    <>
      <div className="min-h-full relative">
        {/* popup box */}
        {popup ? (
          <div className="flex flex-col items-center justify-center p-5 absolute z-50 backdrop-blur-md w-full h-screen bg-[#00000052] ">
            <div className="flex flex-col items-center gap-5 justify-center bg-white h-64 w-full md:w-[22rem] rounded-md">
              <p className="font-bold text-2xl text-gray-800">Are you sure ?</p>
              <div className="flex items-center justify-center gap-7">
                <Link
                  onClick={() => setPopup(false)}
                  to={"/login"}
                  className="border border-red-600 hover:text-white hover:bg-red-500 font-bold px-10 rounded-md py-1"
                >
                  Yes
                </Link>
                <Link
                  onClick={() => setPopup(false)}
                  to={"/dashboard"}
                  className="border border-green-600 hover:text-white hover:bg-green-500 font-bold px-10 rounded-md py-1"
                >
                  No
                </Link>
              </div>
            </div>
          </div>
        ) : null}

        <nav className=" border border-saffron shadow-md ">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link>
                    <img className="h-12 w-16" src={Logo} alt="Your Company" />
                  </Link>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link
                      to="/dashboard"
                      className={`${
                        activeTab === "dashboard"
                          ? " text-saffron border border-saffron"
                          : "text-dark-blue hover:border-saffron border-opacity-0  hover:border hover:text-saffron"
                      } rounded-md px-3 py-2 text-sm font-medium`}
                      onClick={() => handleTabClick("dashboard")}
                      aria-current={
                        activeTab === "dashboard" ? "page" : undefined
                      }
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/profits"
                      className={`${
                        activeTab === "profits"
                          ? " text-saffron border border-saffron"
                          : "text-dark-blue hover:border-saffron border-opacity-0  hover:border hover:text-saffron"
                      } rounded-md px-3 py-2 text-sm font-medium`}
                      onClick={() => handleTabClick("profits")}
                      aria-current={
                        activeTab === "dashboard" ? "page" : undefined
                      }
                    >
                      Profits
                    </Link>
                    <Link
                      className={`${
                        activeTab === "tools"
                          ? " text-saffron border border-saffron flex items-center"
                          : "text-dark-blue hover:border-saffron border-opacity-0 flex items-center  hover:border hover:text-saffron"
                      } rounded-md px-3 py-2 text-sm font-medium`}
                      onClick={() => handleTools("tools")}
                      aria-current={activeTab === "tools" ? "page" : undefined}
                    >
                      Tools
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {isDropdownOpen ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        )}
                      </svg>
                    </Link>

                    {isDropdownOpen && (
                      <div className="absolute md:w-5/6 z-[999] w-full left-0  mt-14 bg-white rounded-lg shadow-lg">
                        <Tools />
                      </div>
                    )}
                    <Link
                      to="/follow-up"
                      className={`${
                        activeTab === "follow-up"
                          ? " text-saffron border border-saffron"
                          : "text-dark-blue hover:border-saffron border-opacity-0  hover:border hover:text-saffron"
                      } rounded-md px-3 py-2 text-sm font-medium`}
                      onClick={() => handleTabClick("follow-up")}
                      aria-current={
                        activeTab === "dashboard" ? "page" : undefined
                      }
                    >
                      Follow Up
                    </Link>
                    <Link
                      to="/admotic"
                      className={`${
                        activeTab === "admotic"
                          ? " text-saffron border border-saffron"
                          : "text-dark-blue hover:border-saffron border-opacity-0  hover:border hover:text-saffron"
                      } rounded-md px-3 py-2 text-sm font-medium`}
                      onClick={() => handleTabClick("admotic")}
                      aria-current={
                        activeTab === "admotic" ? "page" : undefined
                      }
                    >
                      Adtomic
                    </Link>

                    <Link
                      to="/markettracker
"
                      className={`${
                        activeTab === "markettracker"
                          ? " text-saffron border border-saffron"
                          : "text-dark-blue hover:border-saffron border-opacity-0  hover:border hover:text-saffron"
                      } rounded-md px-3 py-2 text-sm font-medium`}
                      onClick={() => handleTabClick("markettracker")}
                      aria-current={
                        activeTab === "markettracker" ? "page" : undefined
                      }
                    >
                      Market Tracker 360
                    </Link>

                    {/* Add similar links for other tabs */}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="relative rounded-full  p-1 text-gray-400 hover:text-saffron focus:outline-none   "
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">View notifications</span>
                    <svg
                      className="h-6 w-6 alert"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                      />
                    </svg>
                  </button>

                  <div className="relative ml-3">
                    <button
                      type="button"
                      className="relative flex max-w-xs items-center rounded-full  text-sm focus:outline-none   "
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                      onClick={toggleProfileMenu}
                    >
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-12 w-12 rounded-full profile-image"
                        src="https://img.freepik.com/premium-photo/portrait-cuteLittle-boy-preschool-with-copyspace-created-with-generative-ai_762026-36552.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697068800&semt=ais"
                        alt=""
                      />
                    </button>

                    <div
                      className={`profile-menu absolute right-0 z-50 mt-2 w-64  origin-top-right rounded-md bg-white py-3 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                        isProfileMenuOpen ? "block" : "hidden"
                      }`}
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabIndex="-1"
                    >
                      <p className="text-center font-bold">Samir</p>
                      <p className="text-center text-gray-400">
                        samir@gmail.com
                      </p>
                      <p className="border my-2"></p>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:border hover:border-saffron rounded-md mx-1"
                        role="menuitem"
                        tabIndex="-1"
                      >
                        Your Profile
                      </Link>
                      <Link
                        to="/plans-bills"
                        className="block px-4 py-2 text-sm text-gray-700 hover:border hover:border-saffron rounded-md mx-1"
                        role="menuitem"
                        tabIndex="-1"
                      >
                        Plans & Bills
                      </Link>
                      <Link
                        to="/access-management"
                        className="block px-4 py-2 text-sm text-gray-700 hover:border hover:border-saffron rounded-md mx-1"
                        role="menuitem"
                        tabIndex="-1"
                      >
                        Access Management
                      </Link>
                      <Link
                        to="/connections"
                        className="block px-4 py-2 text-sm text-gray-700 hover:border hover:border-saffron rounded-md mx-1"
                        role="menuitem"
                        tabIndex="-1"
                      >
                        Connections
                      </Link>
                      <Link
                        to="/settings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:border hover:border-saffron rounded-md mx-1"
                        role="menuitem"
                        tabIndex="-1"
                      >
                        Settings
                      </Link>
                      <p className="border shadow-lg my-2"></p>
                      <Link
                        onClick={handleLogout}
                        className="block px-4 py-2 text-sm text-gray-700 hover:border hover:border-saffron rounded-md mx-1"
                        role="menuitem"
                        tabIndex="-1"
                      >
                        Sign out
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-md  p-2 text-gray-400 hover:border-saffron border-opacity-0  hover:border hover:text-saffron focus:outline-none mbNav"
                  aria-controls="mobile-menu"
                  aria-expanded={isProfileMenuOpen ? "true" : "false"}
                  onClick={toggleProfileMenu}
                >
                  <span className="sr-only">Open main menu</span>
                  {isProfileMenuOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <div
            className={`${isProfileMenuOpen ? "block" : "hidden"} md:hidden`}
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/dashboard"
                className={`${
                  activeTab === "dashboard"
                    ? " text-saffron border border-saffron"
                    : "text-dark-blue hover:border-saffron border-opacity-0  hover:border hover:text-saffron"
                } block rounded-md px-3 py-2 text-base font-medium`}
                aria-current={activeTab === "dashboard" ? "page" : undefined}
                onClick={() => handleTabClick("dashboard")}
              >
                Dashboard
              </Link>
              <Link
                className={`${
                  activeTab === "tools"
                    ? " text-saffron border border-saffron flex items-center"
                    : "text-dark-blue hover:border-saffron border-opacity-0 flex items-center  hover:border hover:text-saffron"
                } rounded-md px-3 py-2 text-sm font-medium`}
                onClick={() => handleTools("tools")}
                aria-current={activeTab === "tools" ? "page" : undefined}
              >
                Tools
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isDropdownOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  )}
                </svg>
              </Link>

              {isDropdownOpen && (
                <div className="absolute md:w-5/6 z-[999] w-full left-0  mt-14 bg-white rounded-lg shadow-lg">
                  <Tools />
                </div>
              )}
              {/* Add similar links for other tabs */}
            </div>
            <div className="border-t border-gray-700 py-3">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://img.freepik.com/premium-photo/portrait-cuteLittle-boy-preschool-with-copyspace-created-with-generative-ai_762026-36552.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697068800&semt=ais"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">
                    Tom Cook
                  </div>
                  <div className="text-sm font-medium leading-none text-gray-400">
                    tom@example.com
                  </div>
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <Link
                  to="/profile"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:border-saffron border-opacity-0  hover:border hover:text-saffron"
                >
                  Your Profile
                </Link>
                <Link
                  to="/settings"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:border-saffron border-opacity-0  hover:border hover:text-saffron"
                >
                  Settings
                </Link>
                <Link
                  onClick={handleLogout}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:border-saffron border-opacity-0  hover:border hover:text-saffron"
                  role="menuitem"
                  tabIndex="-1"
                >
                  Sign out
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
