import { createChatbot } from "@/api/createChatBot";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  changeOption: (value: string) => void;
};
const FileUpload = ({ changeOption }: Props) => {
  const route = useRouter();
  const [file, setFile] = React.useState<File | null>(null);
  const [toast, setToast] = React.useState(false);
  const changeToast = () => setToast((toast) => (toast = false));
  const [toastMessage, setToastMessage] = React.useState("");
  const [toastColor, setToastColor] = React.useState(false);
  const createChatMutation = useMutation({
    mutationFn: createChatbot,
    onSuccess: (data, variables, context) => {
      if (data.message == "Chatbot created") {
        console.log(data);
        route.push("/my-chatbots");
      } else {
        setToastMessage((msg) => (msg = data.message));
        setToastColor(false);
        setToast(true);
      }
    },
    onError(error, variables, context) {
      console.log("error", error);
    },
  });

  const handleSubmit = () => {
    const data = new FormData();
    data.append("fetchType", "file");
    data.append("file", file as any);
    const token = localStorage.getItem("AUTH_TOKEN") as string;

    createChatMutation.mutate({ formData: data, token });
  };
  React.useLayoutEffect(() => {
    if (localStorage.getItem("AUTH_TOKEN")) return;
    route.push("/signin");
  }, []);
  return (
    <>
      {toast && (
        // <div className="absolute bottom-14 left-1/2 -translate-x-1/2">
        <div className="absolute bottom-14 right-0 -translate-x-1/2">
          <div
            className={
              toastColor
                ? "max-w-xs bg-green-500 text-sm text-white rounded-md shadow-lg"
                : "max-w-xs bg-red-500 text-sm text-white rounded-md shadow-lg"
            }
            role="alert">
            <div className="flex p-4 gap-4 items-center justify-between">
              <p className="grow">{toastMessage}</p>
              <div className="ml-auto">
                <button
                  type="button"
                  onClick={changeToast}
                  className={
                    toastColor
                      ? "inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-md text-white/[.5] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-green-500 transition-all text-sm dark:focus:ring-offset-green-500 dark:focus:ring-green-700"
                      : "inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-md text-white/[.5] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-800 focus:ring-red-500 transition-all text-sm dark:focus:ring-offset-red-500 dark:focus:ring-red-700"
                  }>
                  <span className="sr-only">Close</span>
                  <svg
                    className="w-3.5 h-3.5"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="m-auto max-w-sm">
        <button
          type="button"
          onClick={() => changeOption("")}
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
          {/* <canvas className="m-auto py-2" /> */}
          {file && (
            <iframe
              src={URL.createObjectURL(file)}
              width="200px"
              height="300px"
              className="mx-auto"
            />
          )}
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
            name="myfile"
            accept=".doc,.docx,.txt,.pdf"
            onChange={(e) => {
              const reader = new FileReader();
              setFile(e.target.files && e.target.files[0]);
              // When the FileReader has finished loading the file
              reader.onloadend = () => {
                // Use the result to display the PDF preview
                const pdfPreview = reader.result;
                console.log(pdfPreview);
              };

              // Read the file as a Data URL
              if (e.target.files) reader.readAsDataURL(e.target.files[0]);
            }}></input>
          <p
            className="mt-1 text-sm text-center text-gray-500 dark:text-gray-300"
            id="file_input_help">
            NOTE: Uploading a PDF using safari doesn&apost work, we&aposre
            looking into the issue.Make sure the text is OCR&aposd, i.e. you can
            copy it.
          </p>
        </div>
      </div>
      <div className="py-8 max-w-sm m-auto">
        <button
          data-variant="flat"
          className="mb-8 w-full rounded-md py-2 text-sm font-semibold text-white text-center bg-black"
          disabled={!file}
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          type="submit">
          {createChatMutation.isLoading ? "Loading..." : "Create Chatbot"}
        </button>
      </div>
    </>
  );
};

export default FileUpload;
