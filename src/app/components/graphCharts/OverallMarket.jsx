import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Price from "./Price";
import Revenue from "./Revenue";
import Units from "./Units";
import Products from "./Products";
import Brands from "./Brands";
import Sellers from "./Sellers";
import Select from "react-select";

const groupBy = [
  { value: "None", label: "None" },
  { value: "Product", label: "Product" },
  { value: "Brand", label: "Brand" },
  { value: "Me vs. Competitors", label: "Me vs. Competitors" },
  { value: "Seller type", label: "Seller type" },
];
const SelectYear = [
  { value: "Year over Year", label: "Year over Year" },
  { value: "Month over Month", label: "Month over Month" },
  { value: "Week over Week", label: "Week over Week" },
];

const OverallMarket = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedOpt1, setSelectedOpt1] = useState(null);
  const [selectedOpt2, setSelectedOpt2] = useState(null);
  const [groupBtn1, setGroupBtn1] = useState("W");
  const [groupBtn2, setGroupBtn2] = useState("G1");
  const [groupBtn3, setGroupBtn3] = useState("$");
  const [revenueData, setRevenueData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    revenue: [1000, 1500, 1200, 1800, 2000, 2500], // Example revenue data
  });
  const [unitsData, setUnitsData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    units: [50, 60, 55, 70, 75, 80],
  });
  const [productsData, setProductsData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    products: [50, 60, 55, 70, 75, 80],
  });
  const [brandsData, setBrandsData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    brands: [50, 60, 55, 70, 75, 80],
  });
  const [sellersData, setSellersData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    sellers: [50, 60, 55, 70, 75, 80],
  });
  const [priceData, setPriceData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    price: [50, 60, 55, 70, 75, 80],
  });

  const handleGroupBtn1 = (value) => {
    setGroupBtn1(value);
  };
  const handleGroupBtn2 = (value) => {
    setGroupBtn2(value);
  };
  const handleGroupBtn3 = (value) => {
    setGroupBtn3(value);
  };

  const handleSelected = (selectedOpt1) => {
    setSelectedOpt1(selectedOpt1);
  };
  const handleSelected2 = (selectedOpt2) => {
    setSelectedOpt2(selectedOpt2);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  useEffect(() => {
    setActiveTab("Revenue");
  }, []);
  return (
    <section className="flex items-start  flex-col border m-3 p-3 rounded-md my-10">
      <nav className="flex flex-col gap-5 items-start justify-between bg-white border-b-2 pb-2 mb-3 w-full">
        <div className="flex flex-col items-start flex-shrink-0 ">
          <p className="font-bold text-xl tracking-tight text-dark-blue">
            Overall Market
          </p>
          <p className="text-gray-400 text-sm">Sep 01, 2023 - Feb 29, 2024</p>
        </div>
        <div className="flex flex-wrap items-start py-2 gap-1 w-full">
          <Link
            // to={"/revenue"}
            className={`text-dark-blue rounded-full text-sm py-1 border-2 px-3  hover:border-saffron ${
              activeTab === "Revenue"
                ? " shadow-md shadow-saffron border-2  border-saffron"
                : ""
            }`}
            onClick={() => handleTabClick("Revenue")}
          >
            Revenue
          </Link>
          <Link
            // to={"/units"}
            className={`text-dark-blue rounded-full text-sm py-1 border-2 px-3   hover:border-saffron ${
              activeTab === "Units"
                ? " shadow-md shadow-saffron border-2  border-saffron"
                : ""
            }`}
            onClick={() => handleTabClick("Units")}
          >
            Units
          </Link>
          <Link
            // to={"/products"}
            className={`text-dark-blue    rounded-full text-sm py-1 border-2 px-3   hover:border-saffron ${
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
            className={`text-dark-blue    rounded-full text-sm py-1 border-2 px-3   hover:border-saffron ${
              activeTab === "Brands"
                ? " shadow-md  shadow-saffron border-2  border-saffron"
                : ""
            }`}
            onClick={() => handleTabClick("Brands")}
          >
            Brands
          </Link>
          <Link
            // to={"/sellers"}
            className={`text-dark-blue    rounded-full text-sm py-1 border-2 px-3   hover:border-saffron ${
              activeTab === "Sellers"
                ? " shadow-md  shadow-saffron border-2  border-saffron"
                : ""
            }`}
            onClick={() => handleTabClick("Sellers")}
          >
            Sellers
          </Link>
          <Link
            // to={"/price"}
            className={`text-dark-blue    rounded-full text-sm py-1 border-2 px-3   hover:border-saffron ${
              activeTab === "Price"
                ? " shadow-md  shadow-saffron border-2  border-saffron"
                : ""
            }`}
            onClick={() => handleTabClick("Price")}
          >
            Price
          </Link>
        </div>
      </nav>
      <div className="flex w-full items-center justify-start gap-4 md:flex-row flex-col md:justify-between my-5 mb-8">
        {/* left side */}
        <div className="flex w-full items-center justify-start gap-4 md:flex-row flex-col">
          {" "}
          <Select
            value={selectedOpt1}
            onChange={handleSelected}
            options={groupBy}
            placeholder="Group By"
            className="md:w-64 w-full"
            styles={{
              control: (provided) => ({
                ...provided,
                border: "1px solid #FF9933",
                borderRadius: "0.375rem",
              }),
              indicatorSeparator: () => ({}),
              clearIndicator: () => ({}),
              dropdownIndicator: () => ({}),
              singleValue: (provided) => ({
                ...provided,
                position: "relative",
              }),
              menu: (provided) => ({
                ...provided,
                border: "1px solid #FF9933",
                borderRadius: "0.375rem",
              }),
              option: (provided, { isFocused }) => ({
                ...provided,
                backgroundColor: isFocused ? "#FF9933" : "white",
                color: isFocused ? "#ffffff" : "black",

                "&:hover": {
                  backgroundColor: "#FF9933",
                },
              }),
            }}
          />
          <Select
            value={selectedOpt2}
            onChange={handleSelected2}
            options={SelectYear}
            placeholder="Historical Comparison"
            // isClearable
            className="md:w-64 w-full"
            styles={{
              control: (provided) => ({
                ...provided,
                border: "1px solid #FF9933",
                borderRadius: "0.375rem",
              }),
              indicatorSeparator: () => ({}),
              clearIndicator: () => ({}),
              dropdownIndicator: () => ({}),
              singleValue: (provided) => ({
                ...provided,
                position: "relative",
              }),
              menu: (provided) => ({
                ...provided,
                border: "1px solid #FF9933",
                borderRadius: "0.375rem",
              }),
              option: (provided, { isFocused }) => ({
                ...provided,
                backgroundColor: isFocused ? "#FF9933" : "white",
                color: isFocused ? "#ffffff" : "black",

                "&:hover": {
                  backgroundColor: "#FF9933",
                },
              }),
            }}
          />
        </div>
        {/* right side */}
        <div className="flex  items-center md:justify-end justify-between w-full gap-2 md:gap-4">
          <div className="flex gap-1 bg-dark-blue text-white rounded-full p-1 border">
            <button
              className={`w-6 h-6 text-sm font-bold rounded-full  transition-all duration-300 ${
                groupBtn1 === "W"
                  ? "bg-saffron border"
                  : " hover:border-saffron border"
              }`}
              onClick={() => handleGroupBtn1("W")}
            >
              W
            </button>
            <button
              className={`w-6 h-6 text-sm font-bold rounded-full  transition-all duration-300 ${
                groupBtn1 === "M"
                  ? "bg-saffron border"
                  : " hover:border-saffron border"
              }`}
              onClick={() => handleGroupBtn1("M")}
            >
              M
            </button>
            <button
              className={`w-6 h-6 text-sm font-bold  rounded-full transition-all duration-300 ${
                groupBtn1 === "Y"
                  ? "bg-saffron border"
                  : " hover:border-saffron border"
              }`}
              onClick={() => handleGroupBtn1("Y")}
            >
              Y
            </button>
          </div>
          <div className="w-0 h-7 border "></div>
          <div className="flex gap-1 bg-dark-blue text-white rounded-full p-1 border">
            <button
              className={`w-6 h-6 text-sm font-bold rounded-full  transition-all duration-300 ${
                groupBtn2 === "G1"
                  ? "bg-saffron border"
                  : " hover:border-saffron border"
              }`}
              onClick={() => handleGroupBtn2("G1")}
            >
              G1
            </button>
            <button
              className={`w-6 h-6 text-sm font-bold rounded-full  transition-all duration-300 ${
                groupBtn2 === "G2"
                  ? "bg-saffron border"
                  : " hover:border-saffron border"
              }`}
              onClick={() => handleGroupBtn2("G2")}
            >
              G2
            </button>
            <button
              className={`w-6 h-6 text-sm font-bold  rounded-full transition-all duration-300 ${
                groupBtn2 === "G3"
                  ? "bg-saffron border"
                  : " hover:border-saffron border"
              }`}
              onClick={() => handleGroupBtn2("G3")}
            >
              G3
            </button>
          </div>
          <div className="w-0 h-7 border "></div>
          <div className="flex gap-1 bg-dark-blue text-white rounded-full p-1 border">
            <button
              className={`w-6 h-6 text-sm font-bold rounded-full  transition-all duration-300 ${
                groupBtn3 === "$"
                  ? "bg-saffron border"
                  : " hover:border-saffron border"
              }`}
              onClick={() => handleGroupBtn3("$")}
            >
              $
            </button>
            <button
              className={`w-6 h-6 text-sm font-bold rounded-full  transition-all duration-300 ${
                groupBtn3 === "%"
                  ? "bg-saffron border"
                  : " hover:border-saffron border"
              }`}
              onClick={() => handleGroupBtn3("%")}
            >
              %
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full border">
        {activeTab === "Revenue" && <Revenue data={revenueData} />}
      </div>
      <div className="flex w-full border">
        {activeTab === "Units" && <Units data={unitsData} />}
      </div>
      <div className="flex w-full border">
        {activeTab === "Products" && <Products data={productsData} />}
      </div>
      <div className="flex w-full border">
        {activeTab === "Brands" && <Brands data={brandsData} />}
      </div>
      <div className="flex w-full border">
        {activeTab === "Sellers" && <Sellers data={sellersData} />}
      </div>
      <div className="flex w-full border">
        {activeTab === "Price" && <Price data={priceData} />}
      </div>
    </section>
  );
};

export default OverallMarket;
