import AuthComponent from "@/components/AuthComponent";
import ChatbotHoc from "@/components/ChatbotHoc";
import { AiFillDelete } from "react-icons/ai";

const ManagedSource = () => {
  return (
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
            NOTE: Uploading a PDF using safari doesn&apos;t work, we&apos;re
            looking into the issue. Make sure the text is OCR&apos;d, i.e. you
            can copy it.
          </p>
        </div>
        <div className="pt-8">
          <p className="font-semibold">Arleady included files:</p>
          <div className="flex justify-between space-x-3">
            <p>
              Evelyne Umubyeyi_Gabin Ishimwe_Adrine Uwera_Emile
              Kamana_final_project.pdf{" "}
              <span className="text-zinc-500 text-sm">(1513 chars)</span>
            </p>
            <AiFillDelete className="text-red-600 text-3xl hover:cursor-pointer" />
          </div>
        </div>
      </div>
      <div className=" mt-8 max-w-lg m-auto p-4 rounded border">
        <div className=" ">Included sources:</div>
        <p className="py-1 text-sm text-zinc-700">1 Files (1513 chars) </p>
        <button
          data-variant="flat"
          className="rounded-md py-2 font-medium text-white text-center bg-black px-4 mt-4 w-full"
          type="button">
          {" "}
          Retrain Chatbot
        </button>
      </div>
    </div>
  );
};

export default AuthComponent(ChatbotHoc(ManagedSource));
