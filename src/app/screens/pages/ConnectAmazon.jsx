import React, { useState } from "react";
import { Link } from "react-router-dom";
import ChatBoat from "../../components/ChatBoat";

const ConnectAmazon = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [connected, setConnected] = useState(false);
  const [isNextButtonEnabled, setNextButtonEnabled] = useState(false);

  const handleConnectPlatformClick = (platform) => {
    setSelectedPlatform(platform);
    setNextButtonEnabled(true);
  };

  return (
    <>
      <div className="flex md:flex-row mt-5 p-5 flex-col items-start  gap-3">
        {connected ? (
          <div className="flex flex-col justify-start mx-auto items-start gap-4">
            <p className="text-dark-blue font-light">Add a Seller Account</p>
            <p className="text-2xl font-bold text-dark-blue">
              Taking you to Amazon Seller Central
            </p>
            <p className="text-dark-blue font-light">
              You will be taken to an Amazon Seller Central page to authorize
              Helium 10 access to your Seller Partner account.
            </p>
            <p className="text-dark-blue text-">
              If a pop-up or new tab hasn’t opened,
              <Link className="text-saffron hover:underline font-bold">Click here</Link>
            </p>
           

            <div className="flex w-full items-center mt-6 p-5 justify-between border shadow-md">
              <Link to={"/connections"} className=" text-red-500">
                Cancel
              </Link>
              <p></p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-start mx-auto items-start gap-4">
            <p className="text-dark-blue font-light">Add a Seller Account</p>
            <p className="text-2xl font-bold text-dark-blue">
              Great, let’s connect your existing account!
            </p>
            <p className="text-dark-blue font-light">
              Connecting your Amazon account to Helium 10 will unlock powerful
              tools and insights for your business.
            </p>
            <p className="text-dark-blue font-bold">
              Choose the Amazon region in which you are selling
            </p>
            <div className="flex gap-3 sm:flex-wrap mx-auto justify-center sm:flex-row flex-col">
              <button
                onClick={() => handleConnectPlatformClick("Europe")}
                className={`flex duration-500 w-[15rem]  focus:shadow-md rounded-md flex-col border hover:border-dark-blue  items-center justify-center p-5 ${
                  selectedPlatform === "Europe" ? "bg-saffron" : ""
                }`}
              >
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
                <p className="font-bold text-dark-blue">Europe</p>
                <p className="font-light text-dark-blue text-sm">
                  DE, ES, FR, IT, UK, IN, TR, NL, AE, EG, SA, SE, PL
                </p>
              </button>
              <button
                onClick={() => handleConnectPlatformClick("North America")}
                className={`flex duration-500 w-[15rem]  focus:shadow-md rounded-md flex-col border hover:border-dark-blue  items-center justify-center p-5 ${
                  selectedPlatform === "North America" ? "bg-saffron" : ""
                }`}
              >
                <img
                  src="https://re-cdn.helium10.com/container/static/northAmerica-M6BmmClL.png"
                  alt=""
                />
                <p className="font-bold text-dark-blue">North America</p>
                <p className="font-light text-dark-blue text-sm">
                  USA, Canada, Mexico, Brazil
                </p>
              </button>
              <button
                onClick={() => handleConnectPlatformClick("Asia")}
                className={`flex duration-500 w-[15rem]  focus:shadow-md rounded-md flex-col border hover:border-dark-blue  items-center justify-center p-5 ${
                  selectedPlatform === "Asia" ? "bg-saffron" : ""
                }`}
              >
                <img
                  src="https://re-cdn.helium10.com/container/static/asia-x_RPVPO3.png"
                  alt=""
                />
                <p className="font-bold text-dark-blue">Asia</p>
                <p className="font-light text-dark-blue text-sm">
                  Australia, Japan, Singapore
                </p>
              </button>
            </div>

            <div className="flex w-full items-center mt-6 p-5 gap-1 justify-between border shadow-md">
              <Link to={"/connections"} className=" text-red-500">
                Cancel
              </Link>
              <Link to={"/connectAmazon"}>
                <button
                  onClick={() => setConnected(true)}
                  disabled={!isNextButtonEnabled}
                  className={`rounded-full border px-5 p-2 text-white ${
                    isNextButtonEnabled
                      ? "bg-saffron hover:bg-dark-saffron"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                >
                  Initiate in Seller Central
                </button>
              </Link>
            </div>
          </div>
        )}

        <ChatBoat />
      </div>
    </>
  );
};

export default ConnectAmazon;
