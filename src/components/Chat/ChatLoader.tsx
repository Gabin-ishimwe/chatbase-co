// import { IconDots } from "@tabler/icons-react";
import { FC } from "react";
import { BsThreeDots } from "react-icons/bs";

interface Props {}

export const ChatLoader: FC<Props> = () => {
  return (
    <div className="flex flex-col flex-start">
      <div
        className={`flex items-center bg-neutral-200 text-neutral-900 rounded-2xl px-4 py-2 w-fit`}
        style={{ overflowWrap: "anywhere" }}>
        <BsThreeDots className="animate-pulse" />
      </div>
    </div>
  );
};
