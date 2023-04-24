import React from "react";

const CreateNewChatBot = () => {
  const [option, showOption] = React.useState(null);

  return (
    <div className="py-14">
      <div className="max-w-3xl w-full m-auto ">
        <h1 className="text-3xl font-extrabold text-black text-center">
          Create New Chatbot
        </h1>
        <div className="py-12">
          <form>
            <div className="m-auto max-w-sm">
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
                <canvas className="m-auto py-2" />
                <label className=" text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Upload Files
                </label>
                <p className="text-sm text-gray-600 text-center">
                  Attach a file to see how many characters are in it
                </p>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50 focus:outline-none"
                  aria-describedby="file_input_help"
                  id="file_input"
                  type="file"
                  multiple
                  name="myfile"
                  accept=".doc,.docx,.txt,.pdf"></input>
                <p
                  className="mt-1 text-sm text-center text-gray-500 dark:text-gray-300"
                  id="file_input_help">
                  NOTE: Uploading a PDF using safari doesn&apost work, we&aposre
                  looking into the issue.Make sure the text is OCR&aposd, i.e.
                  you can copy it.
                </p>
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
            {/* <>
              <h2 className="text-center text-lg font-semibold mt-10">
                Data source
              </h2>
              <div className="flex flex-col max-w-sm m-auto justify-center my-10">
                <button
                  data-variant="flat"
                  onClick={() => console.log("files")}
                  className="mb-8 w-full rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-800 bg-black">
                  Files
                </button>
                <button
                  data-variant="flat"
                  onClick={() => console.log("text")}
                  className="mb-8 w-full rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-800 bg-black">
                  Text
                </button>
                <button
                  data-variant="flat"
                  onClick={() => console.log("website")}
                  className="mb-8 w-full rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-800 bg-black">
                  Websites
                </button>
              </div>
            </> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNewChatBot;
