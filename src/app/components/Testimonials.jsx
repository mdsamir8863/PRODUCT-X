import { useEffect, useState } from "react";
import KeenSlider from "keen-slider";

const Testimonials = () => {
  const [slider, setSlider] = useState(null);

  useEffect(() => {
    const keenSlider = new KeenSlider("#keen-slider", {
      loop: true,
      slides: {
        origin: "center",
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 1024px)": {
          slides: {
            origin: "auto",
            perView: 2.5,
            spacing: 32,
          },
        },
      },
    });

    setSlider(keenSlider);

    const keenSliderPrevious = document.getElementById("keen-slider-previous");
    const keenSliderNext = document.getElementById("keen-slider-next");

    keenSliderPrevious.addEventListener("click", () => keenSlider.prev());
    keenSliderNext.addEventListener("click", () => keenSlider.next());

    // Cleanup function to remove event listeners
    return () => {
      keenSliderPrevious.removeEventListener("click", () => keenSlider.prev());
      keenSliderNext.removeEventListener("click", () => keenSlider.next());
    };
  }, []); // Empty dependency array ensures this effect runs only once after mounting

  useEffect(() => {
    if (slider) {
      slider.on("move", () => {
        if (slider.details().relativeSlide === slider.details().size - 1) {
          slider.moveToSlide(0);
        }
      });
    }
  }, [slider]);
  return (
    <>
      <section className="bg-gray-50 overflow-x-hidden border-2">
        <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
          <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8 ">
            <div className="flex flex-col gap-2">
              <h2 className="max-w-xl text-2xl font-bold tracking-tight text-dark-blue sm:text-2xl">
                Grow Your Amazon Business: Expand Your Product Catalog
              </h2>
              <p>
                We’ve analyzed your seller journey and identified the tools that
                will help skyrocket your success.
              </p>
            </div>

            <div className="mt-8 flex gap-4 lg:mt-0">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous"
                className="rounded-md-full border-2 px-3 py-1 hover:text-saffron border-saffron p-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                id="keen-slider-next"
                className="rounded-md-full border-2 px-3 py-1 hover:text-saffron border-saffron p-3  rounded-md "
              >
                <svg
                  className="size-5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
            <div id="keen-slider" className="keen-slider">
              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6  border rounded-md shadow-lg ">
                  <div>
                    <div className="flex items-center justify-center gap-0.5 text-saffron border-2 w-8 h-8 shadow border-saffron rounded-full ">
                      <p>1</p>
                    </div>

                    <div className="mt-2">
                      <p className="text-xl text-dark-blue font-bold  sm:text-xl">
                        Find Your Next Product
                      </p>

                      <p className="mt-2 leading-relaxed text-gray-700">
                        Choose a profitable product to sell by searching a
                        database of 450+ million Amazon products.
                      </p>
                    </div>
                  </div>

                  <footer className="mt-2 text-sm font-medium text-gray-700 sm:mt-6">
                    <button className="border-2 px-5 py-1 border-saffron rounded-md">
                      Open Black Box
                    </button>
                  </footer>
                </blockquote>
              </div>

              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm border rounded-md shadow-lg ">
                  <div>
                    <div className="flex gap-0.5 items-center justify-center text-saffron border-2 w-8 h-8 shadow border-saffron rounded-full ">
                      <p>2</p>
                    </div>

                    <div className="mt-2">
                      <p className="text-xl text-dark-blue font-bold sm:text-xl">
                        Research Competitors, Find Suppliers & Estimate
                        Profitability
                      </p>

                      <p className="mt-2 leading-relaxed text-gray-700">
                        Access powerful product research tools directly from
                        your browser. Find and analyze competitor listings to
                        ensure you take a lead in your niche.
                      </p>
                    </div>
                  </div>

                  <footer className="mt-2 text-sm font-medium text-gray-700 sm:mt-6">
                    <button className=" flex items-center justify-center gap-1 border-2 px-3 py-1 hover:text-saffron border-saffron rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                      Install the Chrome Extension
                    </button>
                  </footer>
                </blockquote>
              </div>

              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm border rounded-md shadow-lg ">
                  <div>
                    <div className="flex gap-0.5 items-center justify-center text-saffron border-2 w-8 h-8 shadow border-saffron rounded-full ">
                      <p>3</p>
                    </div>

                    <div className="mt-2">
                      <p className="text-xl text-dark-blue font-bold sm:text-xl">
                        Identify Top Performing Keywords
                      </p>

                      <p className="mt-2 leading-relaxed text-gray-700">
                        Select a Product ASIN to analyze and select the most
                        effective keywords for your products on Amazon and
                        Walmart.
                      </p>
                    </div>
                  </div>

                  <footer className="mt-2 text-sm font-medium text-gray-700 sm:mt-6">
                    <button className="border-2 px-3 py-1 hover:text-saffron border-saffron rounded-md">
                      Open Cerebro
                    </button>
                  </footer>
                </blockquote>
              </div>
              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm border rounded-md shadow-lg ">
                  <div>
                    <div className="flex gap-0.5 items-center justify-center text-saffron border-2 w-8 h-8 shadow border-saffron rounded-full ">
                      <p>4</p>
                    </div>

                    <div className="mt-2">
                      <p className="text-xl text-dark-blue font-bold sm:text-xl">
                        Evaluate and Improve Listing Performance
                      </p>

                      <p className="mt-2 leading-relaxed text-gray-700">
                        Analyze competitor listings to identify keyword
                        opportunities and listing best practices
                      </p>
                    </div>
                  </div>

                  <footer className="mt-2 text-sm font-medium text-gray-700 sm:mt-6">
                    <button className="border-2 px-3 py-1 hover:text-saffron border-saffron rounded-md">
                      Open Listing Analyzer
                    </button>
                  </footer>
                </blockquote>
              </div>
              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm border rounded-md shadow-lg ">
                  <div>
                    <div className="flex gap-0.5 items-center justify-center text-saffron border-2 w-8 h-8 shadow border-saffron rounded-full ">
                      <p>5</p>
                    </div>

                    <div className="mt-2">
                      <p className="text-xl text-dark-blue font-bold sm:text-xl">
                        Build Your Next Product Listing on Amazon
                      </p>

                      <p className="mt-2 leading-relaxed text-gray-700">
                        Create powerful, high-converting listings with ease.
                        Receive keyword suggestions to improve your rank.
                      </p>
                    </div>
                  </div>

                  <footer className="mt-2 text-sm font-medium text-gray-700 sm:mt-6">
                    <button className="border-2 px-3 py-1 hover:text-saffron border-saffron rounded-md">
                      Open Listing Builder
                    </button>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
