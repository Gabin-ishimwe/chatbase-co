const FaQs = () => {
  return (
    <section className="sm:py-8 relative">
      {/* <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"></path>
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#9089FC"></stop>
              <stop offset="1" stopColor="#FF80B5"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div> */}
      <div className="relative">
        <h4 className="text-2xl md:text-3xl font-extrabold text-black text-center py-2">
          Frequently Asked Questions
        </h4>
        <h6 className="text-lg text-center">
          If you cant find your question, email{" "}
          <a className="font-semibold" href="mailto:support@chatbase.co">
            support@chatbase.co
          </a>
        </h6>
      </div>
      <ul
        role="list"
        className="mt-16 grid grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
        <li>
          <ul role="list" className="flex flex-col gap-y-8">
            <li>
              <h3 className="font-display text-lg leading-7 text-slate-900">
                What is Chatbase?
              </h3>
              <p className="mt-4 text-slate-700">
                Chatbase is an AI chatbot builder, it trains ChatGPT on your
                data and lets you add a chat widget to your website. Just upload
                a document or add a link to your website and get a chatbot that
                can answer any question about their content.
              </p>
            </li>
            <li>
              <h3 className="font-display text-lg leading-7 text-slate-900">
                What should my data look like?
              </h3>
              <p className="mt-4 text-slate-700">
                Currently, you can upload one or multiple files (.pdf, .txt,
                .doc, .docx), paste text, or add a link to your website to be
                scraped.
              </p>
            </li>
            <li>
              <h3 className="font-display text-lg leading-7 text-slate-900">
                Can I give my chatbots instructions?
              </h3>
              <p className="mt-4 text-slate-700">
                Yes, you can edit the base prompt and give your chatbot a name,
                personality traits and instructions on how to answer questions
                ex. (only answer in French).
              </p>
            </li>
            <li>
              <h3 className="font-display text-lg leading-7 text-slate-900">
                Where is my data stored?
              </h3>
              <p className="mt-4 text-slate-700">
                The content of the document is hosted on secure GCP/AWS servers
                in us-east.
              </p>
            </li>
          </ul>
        </li>
        <li>
          <ul role="list" className="flex flex-col gap-y-8">
            <li>
              <h3 className="font-display text-lg leading-7 text-slate-900">
                Does it use ChatGPT or GPT-4?
              </h3>
              <p className="mt-4 text-slate-700">
                By default your chatbot uses ChatGPT (gpt-3.5-turbo), but you
                can edit your chatbot settings to have it use gpt-4 instead. 1
                gpt-4 message consumes 20 message credits while 1 gpt-3.5-turbo
                message consumes 1 message credit.
              </p>
            </li>
            <li>
              <h3 className="font-display text-lg leading-7 text-slate-900">
                How can I add my chatbot to my website?
              </h3>
              <p className="mt-4 text-slate-700">
                You can embed an iframe or add a chat bubble to the bottom right
                of your website. To do that, create a chatbot and click Embed on
                website. You can also use the API to communicate with your
                chatbot anywhere!
              </p>
            </li>
            <li>
              <h3 className="font-display text-lg leading-7 text-slate-900">
                Does it support other languages?
              </h3>
              <p className="mt-4 text-slate-700">
                Yes, Chatbase supports about 95 languages. You can have your
                sources in any language and ask it questions in any language.
              </p>
            </li>
            <li>
              <h3 className="font-display text-lg leading-7 text-slate-900">
                Can I share a chatbot I created?
              </h3>
              <p className="mt-4 text-slate-700">
                Yes, by default any chatbot you create is private but you can
                change the setting to make it public and send it to anyone.
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default FaQs;
