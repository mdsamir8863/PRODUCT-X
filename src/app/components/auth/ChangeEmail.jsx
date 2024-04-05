import { useState } from "react";
import Logo from "../Logo";
import { Link } from "react-router-dom";

const ChangeEmail = () => {
  const [isConfirm, setIsConfirm] = useState(false);

  return (
    <>
      {isConfirm ? (
        <section className="flex items-center h-screen w-full justify-center">
          <div className="flex flex-col items-center justify-center gap-5 w-full p-5 md:w-1/2">
            <Logo />
            <p className="text-dark-blue  text-2xl  md:text-4xl">Code verification</p>
            <div className="flex flex-col items-start gap-2 w-full">
              <label className="text-gray-700" htmlFor="name">
                Password
              </label>
              <input
                id="password"
                className="border border-black rounded-sm p-2 w-full outline-none"
                type="password"
                placeholder="Enter Your Password"
              />
              <label className="text-gray-700" htmlFor="email">
                New email
              </label>
              <input
                id="email"
                className="border border-black rounded-sm p-2 w-full outline-none "
                type="text"
                placeholder="Enter Your New Email"
              />
              <label className="text-gray-700" htmlFor="email">
                New email again
              </label>
              <input
                id="email"
                className="border border-black rounded-sm p-2 w-full outline-none "
                type="password"
                placeholder="Enter Your New Email Again"
              />

              <button
                onClick={() => {
                  setIsConfirm(false);
                }}
                className="uppercase text-center mt-5 bg-saffron font-bold  hover:bg-dark-saffron text-white w-full rounded-full py-3"
              >
                Change Email
              </button>
              <Link
                to={"/profile"}
                className="uppercase text-center mt-2 bg-dark-blue font-bold  hover:bg-transparent border-2 border-dark-blue hover:text-dark-blue text-white w-full rounded-full py-3"
              >
                Cancel
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <section className="flex items-center h-screen w-full justify-center">
          <div className="flex flex-col items-center justify-center gap-5 w-full p-5 md:w-1/2">
            <Logo />
            <p className="text-dark-blue  text-2xl  md:text-4xl">Code verification</p>
            <div className="w-full">
              <p className="text-dark-blue text-[12px] font-light mb-2">
                Verification code was sent to <br /> an**********@g****.com
              </p>
              <input
                id="email"
                className="border border-black rounded-sm p-2 w-full outline-none "
                type="text"
                placeholder="Please enter your email"
              />
            </div>
            <button
              onClick={() => {
                setIsConfirm(true);
              }}
              className="uppercase text-center bg-saffron font-bold  hover:bg-dark-saffron text-white w-full rounded-full py-3"
            >
              Confirm
            </button>
            <button
              onClick={() => {}}
              className="uppercase text-center bg-dark-blue font-bold  hover:bg-transparent border-2 border-dark-blue hover:text-dark-blue text-white w-full rounded-full py-3"
            >
              resend
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default ChangeEmail;
