import Feature from "./components/Feature";

function FeaturesSection() {
  return (
    <section>
      {/* container */}
      <div className="container mx-auto px-6">
        {/* title */}
        <h2>Features</h2>

        {/* description */}
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>

        {/* content */}
        <div>
          {/* menu */}
          <ul>
            {/* item 1 */}
            <li>Simple Bookmarking</li>
            {/* item 2 */}
            <li>Speedy Searching</li>
            {/* item 3 */}
            <li>Easy Sharing</li>
          </ul>

          {/* feature */}
          <Feature />
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
