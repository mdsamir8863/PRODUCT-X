import { useState } from "react";
import { countries } from "countries-list";

const Form = () => {
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
    // Add form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border w-1/2 bg-white p-5 mx-auto flex items-center flex-col relative"
    >
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

      <div className="mb-4">
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
              ? "animate-bounce border-2 border-red-600 rounded-full py-1 px-5"
              : "form-input border-2 border-dark-blue rounded-full py-1 px-5"
          }
          required
        />
      </div>
      <div className="mb-4">
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
              ? "animate-bounce animationDuration:'5s' border-2 border-red-600 rounded-full py-1 px-5"
              : "form-input border-2 border-dark-blue rounded-full py-1 px-5"
          }
          required
        />
      </div>
      <div className="mb-4">
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
              ? "animate-bounce animationDuration:'5s' border-2 border-red-600 rounded-full py-1 px-5"
              : "form-input border-2 border-dark-blue rounded-full py-1 px-5"
          }
          required
        />
      </div>
      <div className="mb-4">
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
              ? "animate-bounce animationDuration:'5s' border-2 border-red-600 rounded-full py-1 px-5"
              : "form-input border-2 border-dark-blue rounded-full py-1 px-5"
          }
          required
        />
      </div>
      <div className="mb-4">
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
              ? "animate-bounce animationDuration:'5s' border-2 border-red-600 rounded-full py-1 px-5"
              : "form-input border-2 border-dark-blue rounded-full py-1 px-5"
          }
          required
        />
      </div>
      <div className="mb-4">
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
              ? "animate-bounce animationDuration:'5s' border-2 border-red-600 rounded-full py-1 px-5"
              : "form-input border-2 border-dark-blue rounded-full py-1 px-5"
          }
          required
        >
          <option value="">Select Country</option>
          {Object.entries(countries).map(([code, country]) => (
            <option key={code} value={code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
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
              ? "animate-bounce animationDuration:'5s' border-2 border-red-600 rounded-full py-1 px-5"
              : "form-input border-2 border-dark-blue rounded-full py-1 px-5"
          }
          required
        />
      </div>
      <div className="mb-4 flex justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Submit
        </button>
        <button
          type="button"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={() => {
            // Add logic to handle cancel action here
            console.log("Cancelled");
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Form;
