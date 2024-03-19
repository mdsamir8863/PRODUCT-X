import React, { useEffect, useState } from "react";

const TestimonialSlider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Automatic slide every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <>
      <div className=" rounded-md overflow-hidden flex items-center justify-center ">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={` transition-opacity absolute w-full ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="bg-white w-full h-[20rem] md:h-[18rem] relative border-2 border-saffron flex flex-col items-start justify-start md:gap-4 gap-2  p-4 rounded-md shadow-md">
              <p className="text-lg border w-fit rounded-full p-1 text-saffron font-bold">
                {testimonial.brand}
              </p>
              <p className="text-lg">{testimonial.text}</p>
              <p className="mt-2 text-gray-600">{testimonial.author}</p>
            </div>
          </div>
        ))}
        <button
          onClick={prevSlide}
          className="absolute right-2 bottom-[17rem] md:bottom-24 cursor-pointer border hover:bg-saffron p-1 hover:text-white duration-300  rounded-full flex items-center justify-center"
        >
          <svg
            onClick={prevSlide}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 hover:bg-saffron hover:text-white cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-[2.5rem] bottom-[17rem] md:bottom-24 border hover:bg-saffron p-1 hover:text-white duration-300  rounded-full flex items-center justify-center"
        >
          <svg
            onClick={nextSlide}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 rounded-full hover:bg-saffron hover:text-white cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default TestimonialSlider;
