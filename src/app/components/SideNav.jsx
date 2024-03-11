import React, { useState } from "react";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div
      className={`fixed left-0 top-0 h-full bg-gray-800 w-64 sm:w-16 flex flex-col items-center justify-between transition-all overflow-y-auto z-10 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col w-full mt-4">
        <IconAndText icon="📊" text="Dashboard" />
        <IconAndText icon="📁" text="Files" />
        <IconAndText icon="📅" text="Calendar" />
        {/* Add more sidebar items as needed */}
      </div>
      <button onClick={toggle} className="text-white p-2 sm:hidden">
        Close
      </button>
    </div>
  );
};

const IconAndText = ({ icon, text }) => {
  return (
    <div className="flex items-center p-4 hover:bg-gray-700 cursor-pointer transition-all">
      <span className="text-xl">{icon}</span>
      <span className="ml-2">{text}</span>
    </div>
  );
};

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <button
        className="fixed top-4 left-4 bg-gray-800 text-white px-2 py-1 rounded-md sm:hidden"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? "Close" : "Open"}
      </button>
      <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
      <div
        className={`flex-grow bg-gray-200 h-screen p-4 ${
          isSidebarOpen ? "ml-0" : "ml-0"
        } transition-all`}
      >
        {/* Your main dashboard content goes here */}
        <h1>Main Dashboard Content</h1>
        <p>This is where your main dashboard content will be displayed.</p>
      </div>
    </div>
  );
};

export default Dashboard;
