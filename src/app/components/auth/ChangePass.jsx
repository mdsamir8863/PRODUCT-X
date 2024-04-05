import { Link } from "react-router-dom";
import Logo from "../Logo";

const ChangePass = () => {
  return (
    <>
      <section className="flex items-center h-screen w-full justify-center">
        <div className="flex flex-col items-center justify-center gap-5 w-full p-5 md:w-1/2">
          <Logo />
          <p className="text-dark-blue text-2xl  md:text-4xl">Change Password</p>
          <div className="flex flex-col items-start gap-2 w-full">
            <label className="text-gray-700" htmlFor="name">
              Current Password
            </label>
            <input
              id="password"
              className="border border-black rounded-sm p-2 w-full outline-none"
              type="password"
              placeholder="Enter Your Current Password"
            />
            <label className="text-gray-700" htmlFor="email">
              New password
            </label>
            <input
              id="email"
              className="border border-black rounded-sm p-2 w-full outline-none "
              type="text"
              placeholder="Enter Your New Password"
            />
            <label className="text-gray-700" htmlFor="email">
              New password again
            </label>
            <input
              id="email"
              className="border border-black rounded-sm p-2 w-full outline-none "
              type="password"
              placeholder="Enter Your New Password Again"
            />

            <button className="uppercase text-center mt-5 bg-saffron font-bold  hover:bg-dark-saffron text-white w-full rounded-full py-3">
              Set Password
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
    </>
  );
};

export default ChangePass;
