function NewsLetter() {
  return (
    <section className="bg-softBlue py-24 mt-32">
      {/* container */}
      <div className="max-w-md mx-auto text-white text-center flex flex-col gap-y-6">
        {/* top small text */}
        <p className="text-lg tracking-widest">35,000+ ALREADY JOINED</p>

        {/* title */}
        <h2 className="text-3xl font-bold tracking-wide">Stay up-to-date with what we're doing</h2>

        {/* form */}
        <form className="flex flex-col items-center gap-y-4">
          {/* textbox */}
          <input className="px-6 py-2 rounded-lg outline-none" type="text" placeholder="Enter your email address" />
          {/* submit button */}
          <button className="bg-softRed text-white px-7 py-3 rounded-lg font-bold" type="submit">Contact Us</button>
        </form>
      </div>
    </section>
  );
}

export default NewsLetter;
