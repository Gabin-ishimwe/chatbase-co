import {
  deleteOneUserBot,
  fetchOneUserBot,
  shareChatBot,
} from "@/api/chatBots";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import DeleteChatbot from "./UI/DeleteChatbot";
import ShareBotModal from "./UI/ShareBotModal";
import ShareChatbot from "./UI/ShareChatbot";

const ChatbotHoc = (Component: any) => {
  const FullPage = ({ token, ...props }: any) => {
    const [data, setData] = React.useState<any>(null);
    const route = useRouter();
    const botId = route.query.id;
    const navItems = [
      {
        name: "chat",
        path: `/chatbot/${botId}`,
      },
      {
        name: "Settings",
        path: `/chatbot/${botId}/settings`,
      },
      {
        name: "Dashboard",
        path: `/chatbot/${botId}/dashboard`,
      },
      {
        name: "Manage Resources",
        path: `/chatbot/${botId}/manage-source`,
      },
    ];
    const [toast, setToast] = React.useState(false);
    const [toastColor, setToastColor] = React.useState(false);
    const changeToast = () => setToast((toast) => (toast = false));
    const [deleteModal, setDeleteModal] = React.useState(false);
    const [shareModal, setShareModal] = React.useState(false);
    const [publicModal, setPublicModal] = React.useState(false);
    const [toastMessage, setToastMessage] = React.useState("");
    const handleDeleteModal = () => {
      setDeleteModal(false);
    };
    const handleShareModal = () => {
      setShareModal(false);
    };
    const handlePublicModal = () => {
      setPublicModal(false);
    };
    const fetchBotQuery = useQuery({
      queryKey: ["oneUserBots", token],
      queryFn: () => fetchOneUserBot({ token: token, id: botId as string }),
      onSuccess: (res) => {
        console.log("data fetched ", res);
        if (res.message == "User bot") {
          setData(res.data);
        } else {
          console.log(res);
        }
      },
    });
    const deleteBotMutation = useMutation({
      mutationFn: deleteOneUserBot,
      onSuccess: (data) => {
        if (data.message == "Chatbot deleted") {
          route.push("/my-chatbots");
        } else {
          // bad toast
          setToastMessage((msg) => (msg = data.message));
          setToastColor(false);
          setToast(true);
          console.log("req", data);
        }
      },
    });
    const shareBotMutation = useMutation({
      mutationFn: shareChatBot,
      onSuccess: (data) => {
        if (data.message == "Bot shared public") {
          setShareModal(false);
          setPublicModal(true);
        } else {
          // bad toast
          setToastMessage((msg) => (msg = data.message));
          setToastColor(false);
          setToast(true);
          console.log("req", data);
        }
      },
    });
    return (
      <div className="max-w-6xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8">
        {toast && (
          <div className="absolute top-14 right-0 -translate-x-1/2">
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
        <DeleteChatbot
          isOpen={deleteModal}
          closeModal={handleDeleteModal}
          onDelete={() => {
            deleteBotMutation.mutate({
              token: token,
              id: botId as string,
            });
          }}
          mutationFn={deleteBotMutation}
        />

        <ShareChatbot
          isOpen={shareModal}
          closeModal={handleShareModal}
          share={() => {
            shareBotMutation.mutate({
              token: token,
              id: botId as string,
            });
          }}
          mutationFn={shareBotMutation}
        />
        <ShareBotModal
          isOpen={publicModal}
          closeModal={handlePublicModal}
          url={
            process.env.NEXT_PUBLIC_FRONTEND_URL + `/chatbot/${botId}/preview`
          }
        />
        <div className="max-w-4xl w-full m-auto">
          <div className="flex justify-center pb-8">
            <div>
              <h1 className=" text-2xl md:text-3xl font-extrabold text-black text-center mb-5">
                {data ? data.name : "Untitled"}
              </h1>
              <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.path}
                    className={`${
                      item.path == route.pathname
                        ? "border-indigo-500 text-gray-900"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 "
                    }   inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium`}>
                    {item.name}
                  </Link>
                ))}
                <button className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">
                  Embed on website
                </button>
                <button
                  onClick={() => {
                    console.log("share====");
                    setShareModal(true);
                  }}
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">
                  Share Chatbot
                </button>
                <button
                  onClick={() => {
                    console.log("delete==");
                    setDeleteModal(true);
                  }}
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">
                  Delete Chatbot
                </button>
              </div>
            </div>
          </div>
          <div className="py-4">
            {!fetchBotQuery.isLoading && (
              <Component {...props} data={data} token={token} />
            )}
          </div>
        </div>
      </div>
    );
  };
  return FullPage;
};

export default ChatbotHoc;
