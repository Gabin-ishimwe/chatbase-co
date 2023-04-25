import FileUpload from "@/components/UI/File";
import TextUpload from "@/components/UI/TextUpload";
import Webscrapt from "@/components/UI/Webscrapt";
import React from "react";

const CreateNewChatBot = () => {
  const [option, setOption] = React.useState("");

  const handleChangeOption = (option: string) => {
    setOption((value) => (value = option));
  };

  type Form = {
    [x: string]: JSX.Element;
  };

  const forms: Form = {
    fileUpload: <FileUpload changeOption={handleChangeOption} />,
    textUpload: <TextUpload changeOption={handleChangeOption} />,
    webScraping: <Webscrapt changeOption={handleChangeOption} />,
  };

  return (
    <div className="py-14">
      <div className="max-w-3xl w-full m-auto ">
        <h1 className="text-3xl font-extrabold text-black text-center">
          Create New Chatbot
        </h1>
        <div className="py-12">
          <form>
            {option ? (
              forms[option]
            ) : (
              <>
                <h2 className="text-center text-lg font-semibold mt-10">
                  Data source
                </h2>
                <div className="flex flex-col max-w-sm m-auto justify-center my-10">
                  <button
                    data-variant="flat"
                    onClick={() => handleChangeOption("fileUpload")}
                    className="mb-8 w-full rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-800 bg-black">
                    Files
                  </button>
                  <button
                    data-variant="flat"
                    onClick={() => handleChangeOption("textUpload")}
                    className="mb-8 w-full rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-800 bg-black">
                    Text
                  </button>
                  <button
                    data-variant="flat"
                    onClick={() => handleChangeOption("webScraping")}
                    className="mb-8 w-full rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-800 bg-black">
                    Websites
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNewChatBot;
