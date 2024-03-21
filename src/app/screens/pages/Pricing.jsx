import React, { useState } from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState("Basic");

  // Define features for each plan
  const features = {
    Basic: [
      {
        id: "1",
        key: "Cerebro Keyword Insights",
        desc:
          "Identify all the keywords your product (or your competitors’ products) currently rank for in Amazon’s search engine",
        access: "Limited",
      },
      {
        id: "2",
        key: "Magnet Keyword Finder",
        desc:
          "Reveal high-volume, highly relevant keywords you can use to boost traffic to your product listings",
        access: "Limited",
      },
      {
        id: "3",
        key: "Black Box Product Finder",
        desc:
          "Find high demand, low competition product ideas in every category on Amazon",
        access: "Limited",
      },
      {
        id: "4",
        key: "Keyword Tracker",
        desc:
          "Track the organic and sponsored position of your keywords in real-time, all in one place",
        access: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-7 h-7 text-red-500 border-2 p-1 rounded-full border-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ),
      },
      {
        id: "5",
        key: "Xray Chrome Extension",
        desc:
          "Discover product opportunities by exploring critical sales data for any existing product on the market",
        access: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 border-2 animate-pulse border-saffron rounded-full text-saffron"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        ),
      },
    ],
    Standard: [
      {
        id: "1",
        key: "Cerebro Keyword Insights",
        desc:
          "Identify all the keywords your product (or your competitors’ products) currently rank for in Amazon’s search engine",
        access: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 border-2 animate-pulse border-saffron rounded-full text-saffron"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        ),
      },
      {
        id: "2",
        key: "Magnet Keyword Finder",
        desc:
          "Reveal high-volume, highly relevant keywords you can use to boost traffic to your product listings",
        access: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 border-2 animate-pulse border-saffron rounded-full text-saffron"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        ),
      },
      {
        id: "3",
        key: "Black Box Product Finder",
        desc:
          "Find high demand, low competition product ideas in every category on Amazon",
        access: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 border-2 animate-pulse border-saffron rounded-full text-saffron"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        ),
      },
      {
        id: "4",
        key: "Keyword Tracker",
        desc:
          "Track the organic and sponsored position of your keywords in real-time, all in one place",
        access: "500 keywords",
      },
      {
        id: "5",
        key: "Xray Chrome Extension",
        desc:
          "Discover product opportunities by exploring critical sales data for any existing product on the market",
        access: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 border-2 animate-pulse border-saffron rounded-full text-saffron"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        ),
      },
    ],
    Pro: [
      {
        id: "1",
        key: "Cerebro Keyword Insights",
        desc:
          "Identify all the keywords your product (or your competitors’ products) currently rank for in Amazon’s search engine",
        access: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 border-2 animate-pulse border-saffron rounded-full text-saffron"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        ),
      },
      {
        id: "2",
        key: "Magnet Keyword Finder",
        desc:
          "Reveal high-volume, highly relevant keywords you can use to boost traffic to your product listings",
        access: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 border-2 animate-pulse border-saffron rounded-full text-saffron"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        ),
      },
      {
        id: "3",
        key: "Black Box Product Finder",
        desc:
          "Find high demand, low competition product ideas in every category on Amazon",
        access: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 border-2 animate-pulse border-saffron rounded-full text-saffron"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        ),
      },
      {
        id: "4",
        key: "Keyword Tracker",
        desc:
          "Track the organic and sponsored position of your keywords in real-time, all in one place",
        access: "2,500 keywords",
      },
      {
        id: "5",
        key: "Xray Chrome Extension",
        desc:
          "Discover product opportunities by exploring critical sales data for any existing product on the market",
        access: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 border-2 animate-pulse border-saffron rounded-full text-saffron"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        ),
      },
    ],
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="bg-white ">
      <div className="container px-6 py-8 mx-auto">
        <h1 className="text-2xl font-semibold py-5 w-full text-center text-dark-blue capitalize lg:text-3xl ">
          Upgrade to Standard to get expanded access to product & keyword
          research tools
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-6 lg:grid-cols-3 xl:mt-12">
          <div
            onClick={() => handlePlanSelect("Basic")}
            className={`flex items-center justify-between px-8 py-4 border-2 cursor-pointer rounded-full text-dark-blue  ${
              selectedPlan === "Basic"
                ? "border-2 border-saffron text-dark-blue rounded-full shadow-md shadow-saffron"
                : ""
            }`}
          >
            <div className="flex flex-col items-center space-y-1">
              <h2 className="text-lg font-medium text-gray-700 sm:text-xl ">
                Basic
              </h2>
            </div>

            <h2 className="text-2xl font-semibold text-gray-500 sm:text-3xl ">
              $39/mo
            </h2>
          </div>

          <div
            onClick={() => handlePlanSelect("Standard")}
            className={`flex items-center justify-between px-8 py-4 border-2 cursor-pointer rounded-full text-dark-blue  ${
              selectedPlan === "Standard"
                ? "border-2 border-saffron text-dark-blue rounded-full shadow-md shadow-saffron"
                : ""
            }`}
          >
            <div className="flex flex-col items-center space-y-1">
              <h2 className="text-lg font-medium text-gray-700 sm:text-xl ">
                Standard
              </h2>
            </div>

            <h2 className="text-2xl font-semibold text-gray-500 sm:text-3xl ">
              $69/mo
            </h2>
          </div>

          <div
            onClick={() => handlePlanSelect("Pro")}
            className={`flex items-center justify-between px-8 py-4 border-2 cursor-pointer rounded-full text-dark-blue  ${
              selectedPlan === "Pro"
                ? "border-2 border-saffron text-dark-blue rounded-full shadow-md shadow-saffron"
                : ""
            }`}
          >
            <div className="flex flex-col items-center space-y-1">
              <h2 className="text-lg font-medium text-gray-700 sm:text-xl ">
                Pro
              </h2>
            </div>

            <div className="flex flex-col items-center space-y-1">
              <h2 className="text-2xl font-semibold text-gray-500 sm:text-3xl ">
                $149 <span className="text-base font-medium">/Month</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="p-8 mt-8 space-y-8 shadow-md  rounded-md border border-saffron">
          <p className="text-dark-blue text-2xl">Features</p>
          {features[selectedPlan].map(({ id, key, desc, access }) => (
            <div
              key={id}
              className="flex items-center justify-between text-gray-800 "
            >
              <div className="flex flex-col ">
                <p className="text-lg sm:text-xl font-bold text-dark-blue">
                  {key}
                </p>
                <p className="text-gray-500 text-[12px]">{desc}</p>
              </div>
              <p className="text-gray-500 text-[12px]">{access}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-4 items-center justify-end mt-8">
          <Link
            to={"/dashboard"}
            className="hover:underline  transition-colors duration-300 transform text-dark-blue  "
          >
            Not right now
          </Link>
          <Link className="px-8 py-2 tracking-wide text-white capitalize transition-colors duration-300 transform bg-saffron rounded-full border-2 border-saffron hover:border-2 hover:text-dark-blue hover:bg-transparent hover:shadow-md hover:shadow-saffron ">
            Upgrade Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
