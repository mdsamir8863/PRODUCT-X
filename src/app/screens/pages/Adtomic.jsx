import { useState } from "react";
import { Link } from "react-router-dom";
import TestimonialSlider from "../../components/TestimonialSlider";

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

const testimonialData = [
  {
    brand: "logo",
    text:
      "I set my ACoS target at 30%, but with the help of Helium 10’s tools, not one of my campaigns went over 22% and we received over 5,000 PPC orders resulting in over $266,000 in new sales.",
    author: "John Doe",
  },
  {
    brand: "logo",
    text:
      "Adtomic has allowed us to finally bring our PPC in house, saving thousands of dollars in agency fees each month, and also helping us to stop the bleeding on crappy keywords.",
    author: "Kathleen Homyock",
  },
  {
    brand: "logo",
    text:
      "The time savings is priceless. I can quickly move through actions needed on around 160 active campaigns to maintain my ACoS goals.",
    author: "Jake Paulsen",
  },
  // Add more testimonials as needed
];
const Adtomic = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="h-full relative w-full">
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
        <section className="flex flex-col w-full p-3">
          <div className="lex items-start  flex-col justify-center mx-auto mt-3 gap-3 px-5 md:px-0 border border-saffron  bg-gray-50 pt-10 pb-32 rounded-md">
            <div className="flex items-start md:flex-row flex-col justify-around  gap-4">
              <div className="flex flex-col items-start border-saffron  gap-3 md:w-1/2">
                <img
                  className="bg-style"
                  src="https://adtomic.helium10.com/react/assets/AdtomicLogo-c8605933.svg"
                  alt=""
                />
                <p className="text-dark-blue">
                  You’re one click away from our most powerful solution to help
                  you successfully and strategically manage your Amazon &
                  Walmart PPC.
                </p>
                <p className="font-bold text-2xl">
                  $199 <span className="font-light text-lg">/mo</span>
                  <br />
                  <span className="font-light text-gray-400 text-sm">
                    + 2% of monthly ad spend over $10,000
                  </span>
                </p>
                <div className="flex items-center gap-3">
                  <button className="rounded-full text-sm  p-2 bg-saffron text-white px-5 hover:shadow-md hover:bg-dark-saffron font-bold">
                    + Add to Plan
                  </button>
                  <button className="flex  text-sm items-center rounded-full p-2 border border-dark-blue text-dark-blue hover:bg-saffron hover: px-2 hover:shadow-md  font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-4 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>{" "}
                    Book A Demo
                  </button>
                </div>
              </div>

              <video className="md:w-1/3" src="" controls></video>
            </div>
            {/* brands logo */}
            <div className="flex flex-wrap gap-3 items-center justify-around mt-5 w-full">
              <p className="bg-slate-100 rounded-full p-2 px-3 text-dark-blue border">
                Clients logo
              </p>
              <p className="bg-slate-100 rounded-full p-2 px-3 text-dark-blue border">
                Clients logo
              </p>
              <p className="bg-slate-100 rounded-full p-2 px-3 text-dark-blue border">
                Clients logo
              </p>
              <p className="bg-slate-100 rounded-full p-2 px-3 text-dark-blue border">
                Clients logo
              </p>
              <p className="bg-slate-100 rounded-full p-2 px-3 text-dark-blue border">
                Clients logo
              </p>
              <p className="bg-slate-100 rounded-full p-2 px-3 text-dark-blue border">
                Clients logo
              </p>
            </div>
          </div>
          {/* box */}
          <div className="flex -mt-16 bg-white  border-saffron items-center md:flex-row flex-col mx-auto gap-3 w-fit justify-around p-5 border rounded-md">
            <div className="flex flex-col gap-3">
              <p className="font-bold text-dark-blue">Includes:</p>
              <p className="flex items-center text-dark-blue font-light text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                Support for Amazon & Walmart PPC
              </p>
              <p className="flex items-center text-dark-blue font-light text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                A.I. bid optimization for all campaigns
              </p>
              <p className="flex items-center text-dark-blue font-light text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                Day parting schedules + hourly data
              </p>
              <p className="flex items-center text-dark-blue font-light text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                Unlimited rules for campaigns & keywords with the choice of
                automated or manual actions
              </p>
              <p className="flex items-center text-dark-blue font-light text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                Advanced analytics with filtering, bulk actions, and reporting
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="flex items-center text-dark-blue font-light text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                Bulk campaign creation with templates
              </p>
              <p className="flex items-center text-dark-blue font-light text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                Slack community access, weekly office hours, and webinar
                training
              </p>
              <p className="flex items-center text-dark-blue font-light text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                White-glove onboarding (for customers over $20K in ad spend per
                month)
              </p>
              <Link className="flex items-center text-dark-blue hover:underline ms-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                Book A demo to learn more
              </Link>
            </div>
          </div>
          {/* box  */}
          <div className="flex items-center justify-center flex-col gap-3 my-10 ">
            <p className="font-bold text-2xl text-dark-blue">
              {" "}
              Create, manage and optimize campaigns with ease
            </p>
            <p className="">
              Adtomic is PPC software designed to maximize your advertising ROI
            </p>
            <div className="grid md:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-3 md:flex-row flex-col  mt-5">
              {/* box */}
              <div className="flex flex-col items-start border-saffron  justify-center border rounded-md p-3  gap-3">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_189_77577)">
                    <path
                      d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
                      fill="#D2EDFF"
                    ></path>
                    <path
                      d="M35.9531 28.0447V28.0267H22.8331C22.1741 25.3917 19.7931 23.4307 16.9561 23.4307C13.6121 23.4307 10.8921 26.1517 10.8921 29.4957C10.8921 32.8397 13.6121 35.5607 16.9561 35.5607C19.9151 35.5607 22.3821 33.4297 22.9111 30.6227H29.1751V35.0197H31.7701V30.6227H34.5101V35.0197H37.1051V28.0447H35.9521H35.9531ZM16.9561 32.9647C15.0431 32.9647 13.4871 31.4087 13.4871 29.4957C13.4871 27.5827 15.0431 26.0257 16.9561 26.0257C18.8691 26.0257 20.4251 27.5817 20.4251 29.4957C20.4251 31.4097 18.8691 32.9647 16.9561 32.9647Z"
                      fill="#E8C328"
                    ></path>
                    <path
                      d="M25.7855 13.4395H12.5175C12.042 13.4395 11.6565 13.8249 11.6565 14.3005V14.3015C11.6565 14.777 12.042 15.1625 12.5175 15.1625H25.7855C26.261 15.1625 26.6465 14.777 26.6465 14.3015V14.3005C26.6465 13.8249 26.261 13.4395 25.7855 13.4395Z"
                      fill="#5CB3FF"
                    ></path>
                    <path
                      d="M35.39 13.4395H29.682C29.2065 13.4395 28.821 13.8249 28.821 14.3005V14.3015C28.821 14.777 29.2065 15.1625 29.682 15.1625H35.39C35.8656 15.1625 36.251 14.777 36.251 14.3015V14.3005C36.251 13.8249 35.8656 13.4395 35.39 13.4395Z"
                      fill="#5CB3FF"
                    ></path>
                    <path
                      d="M35.3919 22.9307H23.8039C23.3284 22.9307 22.9429 23.3161 22.9429 23.7917V23.7927C22.9429 24.2682 23.3284 24.6537 23.8039 24.6537H35.3919C35.8674 24.6537 36.2529 24.2682 36.2529 23.7927V23.7917C36.2529 23.3161 35.8674 22.9307 35.3919 22.9307Z"
                      fill="#5CB3FF"
                    ></path>
                    <path
                      d="M35.4783 18.1846H20.9613C20.4858 18.1846 20.1003 18.5701 20.1003 19.0456V19.0466C20.1003 19.5221 20.4858 19.9076 20.9613 19.9076H35.4783C35.9539 19.9076 36.3393 19.5221 36.3393 19.0466V19.0456C36.3393 18.5701 35.9539 18.1846 35.4783 18.1846Z"
                      fill="#5CB3FF"
                    ></path>
                    <path
                      d="M17.1645 18.1846H12.7345C12.259 18.1846 11.8735 18.5701 11.8735 19.0456V19.0466C11.8735 19.5221 12.259 19.9076 12.7345 19.9076H17.1645C17.6401 19.9076 18.0255 19.5221 18.0255 19.0466V19.0456C18.0255 18.5701 17.6401 18.1846 17.1645 18.1846Z"
                      fill="#5CB3FF"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_189_77577">
                      <rect width="48" height="48" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-dark-blue">
                  The Smarter, Simpler Way to do Keyword Bids
                </p>
                <p className="text-gray-400">
                  Powered by sophisticated AI, Adtomic delivers precise keyword
                  bidding suggestions to maximize product visibility.
                </p>
              </div>
              {/* box */}
              <div className="flex flex-col items-start border-saffron  justify-center border rounded-md p-3  gap-3">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_189_77577)">
                    <path
                      d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
                      fill="#D2EDFF"
                    ></path>
                    <path
                      d="M35.9531 28.0447V28.0267H22.8331C22.1741 25.3917 19.7931 23.4307 16.9561 23.4307C13.6121 23.4307 10.8921 26.1517 10.8921 29.4957C10.8921 32.8397 13.6121 35.5607 16.9561 35.5607C19.9151 35.5607 22.3821 33.4297 22.9111 30.6227H29.1751V35.0197H31.7701V30.6227H34.5101V35.0197H37.1051V28.0447H35.9521H35.9531ZM16.9561 32.9647C15.0431 32.9647 13.4871 31.4087 13.4871 29.4957C13.4871 27.5827 15.0431 26.0257 16.9561 26.0257C18.8691 26.0257 20.4251 27.5817 20.4251 29.4957C20.4251 31.4097 18.8691 32.9647 16.9561 32.9647Z"
                      fill="#E8C328"
                    ></path>
                    <path
                      d="M25.7855 13.4395H12.5175C12.042 13.4395 11.6565 13.8249 11.6565 14.3005V14.3015C11.6565 14.777 12.042 15.1625 12.5175 15.1625H25.7855C26.261 15.1625 26.6465 14.777 26.6465 14.3015V14.3005C26.6465 13.8249 26.261 13.4395 25.7855 13.4395Z"
                      fill="#5CB3FF"
                    ></path>
                    <path
                      d="M35.39 13.4395H29.682C29.2065 13.4395 28.821 13.8249 28.821 14.3005V14.3015C28.821 14.777 29.2065 15.1625 29.682 15.1625H35.39C35.8656 15.1625 36.251 14.777 36.251 14.3015V14.3005C36.251 13.8249 35.8656 13.4395 35.39 13.4395Z"
                      fill="#5CB3FF"
                    ></path>
                    <path
                      d="M35.3919 22.9307H23.8039C23.3284 22.9307 22.9429 23.3161 22.9429 23.7917V23.7927C22.9429 24.2682 23.3284 24.6537 23.8039 24.6537H35.3919C35.8674 24.6537 36.2529 24.2682 36.2529 23.7927V23.7917C36.2529 23.3161 35.8674 22.9307 35.3919 22.9307Z"
                      fill="#5CB3FF"
                    ></path>
                    <path
                      d="M35.4783 18.1846H20.9613C20.4858 18.1846 20.1003 18.5701 20.1003 19.0456V19.0466C20.1003 19.5221 20.4858 19.9076 20.9613 19.9076H35.4783C35.9539 19.9076 36.3393 19.5221 36.3393 19.0466V19.0456C36.3393 18.5701 35.9539 18.1846 35.4783 18.1846Z"
                      fill="#5CB3FF"
                    ></path>
                    <path
                      d="M17.1645 18.1846H12.7345C12.259 18.1846 11.8735 18.5701 11.8735 19.0456V19.0466C11.8735 19.5221 12.259 19.9076 12.7345 19.9076H17.1645C17.6401 19.9076 18.0255 19.5221 18.0255 19.0466V19.0456C18.0255 18.5701 17.6401 18.1846 17.1645 18.1846Z"
                      fill="#5CB3FF"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_189_77577">
                      <rect width="48" height="48" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-dark-blue">
                  The Smarter, Simpler Way to do Keyword Bids
                </p>
                <p className="text-gray-400">
                  Powered by sophisticated AI, Adtomic delivers precise keyword
                  bidding suggestions to maximize product visibility.
                </p>
              </div>
              {/* box */}
              <div className="flex flex-col items-start border-saffron  justify-center border rounded-md p-3  gap-3">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_189_77577)">
                    <path
                      d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
                      fill="#D2EDFF"
                    ></path>
                    <path
                      d="M35.9531 28.0447V28.0267H22.8331C22.1741 25.3917 19.7931 23.4307 16.9561 23.4307C13.6121 23.4307 10.8921 26.1517 10.8921 29.4957C10.8921 32.8397 13.6121 35.5607 16.9561 35.5607C19.9151 35.5607 22.3821 33.4297 22.9111 30.6227H29.1751V35.0197H31.7701V30.6227H34.5101V35.0197H37.1051V28.0447H35.9521H35.9531ZM16.9561 32.9647C15.0431 32.9647 13.4871 31.4087 13.4871 29.4957C13.4871 27.5827 15.0431 26.0257 16.9561 26.0257C18.8691 26.0257 20.4251 27.5817 20.4251 29.4957C20.4251 31.4097 18.8691 32.9647 16.9561 32.9647Z"
                      fill="#E8C328"
                    ></path>
                    <path
                      d="M25.7855 13.4395H12.5175C12.042 13.4395 11.6565 13.8249 11.6565 14.3005V14.3015C11.6565 14.777 12.042 15.1625 12.5175 15.1625H25.7855C26.261 15.1625 26.6465 14.777 26.6465 14.3015V14.3005C26.6465 13.8249 26.261 13.4395 25.7855 13.4395Z"
                      fill="#5CB3FF"
                    ></path>
                    <path
                      d="M35.39 13.4395H29.682C29.2065 13.4395 28.821 13.8249 28.821 14.3005V14.3015C28.821 14.777 29.2065 15.1625 29.682 15.1625H35.39C35.8656 15.1625 36.251 14.777 36.251 14.3015V14.3005C36.251 13.8249 35.8656 13.4395 35.39 13.4395Z"
                      fill="#5CB3FF"
                    ></path>
                    <path
                      d="M35.3919 22.9307H23.8039C23.3284 22.9307 22.9429 23.3161 22.9429 23.7917V23.7927C22.9429 24.2682 23.3284 24.6537 23.8039 24.6537H35.3919C35.8674 24.6537 36.2529 24.2682 36.2529 23.7927V23.7917C36.2529 23.3161 35.8674 22.9307 35.3919 22.9307Z"
                      fill="#5CB3FF"
                    ></path>
                    <path
                      d="M35.4783 18.1846H20.9613C20.4858 18.1846 20.1003 18.5701 20.1003 19.0456V19.0466C20.1003 19.5221 20.4858 19.9076 20.9613 19.9076H35.4783C35.9539 19.9076 36.3393 19.5221 36.3393 19.0466V19.0456C36.3393 18.5701 35.9539 18.1846 35.4783 18.1846Z"
                      fill="#5CB3FF"
                    ></path>
                    <path
                      d="M17.1645 18.1846H12.7345C12.259 18.1846 11.8735 18.5701 11.8735 19.0456V19.0466C11.8735 19.5221 12.259 19.9076 12.7345 19.9076H17.1645C17.6401 19.9076 18.0255 19.5221 18.0255 19.0466V19.0456C18.0255 18.5701 17.6401 18.1846 17.1645 18.1846Z"
                      fill="#5CB3FF"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_189_77577">
                      <rect width="48" height="48" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-dark-blue">
                  The Smarter, Simpler Way to do Keyword Bids
                </p>
                <p className="text-gray-400">
                  Powered by sophisticated AI, Adtomic delivers precise keyword
                  bidding suggestions to maximize product visibility.
                </p>
              </div>
              {/* box */}
              <div className="flex flex-col items-start border-saffron  justify-center border rounded-md p-3  gap-3">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_189_77577)">
                    <path
                      d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
                      fill="#D2EDFF"
                    ></path>
                    <path
                      d="M35.9531 28.0447V28.0267H22.8331C22.1741 25.3917 19.7931 23.4307 16.9561 23.4307C13.6121 23.4307 10.8921 26.1517 10.8921 29.4957C10.8921 32.8397 13.6121 35.5607 16.9561 35.5607C19.9151 35.5607 22.3821 33.4297 22.9111 30.6227H29.1751V35.0197H31.7701V30.6227H34.5101V35.0197H37.1051V28.0447H35.9521H35.9531ZM16.9561 32.9647C15.0431 32.9647 13.4871 31.4087 13.4871 29.4957C13.4871 27.5827 15.0431 26.0257 16.9561 26.0257C18.8691 26.0257 20.4251 27.5817 20.4251 29.4957C20.4251 31.4097 18.8691 32.9647 16.9561 32.9647Z"
                      fill="#E8C328"
                    ></path>
                    <path
                      d="M25.7855 13.4395H12.5175C12.042 13.4395 11.6565 13.8249 11.6565 14.3005V14.3015C11.6565 14.777 12.042 15.1625 12.5175 15.1625H25.7855C26.261 15.1625 26.6465 14.777 26.6465 14.3015V14.3005C26.6465 13.8249 26.261 13.4395 25.7855 13.4395Z"
                      fill="#5CB3FF"
                    ></path>
                    <path
                      d="M35.39 13.4395H29.682C29.2065 13.4395 28.821 13.8249 28.821 14.3005V14.3015C28.821 14.777 29.2065 15.1625 29.682 15.1625H35.39C35.8656 15.1625 36.251 14.777 36.251 14.3015V14.3005C36.251 13.8249 35.8656 13.4395 35.39 13.4395Z"
                      fill="#5CB3FF"
                    ></path>
                    <path
                      d="M35.3919 22.9307H23.8039C23.3284 22.9307 22.9429 23.3161 22.9429 23.7917V23.7927C22.9429 24.2682 23.3284 24.6537 23.8039 24.6537H35.3919C35.8674 24.6537 36.2529 24.2682 36.2529 23.7927V23.7917C36.2529 23.3161 35.8674 22.9307 35.3919 22.9307Z"
                      fill="#5CB3FF"
                    ></path>
                    <path
                      d="M35.4783 18.1846H20.9613C20.4858 18.1846 20.1003 18.5701 20.1003 19.0456V19.0466C20.1003 19.5221 20.4858 19.9076 20.9613 19.9076H35.4783C35.9539 19.9076 36.3393 19.5221 36.3393 19.0466V19.0456C36.3393 18.5701 35.9539 18.1846 35.4783 18.1846Z"
                      fill="#5CB3FF"
                    ></path>
                    <path
                      d="M17.1645 18.1846H12.7345C12.259 18.1846 11.8735 18.5701 11.8735 19.0456V19.0466C11.8735 19.5221 12.259 19.9076 12.7345 19.9076H17.1645C17.6401 19.9076 18.0255 19.5221 18.0255 19.0466V19.0456C18.0255 18.5701 17.6401 18.1846 17.1645 18.1846Z"
                      fill="#5CB3FF"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_189_77577">
                      <rect width="48" height="48" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-dark-blue">
                  The Smarter, Simpler Way to do Keyword Bids
                </p>
                <p className="text-gray-400">
                  Powered by sophisticated AI, Adtomic delivers precise keyword
                  bidding suggestions to maximize product visibility.
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              overflow: "scroll",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              "&::WebkitScrollbar": {
                display: "none",
              },
            }}
            className="flex items-start border border-saffron   overflow-scroll md:overflow-hidden pb-10 overflow-x-hidden  flex-col justify-center mx-auto my-6 md:py-10 gap-3  md:px-0 w-full bg-gray-50 p-5 rounded-md"
          >
            <div className="flex items-center md:flex-row flex-col w-full sm:p-5 justify-around gap-4">
              <div className="flex flex-col items-start border-saffron gap-3 md:w-[22rem]">
                <p className="text-dark-blue font-bold text-2xl">
                  Adtomic drives results for sellers, brands, and agencies
                </p>
                <ul>
                  <li className="flex items-center gap-2 text-dark-blue mt-2 text-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 text-saffron"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                    Hit and maintain your ACoS goals
                  </li>
                  <li className="flex items-center gap-2 text-dark-blue mt-2 text-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 text-saffron"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                    Save time managing campaigns
                  </li>
                  <li className="flex items-center gap-2 text-dark-blue mt-2 text-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 text-saffron"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                    Increase sales with less effort
                  </li>
                </ul>
                <div className="flex items-center gap-3 mt-4">
                  <button className="rounded-full text-sm  p-2 bg-saffron text-white px-5 hover:shadow-md hover:bg-dark-saffron font-bold">
                    + Add to Plan
                  </button>
                  <button className="flex  text-sm items-center rounded-full p-2 border border-dark-blue text-dark-blue hover:bg-saffron hover: px-2 hover:shadow-md  font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-4 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>{" "}
                    Book A Demo
                  </button>
                </div>
              </div>
              <div className="w-full h-fit  md:w-2/5 md:mt-0 mt-44 pb-40 md:pb-0  relative md:mb-0">
                <TestimonialSlider testimonials={testimonialData} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Adtomic;
