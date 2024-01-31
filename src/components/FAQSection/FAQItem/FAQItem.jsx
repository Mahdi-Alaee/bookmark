function FAQItem() {
  return (
    <button>
      {/* top */}
      <div>
        {/* title */}
        <h6>What is Bookmark?</h6>

        {/* icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            d="M1 1l8 8 8-8"
          />
        </svg>
      </div>

      {/* content */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
        repellat amet doloribus consequuntur eos similique provident tempora
        voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae
        delectus id suscipit labore?
      </p>
    </button>
  );
}

export default FAQItem;
