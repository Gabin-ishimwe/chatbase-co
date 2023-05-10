import { FC } from "react";

interface Props {
  message: any;
}

export const ChatMessage: FC<Props> = ({ message }) => {
  // const messagesEndRef = React.useRef<HTMLDivElement>(null);
  // const scrollToBottom = () => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // };
  // React.useEffect(() => {
  //   scrollToBottom();
  // }, [message]);
  return (
    <div
      className={`flex flex-col ${
        message.role === "assistant" ? "items-start" : "items-end"
      }`}>
      <div
        className={`flex items-center ${
          message.role === "assistant"
            ? "bg-neutral-200 text-neutral-900"
            : "bg-blue-500 text-white"
        } rounded-xl px-3 py-2 max-w-[67%] whitespace-pre-wrap`}
        style={{ overflowWrap: "anywhere" }}>
        {message.content}
      </div>
    </div>
  );
};
