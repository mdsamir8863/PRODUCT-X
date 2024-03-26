import { useEffect, useState } from "react";
import { countries } from "countries-list";
import ChatBoat from "../../components/ChatBoat";
import PrivacyPolicy from "../../components/PrivacyPolicy";
import { Link } from "react-router-dom";
// import AddressPhoneNumber from "../../components/AddressPhoneNumber";

const Profile = () => {
  const [popupForm, setPopupForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    companyName: false,
    address: false,
    city: false,
    state: false,
    zip: false,
    country: false,
    phoneNumber: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({ ...prevErrors, [name]: value === "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };

  useEffect(() => {
    if (popupForm) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, [popupForm]);

  return (
    <>
      <section className="flex flex-col gap-5 md:p-5 relative">
        {/* form pop up */}
        {popupForm && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-[#00000082]">
            <form
              onSubmit={handleSubmit}
              className="relative border sm:w-1/2 w-full md:rounded-md opacity-100 z-20 bg-white p-5 mx-auto md:mt-5 flex items-center flex-col "
            >
              {/* cross icon */}
              <svg
                onClick={() => {
                  setPopupForm(false);
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 hover:text-red-500 cursor-pointer absolute top-2 right-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
              {/* form inputs */}
              <div className="mb-4 w-full">
                <label className="block text-dark-blue text-sm font-bold mb-2">
                  Name / Company Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name
                      ? "animate-bouncec border-2 border-led-600 rounded-full py-1 px-5 w-full"
                      : "form-input border-2 border-dark-blue rounded-full py-1 px-5 w-full"
                  }
                  required
                />
              </div>
              <div className="mb-4  w-full">
                <label className="block text-dark-blue text-sm font-bold mb-2">
                  Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.address
                      ? "animate-bouncec border-2 border-led-600 rounded-full py-1 px-5 w-full"
                      : "form-input border-2 border-dark-blue rounded-full py-1 px-5 w-full"
                  }
                  required
                />
              </div>

              <div className="flex items-center justify-center md:flex-row flex-col gap-2">
                <div className="mb-4 md:w-1/2 w-full">
                  <label className="block text-dark-blue text-sm font-bold mb-2">
                    City / District *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.city
                        ? "animate-bouncec border-2 border-led-600 rounded-full py-1 px-5 w-full"
                        : "form-input border-2 border-dark-blue rounded-full py-1 px-5 w-full"
                    }
                    required
                  />
                </div>
                <div className="mb-4 md:w-1/2 w-full">
                  <label className="block text-dark-blue text-sm font-bold mb-2">
                    State / Province *
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.state
                        ? "animate-bouncec border-2 border-led-600 rounded-full py-1 px-5 w-full"
                        : "form-input border-2 border-dark-blue rounded-full py-1 px-5 w-full"
                    }
                    required
                  />
                </div>
              </div>
              <div className="flex items-center justify-center md:flex-row flex-col gap-2">
                <div className="mb-4 md:w-1/2 w-full">
                  <label className="block text-dark-blue text-sm font-bold mb-2">
                    Zip / Postal Code *
                  </label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.zip
                        ? "animate-bouncec border-2 border-led-600 rounded-full py-1 px-5 w-full"
                        : "form-input border-2 border-dark-blue rounded-full py-1 px-5 w-full"
                    }
                    required
                  />
                </div>
                <div className="mb-4 md:w-1/2 w-full">
                  <label className="block text-dark-blue text-sm font-bold mb-2">
                    Country *
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.country
                        ? "animate-bouncecs border-2 border-led-600 rounded-full py-1.5 px-5 w-full text-dark-blue"
                        : "form-input border-2 border-dark-blue rounded-full py-1.5 px-5 w-full text-dark-blue"
                    }
                    required
                  >
                    <option value="">Select Country</option>
                    {Object.entries(countries).map(([code, country]) => (
                      <option
                        className="bg-white text-dark-blue hover:bg-dark-blue hover:text-saffron"
                        key={code}
                        value={code}
                      >
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mb-4 w-full">
                <label className="block text-dark-blue text-sm font-bold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.phoneNumber
                      ? "animate-bouncec border-2 border-led-600 rounded-full py-1 px-5 w-full"
                      : "form-input border-2 border-dark-blue rounded-full py-1 px-5 w-full"
                  }
                  required
                />
              </div>
              <div className="mb-4 flex gap-2 items-center w-full justify-end">
                <button
                  type="button"
                  className="rounded-full bg-dark-blue hover:bg-transparent hover:text-red-500 text-white hover:border-2 border-2 hover:border-led-500  font-bold py-2 px-4 "
                  onClick={() => {
                    setPopupForm(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-saffron hover:bg-dark-saffron rounded-full text-white font-bold py-2 px-4 mr-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
        {/* profile start here */}

        <div className="flex flex-col items-start  py-2 bg-dark-blue text-white">
          <div className="flex w-full flex-col gap-1">
            <span className="ps-3 text-saffron font-bold">Profile</span>
            <span className="border-b-2 ps-0 border-saffron w-full"></span>
          </div>
          {/* avatar */}
          <div className="flex items-center gap-5 justify-center p-5">
            <img
              className="w-28 h-28 overflow-hidden rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkN9BY5gyMxjAxe5I3SbK0L_EJf8t-TtE4fJwH_JpMKQ&s"
              alt=""
            />
            <div className="flex flex-col">
              <p className="font-bold text-white text-xl">Samir</p>
              <p className="text-[12px] font-bold">
                Member since: <span className="font-light">Aug 28, 2023</span>
              </p>
            </div>
          </div>

          <div className="flex md:flex-row pb-5  container flex-col items-start md:items-center  gap-5 justify-center md:justify-between">
            <div className=" pl-2 text-sm">
              <p>
                ADDRESS AND PHONE NUMBER{" "}
                <button
                  className="text-saffron font-bold cursor-pointer"
                  onClick={() => setPopupForm(true)}
                >
                  (Click here to enter)
                </button>
              </p>
            </div>
            <div className="md:border-l pl-2 text-sm">
              <p className="w-full text-start">
                PRIMARY EMAIL
                <Link
                to={'/change-email'}
                  className="text-saffron font-bold cursor-pointer"
                  
                >
                  (Change)
                </Link>
                <br />
                ansari131211@gmail.com
                <span
                  className="text-saffron font-bold cursor-pointer"
                  onClick={() => setPopupForm(true)}
                >
                  (Confirm)
                </span>
              </p>
            </div>
            <div className="md:border-l pl-2 text-sm">
              <p>
                PASSWORD
                <button
                  className="text-saffron font-bold"
                  onClick={() => setPopupForm(true)}
                >
                  (Click here to enter)
                </button>
                <br />
                ********
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start  py-2 bg-gray-50">
          <div className="flex w-full flex-col gap-1">
            <span className="ps-3 capitalize text-saffron font-bold">
              Two-Factor Authentication
            </span>
            <span className="border-b-2 ps-0 border-saffron w-full"></span>
          </div>
          <div className="flex gap-5 w-full  p-5 justify-start ">
            <div className="flex flex-col gap-3 w-1/2">
              <p className="text-[12px] text-gray-500">
                Two-factor authentication requires anyone who tries to log into
                your account to have two things: an access code from text or
                email, where Helium 10 sends you a code, or from an
                authentication app (like Google Authenticator, Microsoft
                Authenticator, AWS Virtual MFA) and your password.
              </p>
              <p className="text-[12px] text-gray-500">
                You will put in your access code after submitting your email and
                password to log in. You can only use one method for two-factor
                authentication.
              </p>
            </div>
            <p className=" rounded-full bg-saffron w-[1px]"></p>
            <div className="flex flex-col gap-3">
              <p className="text-dark-blue font-bold capitalize">
                Select your two-factor authentication method:
              </p>
              <label
                className="text-sm flex items-center gap-1"
                htmlFor="message"
              >
                <input
                  className="accent-dark-blue w-4 h-4 "
                  type="radio"
                  name="select"
                  id="message"
                />
                Text Message
              </label>
              <label
                className="text-sm flex items-center gap-1"
                htmlFor="Email"
              >
                <input
                  className="accent-dark-blue w-4 h-4 "
                  type="radio"
                  name="select"
                  id="Email"
                />
                Email
              </label>
              <label
                className="text-sm flex items-center gap-1"
                htmlFor="Authenticator"
              >
                <input
                  className="accent-dark-blue w-4 h-4 "
                  type="radio"
                  name="select"
                  id="Authenticator"
                />
                Authenticator App
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start  py-2 bg-gray-50">
          <div className="flex w-full flex-col gap-1">
            <div className="flex items-center justify-between">
              <p className="ps-2 text-saffron font-bold">Sessions</p>
              <button className="rounded-full py-1 mr-2 px-3 text-sm border-2 bg-saffron text-white border-saffron hover:bg-transparent hover:text-saffron">
                Log out all session except me
              </button>
            </div>
            <span className="border-b-2 ps-0 border-saffron w-full"></span>
          </div>

          <div className="relative overflow-x-auto w-full">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Color
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b  ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Apple MacBook Pro 17"
                  </th>
                  <td className="px-6 py-4">Silver</td>
                  <td className="px-6 py-4">Laptop</td>
                  <td className="px-6 py-4">$2999</td>
                </tr>
                <tr className="bg-white border-b  ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Microsoft Surface Pro
                  </th>
                  <td className="px-6 py-4">White</td>
                  <td className="px-6 py-4">Laptop PC</td>
                  <td className="px-6 py-4">$1999</td>
                </tr>
                <tr className="bg-white ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Magic Mouse 2
                  </th>
                  <td className="px-6 py-4">Black</td>
                  <td className="px-6 py-4">Accessories</td>
                  <td className="px-6 py-4">$99</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <PrivacyPolicy />
      <ChatBoat />
    </>
  );
};

export default Profile;
