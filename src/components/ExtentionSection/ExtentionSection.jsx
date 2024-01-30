import ExtentionBox from "./components/ExtentionBox";

function ExtentionSection() {
  return (
    <section className="mt-20">
      <div className="container max-auto px-6">
        {/* title */}
        <h2>Download the extension</h2>

        {/* description */}
        <p>
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>

        {/* content */}
        <div>
            <ExtentionBox />
        </div>
      </div>
    </section>
  );
}

export default ExtentionSection;
