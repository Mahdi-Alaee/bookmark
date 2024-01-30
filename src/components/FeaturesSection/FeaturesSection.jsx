import { useState } from "react";
import Feature from "./components/Feature";
import { features, featuresMenus } from "../../js/data";

function FeaturesSection() {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);

  const featureMenuHandler = (e, id) => {
    e.preventDefault();

    setSelectedFeature(features.find((feature) => feature.id === id));
  };

  return (
    <section className="mt-20 relative min-h-[45rem]">
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
        <ul
          className="flex flex-col mb-10 border-gray-300 md:flex-row md:gap-x-20 
        md:border-b md:w-max md:mx-auto md:px-2"
        >
          {featuresMenus.map((item) => (
            <li
              key={item.id}
              className="text-gray-600 hover:text-softRed border-b border-gray-300 md:border-b-0"
            >
              <a
                className={`border-softRed py-5 inline-block ${
                  item.id === selectedFeature.id ? "border-b-4" : ""
                }`}
                href="#"
                onClick={(e) => featureMenuHandler(e, item.id)}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {/* feature */}
        <Feature {...selectedFeature} />
      </div>
    </section>
  );
}

export default FeaturesSection;
