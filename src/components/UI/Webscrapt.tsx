import { createChatbotWithWeblinks } from "@/api/createChatBot";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";

type Props = {
  changeOption: (value: string) => void;
};

const Webscrapt = ({ changeOption }: Props) => {
  const route = useRouter();
  const [toast, setToast] = React.useState(false);
  const changeToast = () => setToast((toast) => (toast = false));
  const [toastMessage, setToastMessage] = React.useState("");
  const [toastColor, setToastColor] = React.useState(false);
  const [formValid, setFormValid] = React.useState(false);

  const createChatMutation = useMutation({
    mutationFn: createChatbotWithWeblinks,
    onSuccess: (data, variables, context) => {
      if (data.message == "Chatbot created") {
        console.log(data);
        route.push("/my-chatbots");
      } else {
        console.log(data);
        console.log(variables);
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
    const token = localStorage.getItem("AUTH_TOKEN");
    console.log(inputs);
    const fetchSites = inputs.map((val) => val.value);
    createChatMutation.mutate({
      body: { fetchSites, fetchType: "website" },
      token: token as string,
    });
  };
  const [inputs, setInputs] = React.useState([{ value: "" }]);
  const addInput = () => {
    setInputs((input) => [...input, { value: "" }]);
  };

  const validateUrl = (url: string) => {
    const regex = new RegExp(
      "^(http://www.|https://www.|ftp://www.|www.){1}([0-9A-Za-z]+(-[0-9A-Za-z]+)*.)+[a-z]{2,}$",
      "g"
    );
    return regex.test(url);
  };
  const handleRemoveInput = (index: number) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };
  React.useEffect(() => {
    const isFormValid = inputs.every((input) =>
      /^((http|https):\/\/)?[a-zA-Z0-9./?#-]+.[a-zA-Z0-9]{2,20}$/i.test(
        input.value
      )
    );
    setFormValid(isFormValid);
  }, [inputs]);
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
      <div>
        <button
          onClick={() => changeOption("")}
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
          {/* <label className="block text-sm font-medium leading-6 text-gray-900 my-2">
            Crawl
          </label> */}
          {/* <div className="relative mt-2 rounded-md">
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
          </div> */}
          {/* <div className="flex items-center my-4">
            <hr className="w-full border-gray-300 border-t" />
            <span className="px-2 text-gray-600 whitespace-nowrap">OR</span>
            <hr className="w-full border-gray-300 border-t" />
          </div> */}
          {/* <div>
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
          </div> */}
          <div className="mt-4">
            <label
              htmlFor="exluded_urls"
              className="block text-sm font-medium leading-6 text-gray-900 my-2">
              Links to include
            </label>
            <div className="my-2 flex justify-end">
              <button
                type="button"
                onClick={addInput}
                className="flex items-center rounded-md border border-transparent bg-zinc-200 py-1 px-2 text-sm font-medium text-black shadow-sm hover:bg-zinc-300">
                Add
              </button>
            </div>
            {inputs.map((input, index) => (
              <>
                <div className="flex space-x-2 mt-4" key={index}>
                  <input
                    key={index}
                    type="url"
                    name="website"
                    className=" flex-auto rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                    placeholder="https://www.example.com"
                    value={inputs[index].value}
                    onChange={(e) => {
                      const newInputs = [...inputs];
                      newInputs[index].value = e.target.value;
                      setInputs(newInputs);
                    }}
                  />
                  {index > 0 && (
                    <button
                      onClick={() => handleRemoveInput(index)}
                      type="button"
                      className=" w-38 rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6">
                      {" "}
                      {/* + Fetch More Links */}
                      <MdOutlineDeleteOutline className="text-xl text-red-500" />
                    </button>
                  )}
                </div>
                {!validateUrl(inputs[index].value as string) && (
                  <p className="block text-sm text-red-400">Invalid URL</p>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="py-8 max-w-sm m-auto">
        <button
          data-variant="flat"
          disabled={!formValid}
          onClick={(e) => {
            e.preventDefault();
            console.log(inputs);
            handleSubmit();
            // route.push("/chatbot");
          }}
          className="mb-8 w-full rounded-md py-2 text-sm font-semibold text-white text-center bg-black"
          type="submit">
          {createChatMutation.isLoading ? "Loading..." : "Create Chatbot"}
        </button>
      </div>
    </>
  );
};

export default Webscrapt;
