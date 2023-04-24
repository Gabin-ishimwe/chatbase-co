const Pricing = () => {
  return (
    <div className="sm:flex sm:flex-col sm:align-center">
      <h1 className="text-4xl font-extrabold text-black sm:text-center sm:text-6xl mt-14">
        Pricing Plans
      </h1>
      <p className="mt-6 text-center">
        Get 2 months for free by subscribing yearly!
      </p>
      <div className="relative self-center mt-2 bg-zinc-100 rounded-lg p-0.5 flex sm:mt-4 border border-zinc-200">
        <button
          type="button"
          className="relative w-1/2 bg-zinc-300 border-zinc-200 shadow-sm text-black rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8">
          Monthly billing
        </button>
        <button
          type="button"
          className="ml-0.5 relative w-1/2 border border-transparent text-zinc-600 rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8">
          Yearly billing
        </button>
      </div>
      <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-4">
        <div className="rounded-lg shadow-sm divide-y divide-zinc-400 bg-zinc-100">
          <div className="p-4 flex flex-col justify-between h-full">
            <h2 className="text-2xl leading-6 font-semibold text-black">
              Hobby
            </h2>
            <div className="py-4">
              <li className="flex space-x-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-green-500">
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="text-sm font-semibold text-gray-700">
                  2,000 message credits/month
                </span>
              </li>
              <li className="flex space-x-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-green-500">
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="text-sm font-semibold text-gray-700">
                  5 chatbots
                </span>
              </li>
              <li className="flex space-x-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-green-500">
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="text-sm font-semibold text-gray-700">
                  2,000,000 characters/chatbot
                </span>
              </li>
              <li className="flex space-x-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-green-500">
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="text-sm font-semibold text-gray-700">
                  Embed on unlimited websites
                </span>
              </li>
              <li className="flex space-x-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-green-500">
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="text-sm font-semibold text-gray-700">
                  Upload multiple files
                </span>
              </li>
              <li className="flex space-x-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-green-500">
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="text-sm font-semibold text-gray-700">
                  API Access
                </span>
              </li>
            </div>
            <div>
              <p className="mt-8">
                <span className="text-3xl font-bold white">$19</span>
                <span className="text-base font-medium text-zinc-900">
                  /month
                </span>
              </p>
              <button
                data-variant="flat"
                className="mt-8 block w-full rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-800 bg-black"
                type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="rounded-lg shadow-sm divide-y divide-zinc-400 bg-zinc-100">
          <div className="p-4 flex flex-col justify-between h-full">
            <h2 className="text-2xl leading-6 font-semibold text-black">
              Hobby
            </h2>
            <div className="py-4">
              <li className="flex space-x-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-green-500">
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="text-sm font-semibold text-gray-700">
                  2,000 message credits/month
                </span>
              </li>
              <li className="flex space-x-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-green-500">
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="text-sm font-semibold text-gray-700">
                  5 chatbots
                </span>
              </li>
              <li className="flex space-x-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-green-500">
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="text-sm font-semibold text-gray-700">
                  2,000,000 characters/chatbot
                </span>
              </li>
              <li className="flex space-x-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-green-500">
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="text-sm font-semibold text-gray-700">
                  Embed on unlimited websites
                </span>
              </li>
              <li className="flex space-x-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-green-500">
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="text-sm font-semibold text-gray-700">
                  Upload multiple files
                </span>
              </li>
              <li className="flex space-x-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-green-500">
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="text-sm font-semibold text-gray-700">
                  API Access
                </span>
              </li>
            </div>
            <div>
              <p className="mt-8">
                <span className="text-3xl font-bold white">$19</span>
                <span className="text-base font-medium text-zinc-900">
                  /month
                </span>
              </p>
              <button
                data-variant="flat"
                className="mt-8 block w-full rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-800 bg-black"
                type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="rounded-lg shadow-sm divide-y divide-zinc-400 bg-zinc-100">
          <div className="p-4 flex flex-col justify-between h-full">
            <h2 className="text-2xl leading-6 font-semibold text-black">
              Hobby
            </h2>
            <div className="py-4">
              <li className="flex space-x-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-green-500">
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="text-sm font-semibold text-gray-700">
                  2,000 message credits/month
                </span>
              </li>
              <li className="flex space-x-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-green-500">
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="text-sm font-semibold text-gray-700">
                  5 chatbots
                </span>
              </li>
              <li className="flex space-x-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-green-500">
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="text-sm font-semibold text-gray-700">
                  2,000,000 characters/chatbot
                </span>
              </li>
              <li className="flex space-x-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-green-500">
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="text-sm font-semibold text-gray-700">
                  Embed on unlimited websites
                </span>
              </li>
              <li className="flex space-x-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-green-500">
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="text-sm font-semibold text-gray-700">
                  Upload multiple files
                </span>
              </li>
              <li className="flex space-x-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-green-500">
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="text-sm font-semibold text-gray-700">
                  API Access
                </span>
              </li>
            </div>
            <div>
              <p className="mt-8">
                <span className="text-3xl font-bold white">$19</span>
                <span className="text-base font-medium text-zinc-900">
                  /month
                </span>
              </p>
              <button
                data-variant="flat"
                className="mt-8 block w-full rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-800 bg-black"
                type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="rounded-lg shadow-sm divide-y divide-zinc-400 bg-zinc-100">
          <div className="p-4 flex flex-col justify-between h-full">
            <h2 className="text-2xl leading-6 font-semibold text-black">
              Hobby
            </h2>
            <div className="py-4">
              <li className="flex space-x-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-green-500">
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="text-sm font-semibold text-gray-700">
                  2,000 message credits/month
                </span>
              </li>
              <li className="flex space-x-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-green-500">
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="text-sm font-semibold text-gray-700">
                  5 chatbots
                </span>
              </li>
              <li className="flex space-x-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-green-500">
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="text-sm font-semibold text-gray-700">
                  2,000,000 characters/chatbot
                </span>
              </li>
              <li className="flex space-x-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-green-500">
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="text-sm font-semibold text-gray-700">
                  Embed on unlimited websites
                </span>
              </li>
              <li className="flex space-x-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-green-500">
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="text-sm font-semibold text-gray-700">
                  Upload multiple files
                </span>
              </li>
              <li className="flex space-x-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-green-500">
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="text-sm font-semibold text-gray-700">
                  API Access
                </span>
              </li>
            </div>
            <div>
              <p className="mt-8">
                <span className="text-3xl font-bold white">$19</span>
                <span className="text-base font-medium text-zinc-900">
                  /month
                </span>
              </p>
              <button
                data-variant="flat"
                className="mt-8 block w-full rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-800 bg-black"
                type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16">
        <h4 className="text-3xl font-extrabold text-black ">Pricing FAQs</h4>
        <ul
          role="list"
          className="mt-8 grid grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
          <li>
            <ul role="list" className="flex flex-col gap-y-8">
              <li>
                <h3 className="font-display text-lg leading-7 text-slate-900">
                  Is there a free plan?
                </h3>
                <p className="mt-4 text-slate-700">
                  Yes, just by signing up you get 30 message credits and 1
                  chatbot. You can use these to test out chatbase and see if it
                  works for you.
                </p>
              </li>
              <li>
                <h3 className="font-display text-lg leading-7 text-slate-900">
                  Is there a free plan?
                </h3>
                <p className="mt-4 text-slate-700">
                  Yes, just by signing up you get 30 message credits and 1
                  chatbot. You can use these to test out chatbase and see if it
                  works for you.
                </p>
              </li>
              <li>
                <h3 className="font-display text-lg leading-7 text-slate-900">
                  Is there a free plan?
                </h3>
                <p className="mt-4 text-slate-700">
                  Yes, just by signing up you get 30 message credits and 1
                  chatbot. You can use these to test out chatbase and see if it
                  works for you.
                </p>
              </li>
              <li>
                <h3 className="font-display text-lg leading-7 text-slate-900">
                  Is there a free plan?
                </h3>
                <p className="mt-4 text-slate-700">
                  Yes, just by signing up you get 30 message credits and 1
                  chatbot. You can use these to test out chatbase and see if it
                  works for you.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <ul role="list" className="flex flex-col gap-y-8">
              <li>
                <h3 className="font-display text-lg leading-7 text-slate-900">
                  Is there a free plan?
                </h3>
                <p className="mt-4 text-slate-700">
                  Yes, just by signing up you get 30 message credits and 1
                  chatbot. You can use these to test out chatbase and see if it
                  works for you.
                </p>
              </li>
              <li>
                <h3 className="font-display text-lg leading-7 text-slate-900">
                  Is there a free plan?
                </h3>
                <p className="mt-4 text-slate-700">
                  Yes, just by signing up you get 30 message credits and 1
                  chatbot. You can use these to test out chatbase and see if it
                  works for you.
                </p>
              </li>
              <li>
                <h3 className="font-display text-lg leading-7 text-slate-900">
                  Is there a free plan?
                </h3>
                <p className="mt-4 text-slate-700">
                  Yes, just by signing up you get 30 message credits and 1
                  chatbot. You can use these to test out chatbase and see if it
                  works for you.
                </p>
              </li>
              <li>
                <h3 className="font-display text-lg leading-7 text-slate-900">
                  Is there a free plan?
                </h3>
                <p className="mt-4 text-slate-700">
                  Yes, just by signing up you get 30 message credits and 1
                  chatbot. You can use these to test out chatbase and see if it
                  works for you.
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pricing;
