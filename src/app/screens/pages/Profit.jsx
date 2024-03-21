import { Link } from "react-router-dom";
import ChatBoat from "../../components/ChatBoat";
import { useState } from "react";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div
      className={`fixed left-0 top-0 h-full backdrop-blur-md w-[17rem] p-2 flex flex-col items-center bg-[#003873] transition-all overflow-y-auto z-10 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <button
        onClick={toggle}
        className="text-black p-2 border w-full hover:border-red-500 hover:bg-red-500 rounded-md hover:text-white"
      >
        Close
      </button> */}
      <div className="flex flex-col w-full mt-4">
        <IconAndText
          icon={
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
                d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
              />
            </svg>
          }
          text="Dashboard"
        />
        <IconAndText icon="📁" text="Files" />
        <IconAndText icon="📅" text="Calendar" />
        <IconAndText icon="📅" text="Calendar" />
        <IconAndText icon="📅" text="Calendar" />
        {/* Add more sidebar items as needed */}
      </div>
    </div>
  );
};

const IconAndText = ({ icon, text }) => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab === activeTab ? null : tab); // Toggle active tab
  };
  return (
    <Link
      to={`./${text}`}
      className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${
        activeTab === text
          ? "text-saffron border border-saffron"
          : "text-white hover:border-saffron border-opacity-0 hover:border hover:text-saffron"
      }`}
      onClick={() => handleTabClick(text)}
      aria-current={activeTab === text ? "page" : undefined}
    >
      <span className="text-xl">{icon}</span>
      <span className="">{text}</span>
    </Link>
  );
};
const Profit = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <section className="p-5 flex flex-col">
        <button
          className="fixed z-[999] bottom-5 left-4 border-2 backdrop-blur-md border-saffron  text-saffron hover:border-dark-saffron px-2 py-1 rounded-full"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-10 h-8 hover:text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-10 h-8 animate-arrow duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg>
          )}
        </button>
        <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
        <div className="flex items-center flex-col md:flex-row-reverse  justify-around w-full ">
          <div className="flex flex-col items-start gap-5 w-full md:w-1/2">
            <p className="font-bold clr text-3xl"> Welcome to Product X</p>
            <p className="text-xl text-dark-blue pb-1 border-saffron border-b-2">
              Overview
            </p>
            <p>
              Profits is the gateway to understanding the full financial health
              of your business. Track and measure all the KPIs that you need to
              know like sales, revenue, ROI, profit, and margin. Instantly
              detect increasing or decreasing sales trends across all your
              products. Easy, smarter decision-making is just a few clicks away.
            </p>
            <div className="flex flex-wrap md:flex-nowrap items-center w-full gap-4">
              <Link
                to={"/choosePlatform"}
                className="uppercase text-center bg-saffron font-bold hover:bg-dark-saffron text-white w-full rounded-full py-3"
              >
                Connect Your Seller Account
              </Link>
              
              <Link className="uppercase border text-dark-blue text-center hover:text-white border-saffron font-bold hover:bg-dark-blue   w-full rounded-full py-3">
                Preview Demo data
              </Link>
            </div>
          </div>
          <img
            className="md:w-[22rem]"
            src="https://members.helium10.com/images/profits/lp_profits_1.svg"
            alt=""
          />
        </div>
        <div className="my-4">
          <p className="text-2xl text-dark-blue w-fit pb-1 border-saffron border-b-2 my-3">
            How it Works
          </p>
          <div className="flex  items-start justify-center flex-col md:flex-row gap-5 md:p-4">
            <div className="box flex items-center flex-col justify-center p-4 rounded-lg shadow-md w-fit">
              <p className="text-left w-full text-dark-blue mb-2 text-lg font-bold">
                Connect Your Seller Account
              </p>
              <p>
                Profits populates your dashboards with data pulled directly from
                Amazon or Walmart. Simply add your seller accounts to Helium 10
                to get started.
              </p>
              <img
                className="h-48"
                src="https://members.helium10.com/images/profits/connect-seller-account.svg"
                alt=""
              />
            </div>
            <div className="box flex items-center flex-col justify-center p-4 rounded-lg shadow-md w-fit">
              <p className="text-left text-dark-blue w-full mb-2 text-lg font-bold">
                Analyze Performance
              </p>
              <p>
                Your sales data is securely accessed to give you a full and
                accurate assessment of your business financial health. Get the
                details down to the product level.
              </p>
              <img
                className="h-48"
                src="https://members.helium10.com/images/profits/analyze-performance.svg"
                alt=""
              />
            </div>
            <div className="box flex items-center flex-col justify-center p-4 rounded-lg shadow-md w-fit">
              <p className="text-left text-dark-blue w-full mb-2 text-lg font-bold">
                Improve Decision Making
              </p>
              <p>
                Remove the guesswork from your decision making with the power of
                your data plugged directly into Helium 10 Profits.
              </p>
              <img
                className="h-48"
                src="https://members.helium10.com/images/profits/improve-decision-making.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <ChatBoat />
      </section>
    </>
  );
};

export default Profit;
