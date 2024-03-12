const Videos_social = () => {
  return (
    <>
      <div className="flex w-full justify-between md:flex-row flex-col border p-5">
        <div className="flex flex-col gap-4 justify-start md:w-1/2 w-full ">
          <p className="text-2xl font-bold text-dark-blue">
            What all can Product X do for you?
          </p>
          <iframe className="sm:w-[25rem]  sm:h-[12rem] w-full h-full"
          
            src="https://www.youtube-nocookie.com/embed/UUddpbgPEJM?si=8VdRhuiUqh4NRGkx"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <p className="text-gray-400">
            Discover and understand the different tools we have to offer by
            watching this video on what our tools can do for you.
          </p>
          <p className="text-gray-400">
            Explore Product X alongside our top knowledge experts and get
            various tips and tricks
          </p>
        </div>

        <div className="flex flex-col gap-5 justify-start md:w-5/12 w-full h-full  ">
          <p className="text-2xl font-bold text-dark-blue">
            Join our community and learn the latest seller strategies
          </p>
          <p className="text-gray-400">
            Check out our Facebook page and our Serious Sellers Podcast for more
            tips and tricks on how to use Product X to level up your business.
          </p>
          <button className="border border-saffron rounded-md  p-2 hover:bg-saffron hover:text-white">
            Join our Facebook Groups
          </button>
          <button className="border border-saffron rounded-md  p-2 hover:bg-saffron hover:text-white">
            Listen to podcast
          </button>
          <button className="border border-saffron rounded-md  p-2 hover:bg-saffron hover:text-white">
            Join our Facebook Groups
          </button>
          
        </div>
      </div>
    </>
  );
};

export default Videos_social;
