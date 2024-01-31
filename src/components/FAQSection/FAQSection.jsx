import FAQItem from "./FAQItem/FAQItem";

function FAQSection() {
  return (
    <section id="faq" className="mt-32">
      <div className="max-w-3xl mx-auto text-center px-6">
        {/* title */}
        <h2 className="text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>

        {/* description */}
        <p className="max-w-md mx-auto mt-6">
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>

        {/* content */}
        <div className="mt-10 px-6">
          <FAQItem
            title="What is Bookmark?"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, 
            repellat amet doloribus consequuntur eos similique provident tempora voluptates 
            iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit 
            labore?"
          />

          <FAQItem
            title="How can I request a new browser?"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, 
            repellat amet doloribus consequuntur eos similique provident tempora voluptates 
            iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit 
            labore?"
          />

          <FAQItem
            title="Is ther a mobile app?"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, 
            repellat amet doloribus consequuntur eos similique provident tempora voluptates 
            iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit 
            labore?"
          />

          <FAQItem
            title="What about other Chromium browsers"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, 
            repellat amet doloribus consequuntur eos similique provident tempora voluptates 
            iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit 
            labore?"
          />
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
