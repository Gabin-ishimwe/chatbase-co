import ChatBotLayout from "@/components/ChatBotLayout";

const Dashboard = () => {
  return (
    <div className="max-w-6xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8">
      <ChatBotLayout result={{}}>
        <div>
          <div className="flex items-center my-4">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Conversations
            </h3>
          </div>
          <div className="flex flex-col space-y-12 sm:flex-row sm:space-x-8 sm:space-y-0 ">
            <div className=" w-full sm:w-[24rem] ">
              <div>Date Picker</div>
              <button
                data-variant="flat"
                className="rounded-md py-2 font-medium text-white text-center bg-black px-4 mt-4 w-full"
                type="button">
                {" "}
                Export conversation in date range
              </button>
              <div className="max-h-[34rem] overflow-auto border rounded mt-4 w-full">
                <ul role="list" className="divide-y divide-gray-200 w-full">
                  <li className="relative bg-white py-5 px-4   hover:bg-zinc-100">
                    <div className="flex justify-between space-x-3">
                      <div className="min-w-0 flex-1 cursor-pointer">
                        <span
                          className="absolute inset-0"
                          aria-hidden="true"></span>
                        <p className="truncate text-sm text-gray-500">
                          User: are you sure
                        </p>
                      </div>
                      <time
                        dateTime="2023-05-10T15:03:59.92584+00:00"
                        className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">
                        <span>31 minutes ago</span>
                      </time>
                    </div>
                    <div className="mt-1">
                      <p className="text-sm text-black line-clamp-2">
                        Bot: Yes, I am an AI assistant programmed to provide
                        answers based on the given information. How can I assist
                        you?
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ChatBotLayout>
    </div>
  );
};

export default Dashboard;
