import { Chat } from "@/components/Chat/Chat";
import React from "react";

const ChatDashoard = () => {
  const [messages, setMessages] = React.useState<any>([
    {
      role: "assistant",
      content: `Hi there! I'm Chatbot UI, an AI assistant. I can help you with things like answering questions, providing information, and helping with tasks. How can I help you?`,
    },
  ]);
  const [loading, setLoading] = React.useState(false);

  // send api request
  const handleSend = (msg: any) => {
    console.log("sending message...");
    setLoading(true);
    setTimeout(() => setMessages((arg: any) => [...arg, msg]), 2000);
    setLoading(false);
    // process message
  };

  const handleReset = () => {
    setMessages([
      {
        role: "assistant",
        content: `Hi there! I'm Chatbot UI, an AI assistant. I can help you with things like answering questions, providing information, and helping with tasks. How can I help you?`,
      },
    ]);
  };
  return (
    <div className="">
      <Chat
        loading={loading}
        messages={messages}
        onSend={handleSend}
        onReset={handleReset}
      />
      {/* <div ref={messagesEndRef} /> */}
    </div>
  );
};

export default ChatDashoard;
