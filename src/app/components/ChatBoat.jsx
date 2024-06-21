import { useState } from "react";
import Logo from "../../assets/PRODUCT-X-2.png";
const ChatBoat = () => {
  const [openbox, setOpenbox] = useState(false);

  return (
    <>
      {openbox ? (
        <div
          className={` flex flex-col items-center w-80 rounded-lg h-fit pb-3 bg-white border shadow-lg fixed z-50 bottom-5 right-5 transition-opacity duration-300 ease-in-out ${
            openbox
              ? "opacity-100 translate-y-0"
              : "opacity-100 translate-y-full"
          }`}
        >
          <div className="w-full flex items-center px-2 justify-between bg-black py-3">
            <img className="w-16" src={Logo} alt="Logo" />

            <button
              className="text-white hover:text-gray-300 rounded-full"
              onClick={() => setOpenbox(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="chats  w-full flex flex-col items-start gap-1">
            <p className="text-dark-blue text-sm bg-white border p-2 ml-2 my-1 w-64 rounded rounded-tl-2xl shadow-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium, unde. A sapiente, nemo culpa non expedita eos odio
              ullam. Necessitatibus!
            </p>
            <p className="text-dark-blue text-sm bg-white border p-2 ml-2 my-1 w-64 rounded rounded-tl-2xl shadow-xl">
              Hello Sir !
            </p>
            <p className="text-dark-blue text-sm bg-white border p-2 ml-2 my-1 w-64 rounded rounded-tl-2xl shadow-xl">
              How I can help You ?
            </p>
            <p className="text-dark-blue text-sm bg-white border p-2 ml-2 my-1 w-64 rounded rounded-tl-2xl shadow-xl">
              Do You Need Any Help?
            </p>
          </div>
          <div className="flex items-center justify-around gap-1 border-t-2  w-full border-gray-600 pt-2 mt-2">
            <input
              id="text"
              className="border w-60 h-full text-sm rounded-full p-2 outline-none shadow-sm"
              type="text"
              placeholder="Please enter your Message"
            />
            <button className="uppercase flex items-center justify-center w-10 h-8 bg-saffron font-bold hover:bg-dark-saffron text-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <button
          className="button bg-yellow-500 text-white flex items-center justify-center shadow-lg shadow-black w-12 h-12 rounded-full fixed z-50 p-2 bottom-5 right-5 transform transition-transform duration-300 ease-in-out hover:scale-110"
          onClick={() => setOpenbox(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ChatBoat;
