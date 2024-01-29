function HeroSection() {
  return (
    <section className="mt-24">
      {/* container */}
      <div className="container mx-auto px-6">

        {/* content */}
        <div>
          {/* title */}
          <h1>A Simple Bookmark Manager</h1>
          {/* description */}
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>

          {/* buttons */}
          <div>
            {/* button 1 */}
            <a href="#">Get It On Chrome</a>

            {/* button 2 */}
            <a href="#">Get It On Firefox</a>
          </div>
        </div>

        {/* banner */}
        <img src="/images/illustration-hero.svg" alt="hero banner" />
      </div>
    </section>
  );
}

export default HeroSection;
