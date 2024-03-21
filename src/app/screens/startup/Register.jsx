import { Link } from "react-router-dom";
import Logo from "../../../assets/PRODUCT-X-2.png";
import PrivacyPolicy from "../../components/PrivacyPolicy";

const Register = () => {
  return (
    <>
      <section className="flex w-full justify-center gap-16 p-5 items-start md:flex-row flex-col">
        <form className="container gap-5 items-center flex-col flex p-3 md:w-[475px]">
          <img className="w-24" src={Logo} alt="" />
          <p className="text-3xl font-bold text-[#003873]">
            Sign Up to Product X
          </p>
          <div className="flex flex-col items-start gap-2">
            <label className="text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              className="border border-black rounded-sm p-2 w-full outline-none"
              type="text"
              placeholder="First and last name"
            />
            <label className="text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className="border border-black rounded-sm p-2 w-full outline-none "
              type="text"
              placeholder="This will Your Login"
            />
            <label className="text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              className="border border-black rounded-sm p-2 w-full outline-none "
              type="password"
              placeholder="Choose a strong password"
            />

            <div className="flex items-center gap-2 ">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                className="md:w-4 md:h-4 w-5 h-5 text-saffron rounded-full focus:ring-saffron "
              />
              <label
                htmlFor="link-checkbox"
                className=" text-sm md:flex md:gap-1 my-3"
              >
                I agree with the
                <a
                  href="#"
                  className="text-saffron mx-1 dark:text-saffron hover:text-dark-saffron hover:underline"
                >
                  Privacy Policy
                </a>
                and
                <a
                  href="#"
                  className="text-blue-600 ms-1 dark:text-saffron hover:text-dark-saffron hover:underline"
                >
                  Terms & Conditions
                </a>
              </label>
            </div>
            <Link className="w-full" to={'/onboarding'}>
              <button className="uppercase bg-saffron font-bold hover:bg-dark-saffron text-white w-full rounded-full py-3">
                Sign Up
              </button>
            </Link>
          </div>
          <p className="">
            Already have an account ?
            <Link
              to={"/login"}
              className="text-saffron hover:text-dark-saffron ms-1"
            >
              Log In
            </Link>
          </p>
        </form>
        <div className="hidden md:flex flex-col gap-3 p-10 shadow-lg rounded-lg border md:w-[475px]">
          <img
            className="w-full"
            src="https://members.helium10.com/images/signup-images/frame-image.svg"
            alt=""
          />
          <div className="w-10  h-10 rounded-full flex items-center justify-center border-gray-600  border-2">
            <p className="-mb-4 text-4xl text-gray-600">&#8220;</p>
          </div>

          <p className="font-bold text-[#485e75]">
            Absolutely the best product on the market for dealing with anything
            as a seller on Amazon!!!
          </p>
          <p>
            I can not think of anything else that your product could do expect
            sell the products for me! What is even more incredible about this
            product is the Freedom Ticket Training that you get for free with
            the purchase of your product!! Incredibly fantastic product and
            training!!!
          </p>
          <p>Michael Mosely</p>
        </div>
      </section>
      <div className="mt-16">
        <PrivacyPolicy />
      </div>
    </>
  );
};

export default Register;
