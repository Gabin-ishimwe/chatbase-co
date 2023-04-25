const Webscrapt = () => {
  return (
    <>
      <div>
        <button
          type="button"
          className="flex items-center rounded-md border border-transparent bg-zinc-200 py-1 px-2 text-sm font-medium text-black shadow-sm hover:bg-zinc-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="w-3 h-3 mr-2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"></path>
          </svg>
          Back
        </button>
        <div>
          <p className="text-center text-xs text-zinc-700">
            Max crawl/scrape time is 50 seconds (limit will increase soon)
          </p>
          <label className="block text-sm font-medium leading-6 text-gray-900 my-2">
            Crawl
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="flex space-x-2">
              <input
                type="text"
                name="website"
                className=" flex-auto rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                placeholder="https://www.example.com"
              />
              <button
                data-variant="flat"
                className="rounded-md py-2 px-3 font-semibold text-sm text-white text-center bg-black focus:ring-1 focus:ring-pink-400"
                type="submit">
                Fetch Links
              </button>
            </div>
            <div className="py-4 text-sm text-zinc-600">
              This will crawl all the links starting with the URL (not including
              files on the website). Has to be server side rendered website
            </div>
          </div>
          <div className="flex items-center my-4">
            <hr className="w-full border-gray-300 border-t" />
            <span className="px-2 text-gray-600 whitespace-nowrap">OR</span>
            <hr className="w-full border-gray-300 border-t" />
          </div>
          <div>
            <label
              htmlFor="sitemap"
              className="block text-sm font-medium leading-6 text-gray-900 my-2">
              Submit Sitemap
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="sitemap"
                  className=" flex-auto rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                  placeholder="https://www.example.com/sitemap.xml"
                />
                <button
                  data-variant="flat"
                  className="rounded-md py-2 px-3 font-semibold text-sm text-white text-center bg-black focus:ring-1 focus:ring-pink-400"
                  type="submit">
                  Load Sitemap
                </button>
              </div>
            </div>
          </div>
          <div className="mt-14">
            <label
              htmlFor="exluded_urls"
              className="block text-sm font-medium leading-6 text-gray-900 my-2">
              Links to include
            </label>
            <div className="my-2 flex justify-end">
              <button
                type="button"
                className="flex items-center rounded-md border border-transparent bg-zinc-200 py-1 px-2 text-sm font-medium text-black shadow-sm hover:bg-zinc-300">
                Add
              </button>
            </div>
            <div className="flex space-x-2">
              <input
                type="text"
                name="website"
                className=" flex-auto rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                placeholder="https://www.example.com"
                value=""
              />
              <button
                type="button"
                className=" w-38 rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6">
                {" "}
                + Fetch More Links
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 max-w-sm m-auto">
        <button
          data-variant="flat"
          className="mb-8 w-full rounded-md py-2 text-sm font-semibold text-white text-center bg-black"
          type="submit">
          Create Chatbot
        </button>
      </div>
    </>
  );
};

export default Webscrapt;
