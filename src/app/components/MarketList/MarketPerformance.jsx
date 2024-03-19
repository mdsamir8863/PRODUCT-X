import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MarketPerformance = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [btnColor, setBtnColor] = useState("");
  

  const handleButtonClick = (color) => {
    setBtnColor(color);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  useEffect(() => {
    setActiveTab("Products");
    setBtnColor("btn1");
  }, []);

  return (
    <section className="flex items-start  flex-col border m-3 p-3 rounded-md">
      <nav className="flex flex-col gap-5 items-start justify-between bg-white border-b border-dark-blue pb-2 mb-3">
        <div className="flex flex-col items-start flex-shrink-0 ">
          <p className="font-bold text-xl tracking-tight text-dark-blue">
            Market Performance
          </p>
          <p className="text-gray-400 text-sm">Sep 01, 2023 - Feb 29, 2024</p>
        </div>
        <div className="flex md:flex-row flex-col items-start gap-3 flex-shrink-0 ">
          <div className="w-full md:w-full border rounded-md border-saffron p-3">
            <p>
              consequatur reprehenderit itaque enim iure aperiam quia sequi
              consequatur reprehenderit itaque enim iure aperiam quia sequi
              consequatur reprehenderit itaque enim iure aperiam quia sequi
              consequatur reprehenderit itaque enim iure aperiam quia sequi
              consequatur reprehenderit itaque enim iure aperiam quia sequi
              debitis sit incidunt, unde vel blanditiis doloremque natus animi
            </p>
          </div>
          {/* Second box */}
          <div className="w-full md:w-1/2 border rounded-md border-saffron p-3">
            <p>
              Mollitia, ex architecto, libero maxime quasi accusantium
              consequatur reprehenderit itaque enim iure aperiam quia sequi
              debitis sit incidunt, unde vel blanditiis doloremque natus animi
            </p>
          </div>
          {/* Third box */}
          <div className="w-full md:w-1/2 border rounded-md border-saffron p-3">
            <p>
              Mollitia, ex architecto, libero maxime quasi accusantium
              consequatur reprehenderit itaque enim iure aperiam quia sequi
              debitis sit incidunt, unde vel blanditiis doloremque natus animi
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 justify-center">
          <Link
            // to={"/products"}
            className={`text-dark-blue    rounded-full text-sm py-1 border-2 px-3 hover:border-saffron ${
              activeTab === "Products"
                ? " shadow-md  shadow-saffron border-2  border-saffron"
                : ""
            }`}
            onClick={() => handleTabClick("Products")}
          >
            Products
          </Link>
          <Link
            // to={"/brands"}
            className={`text-dark-blue    rounded-full text-sm py-1 border-2 px-3 hover:border-saffron ${
              activeTab === "Brands"
                ? " shadow-md  shadow-saffron border-2  border-saffron"
                : ""
            }`}
            onClick={() => handleTabClick("Brands")}
          >
            Brands
          </Link>
          <Link
            // to={"/categories"}
            className={`text-dark-blue    rounded-full text-sm py-1 border-2 px-3 hover:border-saffron ${
              activeTab === "Categories"
                ? " shadow-md  shadow-saffron border-2  border-saffron"
                : ""
            }`}
            onClick={() => handleTabClick("Categories")}
          >
            Categories
          </Link>
        </div>
      </nav>
      <div className="flex items-center gap-5 mb-4">
        <button
          onClick={() => handleButtonClick("btn1")}
          className={`border py-1 px-3  text-sm rounded-full border-dark-blue  ${
            btnColor === "btn1"
              ? "bg-dark-blue shadow-md text-white duration-200 "
              : ""
          }`}
        >
          Top 5 Brands
        </button>
        <button
          onClick={() => handleButtonClick("btn2")}
          className={`border py-1 px-2 text-sm rounded-full border-dark-blue  ${
            btnColor === "btn2"
              ? "bg-dark-blue shadow-md text-white duration-200 "
              : ""
          }`}
        >
          Fastest Growing
        </button>
        <button
          onClick={() => handleButtonClick("btn3")}
          className={`border py-1 px-2 text-sm rounded-full border-dark-blue  ${
            btnColor === "btn3"
              ? "bg-dark-blue shadow-md text-white duration-200 "
              : ""
          }`}
        >
          Top Declining
        </button>
      </div>

      <div className="relative flex md:flex-row w-full flex-col mt- overflow-x-auto">
        <table className="w-full md:w-1/2 border text-sm text-left rtl:text-right text-dark-blue ">
          <thead className="text-xs   dark:text-gray-400">
            <p className="text-dark-blue w-fit py-3 font-bold pl-2 text-xl">
              Revenue
            </p>
            <tr className="bg-dark-blue text-saffron">
              <th scope="col" className="pl-3">
                Rank
              </th>
              <th scope="col" className="px-0 py-3">
                Brand
              </th>
              <th scope="col" className="px-0 py-3">
                Change
              </th>
              <th scope="col" className="px-0 py-3">
                Growth
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white ">
              <th
                scope="row"
                className="pl-6 w-2 py-4 px-0 font-medium  whitespace-nowrap "
              >
                1
              </th>
              <td className=" py-4 px-0">Silver</td>
              <td className=" py-4 px-0">Laptop</td>
              <td className=" py-4 px-0">$2999</td>
            </tr>
            <tr className="bg-white ">
              <th
                scope="row"
                className="pl-6 w-2 py-4 px-0 font-medium  whitespace-nowrap "
              >
                2
              </th>
              <td className=" py-4 px-0">White</td>
              <td className=" py-4 px-0">Laptop PC</td>
              <td className=" py-4 px-0">$1999</td>
            </tr>
            <tr className="bg-white ">
              <th
                scope="row"
                className="pl-6 w-2 py-4 px-0 font-medium  whitespace-nowrap "
              >
                3
              </th>
              <td className=" py-4 px-0">Black</td>
              <td className=" py-4 px-0">Accessories</td>
              <td className=" py-4 px-0">$99</td>
            </tr>
          </tbody>
        </table>
        <div className="border w-0  "></div>
        <table className="w-full md:w-1/2 border text-sm text-left rtl:text-right text-dark-blue ">
          <thead className="text-xs   dark:text-gray-400">
            <p className="text-dark-blue w-fit py-3 font-bold pl-2 text-xl">
              Revenue
            </p>
            <tr className="bg-dark-blue text-saffron">
              <th scope="col" className="pl-3">
                Rank
              </th>
              <th scope="col" className="px-0 py-3">
                Brand
              </th>
              <th scope="col" className="px-0 py-3">
                Change
              </th>
              <th scope="col" className="px-0 py-3">
                Growth
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white ">
              <th
                scope="row"
                className="pl-6 w-2 py-4 px-0 font-medium  whitespace-nowrap "
              >
                1
              </th>
              <td className=" py-4 px-0">Silver</td>
              <td className=" py-4 px-0">Laptop</td>
              <td className=" py-4 px-0">$2999</td>
            </tr>
            <tr className="bg-white ">
              <th
                scope="row"
                className="pl-6 w-2 py-4 px-0 font-medium  whitespace-nowrap "
              >
                2
              </th>
              <td className=" py-4 px-0">White</td>
              <td className=" py-4 px-0">Laptop PC</td>
              <td className=" py-4 px-0">$1999</td>
            </tr>
            <tr className="bg-white ">
              <th
                scope="row"
                className="pl-6 w-2 py-4 px-0 font-medium  whitespace-nowrap "
              >
                3
              </th>
              <td className=" py-4 px-0">Black</td>
              <td className=" py-4 px-0">Accessories</td>
              <td className=" py-4 px-0">$99</td>
            </tr>
          </tbody>
        </table>
      </div>
     
    </section>
  );
};

export default MarketPerformance;
