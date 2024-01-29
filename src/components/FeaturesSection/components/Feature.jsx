function Feature({ title, description, image }) {
  return (
    <div className="flex flex-col gap-y-28 max-w-6xl mx-auto md:flex-row md:gap-x-6 md:justify-between">
      {/* banner */}
      <img
        className="max-w-md md:w-1/2"
        src={`/images/${image}`}
        alt="feature image"
      />
      {/* section background */}
      <div className="bg-section left-0 -bottom-5 w-[39%] rounded-r-full"></div>

      {/* content */}
      <div className="md:w-1/2 md:text-left">
        {/* title */}
        <h3 className="text-3xl font-bold">{title}</h3>

        {/* description */}
        <p className="max-w-md text-grayishBlue mx-auto mt-10 mb-8 md:mx-0">
          {description}
        </p>

        {/* button */}
        <a
          className="inline-block px-6 py-2 bg-softBlue text-white border-2 border-softBlue
         rounded-md font-bold tracking-wider hover:bg-transparent hover:text-softBlue"
          href="#"
        >
          More Info
        </a>
      </div>
    </div>
  );
}

export default Feature;
