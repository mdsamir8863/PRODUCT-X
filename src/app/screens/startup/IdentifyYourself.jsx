import { useState } from "react";
import ChatBoat from "../../components/ChatBoat";

const IdentifyYourself = () => {
  const [allowNext, setAllowNext] = useState();
  
  const [clickedButton, setClickedButton] = useState("");

  const btnDetails = [
    {
      id: "1",
      type: "Seller",
      content: "I currently sell on Amazon.",
    },
    {
      id: "2",
      type: "Brand",
      content:
        "I sell on my brand’s website, multiple e-commerce platforms (e.g. Amazon, Walmart, Instacart, Target), and/or direct to retailers.",
    },
    {
      id: "3",
      type: "Agency",
      content:
        "I work with multiple brands that sell on Amazon within an agency.",
    },
    {
      id: "4",
      type: "Consultant",
      content:
        "I work as a consultant to support multiple brands that sell on Amazon.",
    },
    {
      id: "5",
      type: "Aggregator",
      content: "I work for a company that acquires brands that sell on Amazon.",
    },
    {
      id: "6",
      type: "New",
      content: "I have not started selling on Amazon yet.",
    },
  ];

  const handleButtonClick = (type) => {
    setClickedButton(type);
  };

  return (
    <>
      <section className="flex w-full justify-between items-center">
        <div className="flex flex-col items-start w-full gap-4 md:ms-10 p-3 md:w-[575px]">
          <h1 className="font-bold text-dark-blue text-3xl">Welcome Samir!</h1>
          <p className="text-gray-500">
            Before you get started, we have a few questions that will help us
            customize your Helium 10 journey.
          </p>
          <p className="font-medium text-dark-blue">
            How would you identify yourself?
          </p>
          {btnDetails.map(({ id, type, content }) => {
            const isActive = clickedButton === type;
            return (
              <button
                key={id}
                className={`border rounded-full py-4 text-sm px-3 w-full text-left md:w-[475px] ${
                  isActive
                    ? "bg-saffron text-white"
                    : "text-gray-500 hover:border-saffron"
                }`}
                onClick={() => handleButtonClick(type)}
              >
                <span className="font-medium">{type}: </span> {content}
              </button>
            );
          })}
          <div className="flex justify-end w-full border-b-0 border-l-0 border-r-0 border-t-2">
            <button className=" bg-saffron  hover:bg-dark-saffron text-white rounded-full px-5 mt-2 py-2">
              Next
            </button>
          </div>
        </div>
        <div className=" md:flex hidden w-[475px] border">
          <img
            className="h-fit w-[475px]  m-auto mr-0"
            src="https://re-cdn.helium10.com/container/static/welcomeStep-O5pZu4Nh.png"
            alt=""
          />
        </div>
        <ChatBoat />
      </section>
    </>
  );
};

export default IdentifyYourself;
