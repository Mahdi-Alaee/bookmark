import ExtentionBox from "./components/ExtentionBox";

function ExtentionSection() {
  return (
    <section className="mt-32">
      <div className="container mx-auto px-6 text-center">
        {/* title */}
        <h2 className="text-3xl font-bold mb-6 tracking-wide md:text-4xl">Download the extension</h2>

        {/* description */}
        <p className="text-grayishBlue mb-40 max-w-md mx-auto">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>

        {/* content */}
        <div className="grid grid-cols-1 gap-8 px-4 max-w-5xl md:grid-cols-3 md:px-0 md:-mx-5 lg:mx-auto">
            <ExtentionBox title='Add to Chrome' image='logo-chrome.svg' version='Minimum Version 62' />
            <ExtentionBox className='md:mt-4 md:-mb-4' title='Add to Firefox' image='logo-firefox.svg' version='Minimum Version 55' />
            <ExtentionBox className='md:mt-8 md:-mb-8' title='Add to Opera' image='logo-opera.svg' version='Minimum Version 46' />
        </div>
      </div>
    </section>
  );
}

export default ExtentionSection;
