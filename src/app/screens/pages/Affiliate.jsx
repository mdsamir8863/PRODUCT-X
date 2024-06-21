import { useState } from "react";

const faqs = [
  {
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "Why do we use it?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    question: "Where does it come from?",
    answer:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    question: "Where can I get some?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
  },
];

const Affiliate = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const handleMouseEnter = (e) => {
    e.target.classList.remove(
      "from-saffron",
      "to-dark-saffron",
      "transition-all",
      "duration-300"
    );
    e.target.classList.add(
      "from-dark-saffron",
      "to-saffron",
      "transition-all",
      "duration-300"
    );
  };

  const handleMouseLeave = (e) => {
    e.target.classList.remove(
      "from-dark-saffron",
      "to-saffron",
      "transition-all",
      "duration-300"
    );
    e.target.classList.add(
      "from-saffron",
      "to-dark-saffron",
      "transition-all",
      "duration-300"
    );
  };
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-3 pt-5 mx-auto w-full">
        <p className="font-bold text-center">
          WELCOME TO THE
          <span className="text-dark-blue">PRODUCT-X AFFILIATE PROGRAM</span>
        </p>
        <h1 className="text-3xl font-bold text-center">
          The e-commerce software that converts
        </h1>
        <p className="text-center">
          We Pay <strong>25% Lifetime</strong> Commissions For Every Conversion
          You Make So That Means You Get Paid Every Month.
        </p>
        <a
          className="rounded-full p-3 px-10 text-center text-white transition-all font-bold duration-300 ease-in-out bg-gradient-to-r from-saffron to-dark-saffron"
          href="https://youtu.be/ea94nqoxnVQ?si=VemJlCvedQ7SIdnL"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Yes, I want to Sign Up
        </a>

        <img
          src="https://pages.helium10.com/hosted/images/f5/f9b0d9367346fabc6a5bc330b32267/bbl_registration_BBL_landing-page_Hero-Graphic.png"
          alt="Moving Image"
          className="w-[10rem]"
        />
        <div className="flex items-center flex-col p-3 gap-3 justify-center sm:grid sm:grid-cols-2 md:grid-cols-3">
          <div className="border flex flex-col items-center justify-center gap-2 p-3 rounded">
            <img
              className="w-16"
              src="https://pages.helium10.com/hosted/images/59/cceac6c5fe44bf9060d644573315e7/Affiliate-3-Icons-for-Landing-Page-epic_bonus.png"
              alt=""
            />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </div>
          <div className="border flex flex-col items-center justify-center gap-2 p-3 rounded">
            <img
              className="w-16"
              src="https://pages.helium10.com/hosted/images/16/23a3f13d6a4bacb9e41af70c079605/cash.png"
              alt=""
            />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </div>
          <div className="border flex flex-col items-center justify-center gap-2 p-3 rounded">
            <img
              className="w-16"
              src="https://pages.helium10.com/hosted/images/fd/e962897ddb4b4bb0ac4b8af6b69b3d/Affiliate-3-Icons-for-Landing-Page-dream_car_1.png"
              alt=""
            />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </div>
        </div>

        <div className="flex items-center justify-between md:flex-row flex-col w-full p-5 my-5">
          <div className="flex flex-col items-start gap-5 w-full md:w-2/5 mb-5">
            <p className="text-black text-3xl">
              Here’s a Partnership Where Everyone Wins
            </p>
            <p className="text-sm text-gray-600">
              You’ll be rewarded handsomely when you work with Helium 10 to
              promote our brand to potential new users.
            </p>
            <p className="text-sm text-gray-600">
              Signing up with Helium 10 & CrushIt.online quick and easy, and
              just takes a few moments
            </p>
            <a
              className="rounded-full p-3 px-10 text-center text-white transition-all font-bold duration-300 ease-in-out bg-gradient-to-r from-saffron to-dark-saffron"
              href="https://youtu.be/ea94nqoxnVQ?si=VemJlCvedQ7SIdnL"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Yes, I want to Sign Up
            </a>
          </div>
          <div className="hidden flex-col md:flex items-center justify-start gap-3">
            <img
              className="w-16"
              src="https://assets.website-files.com/5f45ba2251b7fc712bd7eca6/5f46d8155f0cef49a80f1b78_apply-icon.svg"
              alt=""
            />
            <img
              src="https://assets.website-files.com/5f45ba2251b7fc712bd7eca6/5f46d814c9429d969d25ba38_divider-get-started.svg"
              alt=""
            />
            <img
              className="w-16"
              src="https://assets.website-files.com/5f45ba2251b7fc712bd7eca6/5f46d815ca921285fc114a95_get-link-icon.svg"
              alt=""
            />
            <img
              src="https://assets.website-files.com/5f45ba2251b7fc712bd7eca6/5f46d814c9429d969d25ba38_divider-get-started.svg"
              alt=""
            />
            <img
              className="w-16"
              src="https://assets.website-files.com/5f45ba2251b7fc712bd7eca6/5f46d814908e3a04a02188c9_earn-icon.svg"
              alt=""
            />
          </div>
          <div className="flex flex-col items-start gap-10 md:gap-5 w-full md:w-2/5">
            <div className="flex flex-col gap-2">
              <p className="text-black text-2xl">
                Promote Helium 10 to Your Audience
              </p>
              <p className="text-sm text-gray-600">
                Create content around Helium 10 to educate your audience on the
                value of Helium 10. It can be anything: a YouTube video, blog
                post, email, TikTok video – we welcome all types of content! And
                we’ll help you create your content as well with our marketing
                resources and access to Helium 10 experts, brand evangelists,
                and free training
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-black text-2xl">
                Make 25% Lifetime Commission on Every Conversion
              </p>
              <p className="text-sm text-gray-600">
                As you create content on a consistent basis, you’re bound to get
                some conversions! And guess what, we pay a 25% lifetime
                commission on every new paid user you bring to Helium 10. This
                isn’t a 1x commission! You’re going to get paid every single
                month for the lifetime of a subscription!
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-black text-2xl">
                The Sky’s The Limit for Your Success
              </p>
              <p className="text-sm text-gray-600">
                Create content around Helium 10 to educate your audience on the
                value of Helium 10. It can be anything: a YouTube video, blog
                post, email, TikTok video – we welcome all types of content! And
                we’ll help you create your content as well with our marketing
                resources and access to Helium 10 experts, brand evangelists,
                and free training
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-black text-2xl">
                Promote Helium 10 to Your Audience
              </p>
              <p className="text-sm text-gray-600">
                Create content around Helium 10 to educate your audience on the
                value of Helium 10. It can be anything: a YouTube video, blog
                post, email, TikTok video – we welcome all types of content! And
                we’ll help you create your content as well with our marketing
                resources and access to Helium 10 experts, brand evangelists,
                and free training
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 bg-gray-100 my-5 py-5">
          <p className="sm:text-4xl text-xl text-center font-bold">
            Who Can Be A Helium 10 Affiliate? Anybody!
          </p>
          <p className="text-dark-blue uppercase font-bold ">
            OUR PARTNER FAMILY INCLUDES:
          </p>
          <div className="flex items-center flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 md:flex-row justify-center gap-4 p-5">
            <div className="flex flex-col items-start justify-center gap-3 border border-saffron rounded hover:scale-95 duration-200 p-3">
              <img
                className="w-[15rem] mx-auto sm:w-full"
                src="https://pages.helium10.com/hosted/images/79/704119a8774a159a43a604dba025c1/1.png"
                alt=""
              />
              <p className="font-bold text-xl">Content Creators</p>
              <p className="text-gray-600 text-sm">
                Leverage your YouTube Channel, Blog, or Newsletter to promote
                Helium 10 to your audience and unlock a proven side income.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-3 border border-saffron rounded hover:scale-95 duration-200 p-3">
              <img
                className="w-[15rem] mx-auto sm:w-full"
                src="https://pages.helium10.com/hosted/images/fd/016ee4ff1545fcb477951688e0c9ac/0.png"
                alt=""
              />
              <p className="font-bold text-xl">Content Creators</p>
              <p className="text-gray-600 text-sm">
                Leverage your YouTube Channel, Blog, or Newsletter to promote
                Helium 10 to your audience and unlock a proven side income.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-3 border border-saffron rounded hover:scale-95 duration-200 p-3">
              <img
                className="w-[15rem] mx-auto sm:w-full"
                src="https://pages.helium10.com/hosted/images/93/8ced3e0a5e491eb00d42ace667877c/2.png"
                alt=""
              />
              <p className="font-bold text-xl">Content Creators</p>
              <p className="text-gray-600 text-sm">
                Leverage your YouTube Channel, Blog, or Newsletter to promote
                Helium 10 to your audience and unlock a proven side income.
              </p>
            </div>
          </div>
          <a
            className="rounded-full p-3 px-10 text-center text-white transition-all font-bold duration-300 ease-in-out bg-gradient-to-r from-saffron to-dark-saffron"
            href="https://youtu.be/ea94nqoxnVQ?si=VemJlCvedQ7SIdnL"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Yes, I want to Sign Up
          </a>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 mt-5 bg-gray-50 p-5">
          <p className="text-dark-blue font-bold uppercase text-center">
            HELIUM 10 AFFILIATE PROGRAM BENEFITS
          </p>
          <p className="md:text-4xl text-2xl font-bold text-center">
            It Pays To Be A Helium 10 Affiliate + BONUSES & More
          </p>
          <div className="flex md:flex-row flex-col gap-5 w-full">
            <img
              className="w-[18rem] mx-auto my-5 md:w-2/6"
              src="https://pages.helium10.com/hosted/images/04/6bad1b8c8646a5a090a07e9eacf817/H10_2MM_CF_Graphic_01_150ppi.png"
              alt=""
            />
            <div className="grid sm:grid-cols-2">
              <div className="flex items-start gap-5 sm:m-5 my-4 ">
                <img
                  className="w-[2rem]"
                  src="https://www.sendinblue.com/wp-content/uploads/2020/04/check-3.svg"
                  alt=""
                />
                <div className="">
                  <p className="font-bold text-lg">Get Paid Every Month</p>
                  <p className="text-gray-600">
                    Unlock 25% Lifetime Commissions with every conversion you
                    make for Helium 10.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5 sm:m-5 my-4 ">
                <img
                  className="w-[2rem]"
                  src="https://www.sendinblue.com/wp-content/uploads/2020/04/check-3.svg"
                  alt=""
                />
                <div className="">
                  <p className="font-bold text-lg">Get Paid Every Month</p>
                  <p className="text-gray-600">
                    Unlock 25% Lifetime Commissions with every conversion you
                    make for Helium 10.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5 sm:m-5 my-4 ">
                <img
                  className="w-[2rem]"
                  src="https://www.sendinblue.com/wp-content/uploads/2020/04/check-3.svg"
                  alt=""
                />
                <div className="">
                  <p className="font-bold text-lg">Get Paid Every Month</p>
                  <p className="text-gray-600">
                    Unlock 25% Lifetime Commissions with every conversion you
                    make for Helium 10.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5 sm:m-5 my-4 ">
                <img
                  className="w-[2rem]"
                  src="https://www.sendinblue.com/wp-content/uploads/2020/04/check-3.svg"
                  alt=""
                />
                <div className="">
                  <p className="font-bold text-lg">Get Paid Every Month</p>
                  <p className="text-gray-600">
                    Unlock 25% Lifetime Commissions with every conversion you
                    make for Helium 10.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5 sm:m-5 my-4 ">
                <img
                  className="w-[2rem]"
                  src="https://www.sendinblue.com/wp-content/uploads/2020/04/check-3.svg"
                  alt=""
                />
                <div className="">
                  <p className="font-bold text-lg">Get Paid Every Month</p>
                  <p className="text-gray-600">
                    Unlock 25% Lifetime Commissions with every conversion you
                    make for Helium 10.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5 sm:m-5 my-4 ">
                <img
                  className="w-[2rem]"
                  src="https://www.sendinblue.com/wp-content/uploads/2020/04/check-3.svg"
                  alt=""
                />
                <div className="">
                  <p className="font-bold text-lg">Get Paid Every Month</p>
                  <p className="text-gray-600">
                    Unlock 25% Lifetime Commissions with every conversion you
                    make for Helium 10.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a
            className="rounded-full p-3 px-10 text-center text-white transition-all font-bold duration-300 ease-in-out bg-gradient-to-r from-saffron to-dark-saffron"
            href="https://youtu.be/ea94nqoxnVQ?si=VemJlCvedQ7SIdnL"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Yes, I want to Sign Up
          </a>
        </div>
        {/* testimonials */}
        <div className="flex flex-col items-center justify-center my-5 p-5">
          <p className="text-2xl sm:text-4xl text-center mb-10">
            Here’s What Current Helium 10 Affiliates Have To Say
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4">
            <div className="flex flex-col items-start gap-4 border rounded p-3 hover:shadow hover:shadow-saffron">
              <p className=" border-2 rounded-full w-6 h-5 pb-5 text-center border-saffron text-2xl">
                “
              </p>
              <p className="text-gray-700">
                I have been a member of the Helium 10 affiliate program for over
                a year now, and I love promoting something that actually works,
                and something I use myself. Helium 10 also provides me with
                discount coupons, which I share with my audience and I get
                commissions for people that join through my links. It's a
                win-win situation for everyone. The customer support for the
                affiliates is great, they truly care about your success.
              </p>
              <p className="font-bold text-lg text-dark-blue mt-2">Niklas S.</p>
            </div>
            <div className="flex flex-col items-start gap-4 border rounded p-3 hover:shadow hover:shadow-saffron">
              <p className=" border-2 rounded-full w-6 h-5 pb-5 text-center border-saffron text-2xl">
                “
              </p>
              <p className="text-gray-700">
                I have been a member of the Helium 10 affiliate program for over
                a year now, and I love promoting something that actually works,
                and something I use myself. Helium 10 also provides me with
                discount coupons, which I share with my audience and I get
                commissions for people that join through my links. It's a
                win-win situation for everyone. The customer support for the
                affiliates is great, they truly care about your success.
              </p>
              <p className="font-bold text-lg text-dark-blue mt-2">Niklas S.</p>
            </div>
            <div className="flex flex-col items-start gap-4 border rounded p-3 hover:shadow hover:shadow-saffron">
              <p className=" border-2 rounded-full w-6 h-5 pb-5 text-center border-saffron text-2xl">
                “
              </p>
              <p className="text-gray-700">
                I have been a member of the Helium 10 affiliate program for over
                a year now, and I love promoting something that actually works,
                and something I use myself. Helium 10 also provides me with
                discount coupons, which I share with my audience and I get
                commissions for people that join through my links. It's a
                win-win situation for everyone. The customer support for the
                affiliates is great, they truly care about your success.
              </p>
              <p className="font-bold text-lg text-dark-blue mt-2">Niklas S.</p>
            </div>
          </div>
        </div>

        <div className="border-gray-600  flex flex-col gap-5 p-5 w-full container">
          <p className="text-2xl sm:text-4xl font-bold text-center">
            How Do I Get Started?
          </p>
          <p className="text-center capitalize text-dark-blue font-bold">
            Getting Started Is As Easy 1-2-3-4!
          </p>
          <div className="flex gap-3 items-start w-full my-1">
            <p className="text-2xl w-8 h-8 mt-2 rounded-full bg-dark-blue font-bold text-center">
              <span className="text-white w-full h-full">1</span>
            </p>
            <div className="">
              <p className="font-bold text-lg">Apply Online Now</p>
              <p className="text-sm">
                Fill out a quick form to introduce yourself.
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start w-full my-1">
            <p className="text-2xl w-8 h-8 mt-2 rounded-full bg-dark-blue font-bold text-center">
              <span className="text-white w-full h-full">2</span>
            </p>
            <div className="">
              <p className="font-bold text-lg">Get Qualified</p>
              <p className="text-sm">
                You’ll be notified within 48 hours if you qualify.
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start w-full my-1">
            <p className="text-2xl w-8 h-8 mt-2 rounded-full bg-dark-blue font-bold text-center">
              <span className="text-white w-full h-full">3</span>
            </p>
            <div className="">
              <p className="font-bold text-lg">Meet Your Manager</p>
              <p className="text-sm">
                Get onloadend with your own personal affiliate link from our
                managers
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start w-full my-1">
            <p className="text-2xl w-8 h-8 mt-2 rounded-full bg-dark-blue font-bold text-center">
              <span className="text-white w-full h-full">1</span>
            </p>
            <div className="">
              <p className="font-bold text-lg">Start Promoting & Earning</p>
              <p className="text-sm">
                Share Helium 10 with your audience through the content you
                create, and you’ll start seeing conversions roll in.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center py-5 justify-center gap-4 border my-5 p-2">
            <p className="font-bold md:text-4xl text-2xl">
              Ready to become a Helium 10 Affiliate?
            </p>
            <p className="text-sm text-gray-600">
              Apply below to become a Helium 10 Affiliate
            </p>

            <a
              className="rounded-full p-3 px-10 text-center text-white transition-all font-bold duration-300 ease-in-out bg-gradient-to-r from-saffron to-dark-saffron"
              href="https://youtu.be/ea94nqoxnVQ?si=VemJlCvedQ7SIdnL"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Yes, I want to Sign Up
            </a>
          </div>

          <div className="flex flex-col items-center text-center py-5 justify-center gap-4 my-5 p-2">
            <p className="font-bold md:text-4xl text-2xl">
              Affiliate Program FAQs
            </p>
            <p className="text-sm text-gray-600">
              Got More Questions About The Helium 10 Affiliate Program?
              Hopefully The Answers Below Will Help You Out
            </p>

            <div className="w-full container mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded mb-2"
                >
                  <button
                    className="flex bg-gray-50 border justify-between items-center px-4 py-3 w-full text-left"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={openIndex === index}
                  >
                    <p className="font-bold text-lg ">{faq.question}</p>
                    <div>
                      {openIndex === index ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 "
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 -rotate-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      )}
                    </div>
                  </button>
                  {openIndex === index && (
                    <p className="px-4 text-start border-t py-5 border-gray-300">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <footer className="w-full flex flex-col md:flex-row items-center justify-center gap-5 p-5 bg-dark-blue">
          <div className="flex flex-col items-center gap-5 md:items-start md:w-1/2 w-full">
            <p className="text-xl font-bold text-white">
              Now’s The Time to Start Earning with the Helium 10 Affiliate
              Program
            </p>
            <p className="text-sm text-white">
              Signing Up is Easy & It Takes Less Than 48 Hours to Get Approved
            </p>
            <a
              className="rounded-full p-3 px-10 text-center text-white transition-all font-bold duration-300 ease-in-out bg-gradient-to-r from-saffron to-dark-saffron"
              href="https://youtu.be/ea94nqoxnVQ?si=VemJlCvedQ7SIdnL"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Yes, I want to Sign Up 
            </a>
          </div>
          <img
            className="w-full md:w-1/2"
            src="https://pages.helium10.com/hosted/images/7d/657959ca8d424789a99513a778b1ef/crushit-benefits.svg"
            alt=""
          />
        </footer>
      </section>
    </>
  );
};

export default Affiliate;
