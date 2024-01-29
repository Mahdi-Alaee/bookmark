function HeroSection() {
  return (
    <section className="mt-16 lg:mt-32 relative">
      {/* container */}
      <div className="container mx-auto px-6 flex flex-col-reverse md:items-center lg:flex-row lg:justify-between">
        {/* content */}
        <div className="flex flex-col gap-y-10 text-center items-center lg:w-1/2 lg:text-left lg:items-start">
          {/* title */}
          <h1 className="text-3xl font-bold lg:text-6xl">
            A Simple Bookmark Manager
          </h1>
          {/* description */}
          <p className="text-grayishBlue text-lg max-w-md lg:text-2xl">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>

          {/* buttons */}
          <div className="flex gap-x-4 justify-center">
            {/* button 1 */}
            <a
              className="block p-4 text-white bg-softBlue rounded-md border-2 
            border-softBlue text-sm font-bold tracking-wider hover:bg-transparent 
            hover:text-softBlue md:text-base"
              href="#"
            >
              Get It On Chrome
            </a>

            {/* button 2 */}
            <a
              className="block p-4 rounded-md border-2 
            border-gray-300 bg-gray-300 text-sm font-bold tracking-wider hover:bg-transparent 
            md:text-base"
              href="#"
            >
              Get It On Firefox
            </a>
          </div>
        </div>

        {/* banner */}
        {/* <div className="relative "> */}
          <img
          className="md:max-w-2xl lg:w-1/2"
            src="/images/illustration-hero.svg"
            alt="hero banner"
          />
          <div className="bg-section right-0 -bottom-4 rounded-r-full w-[36%]"></div>
        {/* </div> */}
      </div>
    </section>
  );
}

export default HeroSection;
