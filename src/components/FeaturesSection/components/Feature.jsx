function Feature() {
  return (
    <div className="flex flex-col gap-y-28 md:flex-row md:gap-x-6">
      {/* banner */}
      <img className="md:w-1/2" src="/images/illustration-features-tab-1.svg" alt="feature image" />

      {/* content */}
      <div className="md:w-1/2 md:text-left">
        {/* title */}
        <h3 className="text-3xl font-bold">Bookmark in one click</h3>

        {/* description */}
        <p className="max-w-md text-grayishBlue mx-auto mt-10 mb-8">
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
        </p>

        {/* button */}
        <a className="inline-block px-6 py-2 bg-softBlue text-white border-2 border-softBlue
         rounded-md font-bold tracking-wider hover:bg-transparent hover:text-softBlue" href="#">More Info</a>
      </div>
    </div>
  );
}

export default Feature;
