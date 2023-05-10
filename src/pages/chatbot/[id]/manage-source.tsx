import ChatBotLayout from "@/components/ChatBotLayout";

const ManagedSource = () => {
  return (
    <div className="max-w-6xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full m-auto">
        <ChatBotLayout result={{}}>
          <div>
            <div className="pb-8">
              <div className=" text-center space-x-8">
                <button className="border-indigo-500 text-gray-900 border-b-2 px-1 pt-1 text-sm font-medium">
                  Files
                </button>
                <button className="border-indigo-500 text-gray-900 border-b-2 px-1 pt-1 text-sm font-medium">
                  Text
                </button>
                <button className="border-indigo-500 text-gray-900 border-b-2 px-1 pt-1 text-sm font-medium">
                  Website
                </button>
              </div>
            </div>
            <div className="max-w-md m-auto">
              <div>
                <canvas className="m-auto my-2"></canvas>
                <label className=" text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Upload More Files
                </label>
                <p className="text-sm text-gray-600 text-center">
                  Attach a file to see how many characters are in it
                </p>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50 focus:outline-none"
                  aria-describedby="file_input_help"
                  id="file_input"
                  type="file"
                  name="myfile"
                  accept=".doc,.docx,.txt,.pdf"></input>
                <p
                  className="mt-1 text-sm text-center text-gray-500 dark:text-gray-300"
                  id="file_input_help">
                  NOTE: Uploading a PDF using safari doesn&apos;t work,
                  we&apos;re looking into the issue. Make sure the text is
                  OCR&apos;d, i.e. you can copy it.
                </p>
              </div>
            </div>
          </div>
        </ChatBotLayout>
      </div>
    </div>
  );
};

export default ManagedSource;
