import { FC } from "react";
import { ChatInput } from "./ChatInput";
import { ChatLoader } from "./ChatLoader";
import { ChatMessage } from "./ChatMessage";
import { ResetChat } from "./ResetChat";

interface Props {
  messages: any;
  loading: boolean;
  onSend: (message: any) => void;
  onReset: () => void;
}

export const Chat: FC<Props> = ({ messages, loading, onSend, onReset }) => {
  return (
    <>
      <div className="flex flex-row justify-between items-center mb-4 sm:mb-4">
        <ResetChat onReset={onReset} />
      </div>

      <div className="flex flex-col justify-between rounded-lg px-2 sm:p-4 sm:border min-h-[500px] border-neutral-300">
        {messages.map((message: any, index: any) => (
          <div key={index} className="my-1 sm:my-1.5">
            <ChatMessage message={message} />
          </div>
        ))}

        {loading && (
          <div className="my-1 sm:my-1.5">
            <ChatLoader />
          </div>
        )}

        <div className="mt-4 sm:mt-8 bottom-[56px] left-0 w-full">
          <ChatInput onSend={onSend} />
        </div>
      </div>
    </>
  );
};
