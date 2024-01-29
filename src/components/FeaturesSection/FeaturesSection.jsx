import Feature from "./components/Feature";

function FeaturesSection() {
  return (
    <section className="mt-20">
      {/* container */}
      <div className="container mx-auto px-6 text-center">
        {/* title */}
        <h2 className="text-4xl font-bold">Features</h2>

        {/* description */}
        <p className="mt-8 mb-16 text-grayishBlue max-w-md mx-auto">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>

        {/* menu */}
        <ul className="flex flex-col mb-10 border-gray-300 md:flex-row md:gap-x-20 
        md:border-b md:w-max md:mx-auto md:px-2">
          {/* item 1 */}
          <li className="text-gray-600 hover:text-softRed border-b border-gray-300 md:border-b-0">
            <a className="border-b-4 border-softRed py-5 inline-block" href="#">
              Simple Bookmarking
            </a>
          </li>
          {/* item 2 */}
          <li className="text-gray-600 hover:text-softRed border-b border-gray-300 md:border-b-0">
            <a className="border-softRed py-5 inline-block" href="#">
              Speedy Searching
            </a>
          </li>
          {/* item 3 */}
          <li className="text-gray-600 hover:text-softRed border-b border-gray-300 md:border-b-0">
            <a className="border-softRed py-5 inline-block" href="#">
              Easy Sharing
            </a>
          </li>
        </ul>

        {/* feature */}
        <Feature />
      </div>
    </section>
  );
}

export default FeaturesSection;
