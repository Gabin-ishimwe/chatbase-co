import ChatBotLayout, { ChatContext } from "@/components/ChatBotLayout";
import ChatDashoard from "@/components/UI/chat-dashboard";
import { useRouter } from "next/router";
import React from "react";

const Chatbot = (props: any) => {
  const router = useRouter();
  const context = React.useContext(ChatContext);
  const navItems = [
    {
      name: "chat",
      path: "chatbot",
    },
    {
      name: "Settings",
      path: "chatbot/settings",
    },
    {
      name: "Dashboard",
      path: "chatbot/dashboard",
    },
    {
      name: "Manage Resources",
      path: "chatbot/manage-source",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full m-auto">
        <ChatBotLayout result={{}}>
          <div className="py-4">
            <ChatDashoard />
          </div>
        </ChatBotLayout>
      </div>
    </div>
  );
};

export default Chatbot;
