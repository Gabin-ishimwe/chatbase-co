import { FC } from "react";

interface Props {
  message: any;
  messageColor?: string;
}

export const ChatMessage: FC<Props> = ({ message, messageColor }) => {
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
        className={`flex items-center rounded-xl px-3 py-2 max-w-[67%] whitespace-pre-wrap`}
        style={{
          overflowWrap: "anywhere",
          backgroundColor:
            message.role == "assistant" ? "rgb(229 229 229)" : messageColor,
        }}>
        {message.content}
      </div>
    </div>
  );
};
