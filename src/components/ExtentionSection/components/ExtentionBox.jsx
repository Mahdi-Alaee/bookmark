function ExtentionBox({ image, title, version, className }) {
  return (
    <div className={`flex flex-col items-center shadow-lg rounded-lg ${className}`}>
      {/* top content */}
      <div className="flex flex-col items-center py-6">
        {/* image */}
        <img className="mb-12" src={`/images/${image}`} alt="browser logo" />

        {/* title */}
        <h5 className="font-bold text-xl">{title}</h5>

        {/* version */}
        <p className="text-grayishBlue mt-4">{version}</p>
      </div>

      {/* dots & button */}
      <div className="bg-dots p-6 w-full">
        <a
          className="block bg-softBlue text-white py-3 rounded-lg border-2 border-softBlue duration-200 hover:bg-transparent hover:text-softBlue"
          href="#"
        >
          Add & Install Extension
        </a>
      </div>
    </div>
  );
}

export default ExtentionBox;
