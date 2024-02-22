import { Link } from "react-router-dom";
import Logo from "../../../assets/PRODUCT-X-2.png";
import PrivacyPolicy from "../../components/PrivacyPolicy";
import { useState } from "react";
const ForgetPassword = () => {
  const [recovery, setRecovery] = useState(false);
  return (
    <>
      <section className="h-full w-full flex items-center justify-center">
        <div className="flex flex-col gap-4 items-center justify-center mx-auto md:w-[475px] mt-16">
          <img className="w-24" src={Logo} alt="" />
          <p className="clr font-bold text-3xl">Password Recovery</p>
          {recovery ? (
            <div className="message w-full bg-yellow-50 rounded-lg p-3">
              <p>
                We sent a message to
                <span className="font-bold clr "> samir@gmail.com.</span> Please
                check your mailbox and follow instructions.
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-start gap-2 w-full">
              <label className="text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                className="border border-black rounded-sm p-2 w-full outline-none "
                type="text"
                placeholder="Please enter your email"
                required={true}
              />
              <button
                onClick={() => setRecovery(true)}
                className="uppercase bg-blue-500 font-bold hover:bg-blue-600 text-white w-full rounded py-3"
              >
                RESET YOUR PASSWORD
              </button>
              <Link
                to={"/login"}
                className="uppercase border border-blue-500 font-bold hover:bg-blue-100 text-gray-800 w-full rounded py-3"
              >
                <button className=" uppercase font-bold  text-gray-800 w-full ">
                  log in
                </button>
              </Link>
            </div>
          )}
        </div>

        <PrivacyPolicy />
      </section>
    </>
  );
};

export default ForgetPassword;
