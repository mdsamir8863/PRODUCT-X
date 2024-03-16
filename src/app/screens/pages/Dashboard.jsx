import { useState } from "react";
import ChatBoat from "../../components/ChatBoat";
import PrivacyPolicy from "../../components/PrivacyPolicy";
import Testimonials from "../../components/Testimonials";
import { Link } from "react-router-dom";
import Select from "react-select";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Videos_social from "../../components/Videos_social";
// import usaFlag from "./usa-flag.svg"; // Import flag icons as SVG files
// import canadaFlag from "./canada-flag.svg";
// import mexicoFlag from "./mexico-flag.svg";
// import germanyFlag from "./germany-flag.svg";
// import spainFlag from "./spain-flag.svg";

const domains = [
  { value: "www.amazon.com", label: "www.amazon.com" },
  { value: "www.amazon.ca", label: "www.amazon.ca" },
  { value: "www.amazon.mx", label: "www.amazon.mx" },
  { value: "www.amazon.de", label: "www.amazon.de" },
  { value: "www.amazon.es", label: "www.amazon.es" },
];

const domainFlagMap = {
  "www.amazon.com": "usaFlag",
  "www.amazon.ca": "canadaFlag",
  "www.amazon.mx": "mexicoFlag",
  "www.amazon.de": "germanyFlag",
  "www.amazon.es": "spainFlag",
};

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div
      className={`fixed left-0 top-0 h-full backdrop-blur-md w-[17rem] p-2 flex flex-col items-center bg-[#003873] transition-all overflow-y-auto z-10 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <button
        onClick={toggle}
        className="text-black p-2 border w-full hover:border-red-500 hover:bg-red-500 rounded-full hover:text-white"
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
      className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium ${
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

const ASIN_options = [
  { value: "Option 1", label: "Option 1" },
  { value: "Option 2", label: "Option 2" },
  { value: "Option 3", label: "Option 3" },
];
const keywords = [
  { value: "keyword 1", label: "keyword 1" },
  { value: "keyword 2", label: "keyword 2" },
  { value: "keyword 3", label: "keyword 3" },
];

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedASINOption, setSelectedASINOption] = useState(null);
  const [selectKeyword, setSelectKeyword] = useState(null);
  const [selectDomain, setSelectDomain] = useState(domains[0]);

  const handleASINOptionChange = (selectedASINOption) => {
    setSelectedASINOption(selectedASINOption);
  };
  const handleDomainChange = (selectDomain) => {
    setSelectDomain(selectDomain);
  };
  const handleKeywordChange = (selectKeyword) => {
    setSelectKeyword(selectKeyword);
  };
  const isASINSearchButtonDisabled = !selectedASINOption;
  const isKeywordSearchButtonDisabled = !selectKeyword;
  const isDomainSearchButtonDisabled = !selectDomain;
  const handleSearch = () => {
    // Your search logic here
    console.log("Searching for:");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <ChatBoat />
      <section className="p-5">
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
        <p className="font-bold text-2xl mb-5 text-dark-blue">Welcome, Samir</p>

        <Testimonials />
        <div className="flex items-center gap-4 md:gap-0 flex-col border my-5 p-5  md:flex-row justify-between w-full">
          {/* left div */}
          <div className="flex items-start gap-3 w-full md:w-1/2 flex-col justify-start">
            <p className="text-2xl font-bold text-dark-blue">
              Try out our Research Tools
            </p>
            <p className="text-xl">Cerebro Sample Search</p>
            <p className="">
              You can use Cerebro to look up competitor ASINs and see which
              keywords are working best for them to help build out your own
              listings.
            </p>
            <div className="flex md:flex-row flex-col md:gap-0 gap-3 items-center justify-start w-full md:space-x-4 relative">
              <Select
                value={selectedASINOption}
                onChange={handleASINOptionChange}
                options={ASIN_options}
                className="md:w-64 w-full text-sm"
                isClearable
                placeholder="Select a sample ASIN to search"
                styles={{
                  control: (provided) => ({
                    ...provided,
                    border: "1px solid #FF9933",
                    borderRadius: "0.375rem",
                  }),
                  indicatorSeparator: () => ({}),
                  clearIndicator: () => ({}),
                  dropdownIndicator: () => ({}),
                  singleValue: (provided) => ({
                    ...provided,
                    position: "relative",
                  }),
                  menu: (provided) => ({
                    ...provided,
                    border: "1px solid #FF9933",
                    borderRadius: "0.375rem",
                  }),
                  option: (provided, { isFocused }) => ({
                    ...provided,
                    backgroundColor: isFocused ? "#FF9933" : "white",
                    color: isFocused ? "#ffffff" : "black",

                    "&:hover": {
                      backgroundColor: "#FF9933",
                    },
                  }),
                }}
              />

              <button
                onClick={handleSearch}
                disabled={isASINSearchButtonDisabled}
                className={`px-2 flex gap-1 items-center justify-center py-2 w-full md:w-fit rounded-full ${
                  isASINSearchButtonDisabled
                    ? "bg-gray-200 cursor-not-allowed"
                    : "bg-saffron text-white hover:bg-dark-saffron"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                Search
              </button>
            </div>
          </div>
          {/* right div */}
          <div className="md:hidden flex border h-0 w-full"></div>
          <div className="flex items-start gap-3 w-full md:w-1/2 flex-col justify-start">
            <div className="flex justify-end items-center w-full md:space-x-4 relative">
              <Select
                value={selectDomain}
                onChange={handleDomainChange}
                options={domains.map((option) => ({
                  ...option,
                  label: (
                    <div className="flex items-center">{option.label}</div>
                  ),
                }))}
                styles={{
                  control: (provided) => ({
                    ...provided,
                    border: "1px solid #FF9933",
                    borderRadius: "0.375rem",
                  }),
                  indicatorSeparator: () => ({}),
                  clearIndicator: () => ({}),
                  dropdownIndicator: () => ({}),
                  singleValue: (provided) => ({
                    ...provided,
                    position: "relative",
                  }),
                  menu: (provided) => ({
                    ...provided,
                    border: "1px solid #FF9933",
                    borderRadius: "0.375rem",
                    color: "black",
                  }),
                  option: (provided, { isFocused }) => ({
                    ...provided,
                    backgroundColor: isFocused ? "#FF9933" : "white",
                    color: isFocused ? "#ffffff" : "black",

                    "&:hover": {
                      backgroundColor: "#FF9933",
                    },
                  }),
                }}
                className="md:w-64 w-full"
                placeholder="Select an option"
              />
            </div>
            <p className="text-xl">Magnet Sample Search</p>
            <p className="">
              You can use Cerebro to look up competitor ASINs and see which
              keywords are working best for them to help build out your own
              listings.
            </p>
            <div className="flex md:flex-row flex-col md:gap-0 gap-3 items-center justify-start w-full md:space-x-4 relative">
              <Select
                value={selectKeyword}
                onChange={handleKeywordChange}
                options={keywords}
                className="md:w-64 w-full text-sm"
                isClearable
                placeholder="Select a sample keyword"
                styles={{
                  control: (provided) => ({
                    ...provided,
                    border: "1px solid #FF9933",
                    borderRadius: "0.375rem",
                  }),
                  indicatorSeparator: () => ({}),
                  clearIndicator: () => ({}),
                  dropdownIndicator: () => ({}),
                  singleValue: (provided) => ({
                    ...provided,
                    position: "relative",
                  }),
                  menu: (provided) => ({
                    ...provided,
                    border: "1px solid #FF9933",
                    borderRadius: "0.375rem",
                  }),
                  option: (provided, { isFocused }) => ({
                    ...provided,
                    backgroundColor: isFocused ? "#FF9933" : "white",
                    color: isFocused ? "#ffffff" : "black",

                    "&:hover": {
                      backgroundColor: "#FF9933",
                    },
                  }),
                }}
              />

              <button
                onClick={handleSearch}
                disabled={isKeywordSearchButtonDisabled}
                className={`px-2 flex gap-1 items-center py-2 w-full text-center justify-center md:w-fit rounded-full ${
                  isKeywordSearchButtonDisabled
                    ? "bg-gray-200 cursor-not-allowed"
                    : "bg-saffron text-white hover:bg-dark-saffron"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                Search
              </button>
            </div>
          </div>
        </div>

        {/* video section */}
        <Videos_social />
        <div className="flex items-center justify-between md:flex-row flex-col p-5 gap-5">
          <div className="flex flex-col items-start gap-3 md:w-3/5">
            <p className="font-bold text-2xl text-dark-blue">
              Welcome to Your Insights Dashboard
            </p>
            <p className="text-dark-blue">
              Insights Dashboard is the base of operations for your business
              within Helium 10.
            </p>
            <p className="text-dark-blue flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 mr-2 text-green-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              Track and visualize all your key metrics at a glance.
            </p>
            <p className="text-dark-blue flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 mr-2 text-green-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              Manage your catalog of products in one consolidated view. Access
              critical data fast to make the right decisions.
            </p>
            <p className="text-dark-blue flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 mr-2 text-green-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              Get daily insights showing you what to do now to simplify your
              operations and maximize ROI.
            </p>
            <p className="font-bold text-dark-blue">
              Connect your Amazon Seller account to unlock the value of Insights
              Dashboard!
            </p>

            <div className="flex md:flex-row flex-col items-start justify-center gap-3">
              <Link
                className="border bg-saffron w-[20rem] hover:bg-dark-saffron gap-2 text-center rounded-full flex items-center justify-center text-white p-2"
                to={"/connections"}
              >
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
                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                  />
                </svg>
                Connect To Amazon
              </Link>
              <p className="flex items-start text-sm font-light">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="shield-check"
                  className=" h-5 w-5 mt-1 mr-1 text-green-500"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  ></path>
                </svg>
                Product X is designed to protect your information and is not
                sharing it with third-party sources.
              </p>
            </div>
          </div>
          <iframe
            className="sm:w-[25rem]  sm:h-[12rem] w-full h-full"
            src="https://www.youtube-nocookie.com/embed/UUddpbgPEJM?si=8VdRhuiUqh4NRGkx"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full mt-5">
          <img
            className="w-full"
            src="https://re-cdn.helium10.com/container/static/demoEn-IBQ5tq5V.png"
            alt=""
          />
        </div>
      </section>
      <PrivacyPolicy />
    </>
  );
};

export default Dashboard;
