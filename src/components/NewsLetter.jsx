function NewsLetter() {
  return (
    <section className="bg-softBlue py-24 mt-32">
      {/* container */}
      <div className="max-w-md mx-auto text-white text-center flex flex-col gap-y-6 md:max-w-lg">
        {/* top small text */}
        <p className="text-lg tracking-widest">35,000+ ALREADY JOINED</p>

        {/* title */}
        <h2 className="text-3xl font-bold tracking-wide md:text-4xl">Stay up-to-date with what we're doing</h2>

        {/* form */}
        <form className="flex flex-col items-center gap-y-4 md:flex-row md:gap-x-3 md:justify-center">
          {/* textbox */}
          <input className="px-6 py-3 rounded-lg outline-none" type="text" placeholder="Enter your email address" />
          {/* submit button */}
          <button className="bg-softRed tracking-wider text-white px-6 py-3 rounded-lg font-bold" type="submit">Contact Us</button>
        </form>
      </div>
    </section>
  );
}

export default NewsLetter;
