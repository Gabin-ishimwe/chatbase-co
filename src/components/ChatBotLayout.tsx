import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const ChatContext = React.createContext(null);
const ChatBotLayout = ({
  children,
  result,
}: {
  children: JSX.Element;
  result: any;
}) => {
  const router = useRouter();
  const botId = router.query.id;
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
  return (
    <ChatContext.Provider value={result}>
      <div className="max-w-4xl w-full m-auto">
        <div className="flex justify-center pb-8">
          <div>
            <h1 className=" text-2xl md:text-3xl font-extrabold text-black text-center mb-5">
              {result.data ? result.data.name : "Untitled"}
            </h1>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className={`${
                    item.path == router.pathname
                      ? "border-indigo-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 "
                  }   inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium`}>
                  {item.name}
                </Link>
              ))}
              <button className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">
                Embed on website
              </button>
              <button className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">
                Share Chatbot
              </button>
              <button className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">
                Delete Chatbot
              </button>
            </div>
          </div>
        </div>
        <div className="py-4">{children}</div>
      </div>
    </ChatContext.Provider>
  );
};

export const getServerSideProps = async (context: any) => {
  const urlToken = decodeURIComponent(context.query.token);
  const botId = decodeURIComponent(context.params.id);
  const res = await fetch(
    "https://chatbase-be.onrender.com/api/v1/chatbot/" + botId,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${urlToken}`,
      },
    }
  );
  const data = await res.json();
  if (data.message === "User bot")
    return {
      props: {
        result: {
          data,
          error: null,
        },
      },
    };

  return {
    props: {
      result: {
        data: null,
        error: data,
      },
    },
  };
};

export default ChatBotLayout;
