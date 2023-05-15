import React, { FC } from "react";
import { ChatInput } from "./ChatInput";
import { ChatLoader } from "./ChatLoader";
import { ChatMessage } from "./ChatMessage";
import { ResetChat } from "./ResetChat";

interface Props {
  messages: any;
  loading: boolean;
  onSend: (message: any) => void;
  onReset: () => void;
  messageColor?: string;
  bgColor?: string;
}

export const Chat: FC<Props> = ({
  messages,
  loading,
  onSend,
  onReset,
  messageColor,
  bgColor,
}) => {
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  console.log("load state ", loading);
  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <>
      <div className="flex flex-row justify-between items-center mb-4 sm:mb-4">
        <ResetChat onReset={onReset} />
      </div>

      <div
        className={`relative flex flex-col justify-between rounded-lg px-2 sm:p-4 sm:border min-h-[300px] overflow-auto border-neutral-300 ${
          bgColor == "light" ? "bg-white" : "bg-black"
        }`}
        id="move">
        {messages.map((message: any, index: any) => (
          <div key={index} className="my-1 sm:my-1.5">
            <ChatMessage message={message} messageColor={messageColor} />
          </div>
        ))}

        {loading && (
          <div className="my-1 sm:my-1.5">
            <ChatLoader />
          </div>
        )}

        <div ref={messagesEndRef} />
        <div className="mt-4 sm:mt-8 bottom-[56px] left-0 w-full">
          <ChatInput onSend={onSend} />
        </div>
      </div>
    </>
  );
};
