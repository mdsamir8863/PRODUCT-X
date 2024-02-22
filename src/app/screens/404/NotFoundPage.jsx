import PrivacyPolicy from "../../components/PrivacyPolicy";
import NotFountImg from "../../../assets/404-page-animation-example.gif";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div
      className="bg-gray-100 h-screen flex flex-col justify-center items-center bg-cover w-full "
      style={{
        backgroundImage: `url(${NotFountImg})`,
        backgroundPosition: "center",
      }}
    >
      <div className="text-center backdrop-blur-sm py-10 h-full w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Oops! Page not found!
        </h1>
        <p className="text-gray-600 mb-8">
          We are very sorry for the inconvenience. It looks like you&apos;re
          trying to access a page that has been deleted or never even existed.
        </p>
        <Link
          to={"/"}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          BACK TO HOME
        </Link>
      </div>
      <PrivacyPolicy />
    </div>
  );
};

export default NotFoundPage;
