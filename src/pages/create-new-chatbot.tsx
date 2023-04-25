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
            <>
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
            </>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNewChatBot;
