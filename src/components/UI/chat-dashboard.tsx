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

  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  // fetch
  const handleSend = () => {
    console.log("sending message...");
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
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatDashoard;
