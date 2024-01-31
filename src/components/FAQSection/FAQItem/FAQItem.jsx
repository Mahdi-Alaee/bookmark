function FAQItem({ title, content }) {
  return (
    <button className="group border-b py-4">
      {/* top */}
      <div className="flex justify-between">
        {/* title */}
        <h6 className="text-gray-500 duration-500 group-hover:text-softRed">
          {title}
        </h6>

        {/* icon */}
        <svg
          className="duration-500 group-focus:-rotate-180 text-gray-500 group-focus:text-softRed"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            d="M1 1l8 8 8-8"
          />
        </svg>
      </div>

      {/* content */}
      <p className="text-left text-grayishBlue max-h-0 overflow-hidden group-focus:max-h-none group-focus:pt-6">
        {content}
      </p>
    </button>
  );
}

export default FAQItem;
