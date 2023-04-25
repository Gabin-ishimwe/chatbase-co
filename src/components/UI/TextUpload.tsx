const TextUpload = () => {
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
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="w-3 h-3 mr-2">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"></path>
          </svg>
          Back
        </button>
        <div>
          <input
            placeholder="chatbot name"
            className="mt-4 min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
            value=""
          />
          <textarea
            placeholder="data"
            name="data"
            rows={20}
            className="my-2 min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"></textarea>
          <p className="text-sm text-gray-600 text-center h-8"></p>
        </div>
      </div>
      <div className=" py-8 max-w-sm m-auto">
        <button
          data-variant="flat"
          className="w-full rounded-md py-2 text-sm font-semibold text-white text-center bg-black"
          type="submit">
          Create Chatbot
        </button>
      </div>
    </>
  );
};

export default TextUpload;
