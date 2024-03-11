import { useState } from "react";
// import { Button } from "@/components/ui/button";
const Accordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="border" id="accordion-collapse" data-accordion="collapse">
        {[...Array(3)].map((_, index) => (
          <div key={index}>
            <h2 id={`accordion-collapse-heading-${index + 1}`}>
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl    hover:bg-gray-100 gap-3"
                data-accordion-target={`#accordion-collapse-body-${index + 1}`}
                aria-expanded={activeAccordion === index}
                aria-controls={`accordion-collapse-body-${index + 1}`}
                onClick={() => toggleAccordion(index)}
              >
                <span>{`Accordion Item ${index + 1}`}</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transform ${
                    activeAccordion === index ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id={`accordion-collapse-body-${index + 1}`}
              className={`${activeAccordion === index ? "block" : "hidden"}`}
              aria-labelledby={`accordion-collapse-heading-${index + 1}`}
            >
              <div className="p-5 border border-b-0 border-gray-200 ">
                <p className="mb-2 text-gray-500 ">
                  {`Content for Accordion Item ${index + 1}`}
                </p>
              </div>
            </div>
          </div>
        ))}
      {/* <Button>Click me</Button> */}
      </div>

    </>
  );
};

export default Accordion;
