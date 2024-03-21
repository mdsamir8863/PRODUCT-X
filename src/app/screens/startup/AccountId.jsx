import { Link } from "react-router-dom";

const AccountId = () => {
  return (
    <>
      <section className="flex items-start justify-between w-full my-1">
        <div className="flex flex-col gap-5 p-5 md:w-3/5 w-full">
          <p className="text-2xl text-dark-blue">
            Get instant value from your Helium 10 account.
          </p>
          <p className="font-light text-dark-blue">
            Once connected, you’ll be able to:
          </p>
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-saffron"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <div className="flex flex-col">
              <p className="font-bold">
                Monitor sales to guide strategic decisions that drive profits
              </p>
              <p className="text-sm font-light">
                with Profits, our financial analytics dashboard
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-saffron"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <div className="flex flex-col">
              <p className="font-bold">
                Automatically request reviews to increase your product ratings
              </p>
              <p className="text-sm font-light">
                with our email automation tool Follow-Up
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-saffron"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <div className="flex flex-col">
              <p className="font-bold">
                Know where your products stand with real-time keyword tracking
              </p>
              <p className="text-sm font-light">with Keyword Tracker</p>
            </div>
          </div>

          <p className="text-gray-500 items-center flex mt-5 justify-start gap-2 text-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="md:w-10 md:h-10 w-[5rem] h-[2.5rem]  text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            Helium 10 maintains the highest standard for security to keep your
            data safe and secure at all times. We will never share your data
            with others.
          </p>
          {/* </div> */}
          <div className="flex justify-between items-center border-t-2 p-5 w-full">
            <Link
              to={"/onboarding"}
              className="border-2 hover:shadow-md hover:shadow-saffron border-saffron text-dark-blue  p-2 px-5 rounded-full"
            >
              Back
            </Link>
            <div className="flex gap-5 items-center">
              <Link
                to={"/salesvolume"}
                className="hover:underline  text-dark-blue   "
              >
                Not right now
              </Link>
              <Link
                to={"/connectAmazon"}
                className="border-2 hover:shadow-md bg-saffron hover:bg-transparent text-white hover:shadow-saffron border-saffron hover:text-dark-blue  p-2 px-5 rounded-full"
              >
                Connect to Seller Central
              </Link>
            </div>
          </div>
        </div>

        <div className="md:w-2/5 hidden ml-5 md:flex items-end justify-end border mr-3 p-2">
          <img
            className="h-[90vh] w-full float-right"
            src="https://re-cdn.helium10.com/container/static/infoStep-itaONKiy.png"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default AccountId;
