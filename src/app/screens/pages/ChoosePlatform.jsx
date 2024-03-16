import { useState } from "react";
import ChatBoat from "../../components/ChatBoat";
import { Link } from "react-router-dom";

const ChoosePlatform = () => {
  const [isNextButtonEnabled, setNextButtonEnabled] = useState(false);
  const [isAmazonSelected, setAmazonSelected] = useState(false);

  const handleConnectAmazonClick = () => {
    setAmazonSelected(true);
    setNextButtonEnabled(true);
  };
  return (
    <>
      <div className="flex md:flex-row mt-5 p-5 flex-col items-start  gap-3">
        <div className="flex flex-col justify-center mx-auto items-center gap-4">
          <p className="text-2xl font-bold text-dark-blue">
            Choose your Platform
          </p>
          <p className="text-dark-blue">
            Select the marketplace you would like to connect.
          </p>
          <p className="text-dark-blue font-bold">
            What account would you like to connect?
          </p>
          <button
            onClick={handleConnectAmazonClick}
            className={`flex duration-500 focus:shadow-md rounded-md flex-col border hover:border-dark-blue  items-center justify-center p-5 ${
              isAmazonSelected ? "bg-saffron" : ""
            }`}
          >
            <img
              src="https://re-cdn.helium10.com/container/static/amazon-logo-SiXUHUSZ.svg"
              alt=""
            />
            <p className="font-bold text-dark-blue">Connect to Amazon</p>
            <p className="font-light text-dark-blue text-sm">
              Connect your Amazon Seller Central account to Helium 10
            </p>
          </button>

          <div className="flex w-full items-center mt-6 p-5 justify-between border shadow-md">
            <Link to={"/connections"} className=" text-red-500">
              Cancel
            </Link>
            <Link to={'/connectAmazon'}>
              <button
                disabled={!isNextButtonEnabled}
                className={`rounded-full border px-5 p-2 text-white ${
                  isNextButtonEnabled
                    ? "bg-saffron hover:bg-dark-saffron"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                Next
              </button>
            </Link>
          </div>
        </div>

        <ChatBoat />
      </div>
    </>
  );
};

export default ChoosePlatform;
