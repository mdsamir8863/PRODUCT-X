import { useState } from "react";
import ChatBoat from "../../components/ChatBoat";
import { Link } from "react-router-dom";

const SalesVolume = () => {
  const [allowNext, setAllowNext] = useState();

  const [clickedButton, setClickedButton] = useState("");

  const btnDetails = [
    {
      id: "1",
      content: "Less than $10K",
    },
    {
      id: "2",
      content: "$10,000-$49,999",
    },
    {
      id: "3",
      content: "$50,000-$99,999",
    },
    {
      id: "4",
      content: "More than $100K",
    },
  ];

  const handleButtonClick = (type) => {
    setClickedButton(type);
  };

  return (
    <>
      <section className="flex w-full justify-between items-center">
        <div className="flex flex-col gap-5 p-5 md:w-3/5 w-full">
          <h1 className="font-bold text-dark-blue text-3xl">
            {" "}
            No worries! You can connect your Amazon account to Product X at any
            time.
          </h1>
          <p className="text-gray-500">
            In the meantime, can you tell us a little more about your business?
          </p>
          <p className=" font-bold text-dark-blue">
            What is your sales volume in a typical month?
          </p>
          {btnDetails.map(({ id, content }) => {
            const isActive = clickedButton === content;
            return (
              <button
                key={id}
                className={`border rounded-full py-2 text-sm px-4  text-start w-full md:w-[18rem]  ${
                  isActive
                    ? "bg-saffron text-white"
                    : "text-gray-500 hover:border-saffron"
                }`}
                onClick={() => handleButtonClick(content)}
              >
                {content}
              </button>
            );
          })}
          <div className="flex justify-end w-full border-b-0 border-l-0 border-r-0 border-t-2">
            <Link
              to={"/pricing"}
              className=" bg-saffron  hover:bg-dark-saffron text-white rounded-full px-5 mt-2 py-2"
            >
              Next
            </Link>
          </div>
        </div>
        <div className="md:w-2/5 hidden ml-5 md:flex items-end justify-end border mr-3 p-2">
          <img
            className="h-[90vh] w-full float-right"
            src="https://re-cdn.helium10.com/container/static/infoStep-itaONKiy.png"
            alt=""
          />
        </div>
        <ChatBoat />
      </section>
    </>
  );
};

export default SalesVolume;
