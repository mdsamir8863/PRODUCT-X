import { Link } from "react-router-dom";
import Logo from "../../../assets/PRODUCT-X-2.png";
import PrivacyPolicy from "../../components/PrivacyPolicy";
const Login = () => {
  return (
    <>
      <section>
        <form className="container mx-auto gap-3 items-center flex-col flex p-3 md:w-[475px]">
          <img className="w-24" src={Logo} alt="" />
          <p className="text-3xl font-bold text-[#003873]">
            Log In to Product X
          </p>
          <div className="flex flex-col items-start gap-2 w-full">
            <label className="text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className="border border-black rounded-sm p-2 w-full outline-none "
              type="text"
              placeholder="Please enter your email"
            />
            <label className="text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              className="border border-black rounded-sm p-2 w-full outline-none "
              type="password"
              placeholder="Please enter your password"
            />

            <div className="flex w-full justify-between  items-center gap-2 mt-1 mb-2">
              <div className="flex items-center gap-1">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  value=""
                  className="md:w-4 md:h-4 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
                <label
                  htmlFor="link-checkbox"
                  className=" text-sm md:flex md:gap-1"
                >
                  Remember Me
                </label>
              </div>
              <Link className="text-blue-600">Forget Password?</Link>
            </div>
            <button className="uppercase bg-blue-500 font-bold hover:bg-blue-600 text-white w-full rounded py-3">
              Log in
            </button>
          </div>
          <p className="">
            New to Product X?
            <Link to={"/register"} className="text-blue-600 ms-1">
              Sign Up Now
            </Link>
          </p>
          <p className="">
            Problems or questions?
            <Link to={"/register"} className="text-blue-600 ms-1">
              Contact Us
            </Link>
          </p>
        </form>
        <div className="mt-16">
          <PrivacyPolicy />
        </div>
      </section>
    </>
  );
};

export default Login;
