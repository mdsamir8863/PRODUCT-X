import { Link } from "react-router-dom";
import ChatBoat from "../../components/ChatBoat";
import PrivacyPolicy from "../../components/PrivacyPolicy";

const Connections = () => {
  return (
    <>
      <div className="flex flex-col gap-5 p-5">
        <div className="flex flex-col items-center md:flex-row w-full justify-between gap-3 md:gap-0">
          <div className="flex flex-col gap-3">
            <p className="text-2xl text-dark-blue font-bold">Connections</p>
            <p className="text-dark-blue">
              Add and manage your connected seller and PPC accounts
            </p>
          </div>
          <button className="flex gap-1 items-center hover:text-saffron text-sm bg-dark-blue border hover:bg-transparent h-8 rounded-md p-1 px-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mt-[2px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            Learn
          </button>
        </div>
        <p className="w-full h-0 border"></p>

        <div className="flex flex-col items-center md:flex-row w-full justify-between p-5 gap-3  border rounded-md">
          <div className="flex flex-col gap-3">
            <p className="text-2xl text-dark-blue font-bold">
              Connect Your Seller Accounts
            </p>
            <p className="text-dark-blue md:w-[38rem]">
              Once connected, you can automate your product review requests,
              track your financial data, monitor your products and detect
              hijackers.
            </p>
          </div>
          <Link
            to={"/connections"}
            className="border border-saffron rounded-md p-2 text-center bg-saffron text-white hover:bg-transparent hover:text-dark-blue duration-200"
          >
            Connect your Seller Account
          </Link>
        </div>
        <div className="flex flex-col items-center md:flex-row w-full justify-between p-5 gap-3  border rounded-md">
          <div className="flex flex-col gap-3">
            <p className="text-2xl text-dark-blue font-bold">
              Connect Your PPC Accounts
            </p>
            <p className="text-dark-blue md:w-[38rem]">
              Once connected, you can track your PPC spend, examine PPC
              campaigns’ performance and automate your Amazon PPC campaigns.
            </p>
          </div>
          <Link
            to={"/connections"}
            className="border border-saffron rounded-md p-2 text-center bg-saffron text-white hover:bg-transparent hover:text-dark-blue duration-200"
          >
            Connect your Seller Account
          </Link>
        </div>
      </div>

      <ChatBoat />
      <PrivacyPolicy />
    </>
  );
};

export default Connections;
