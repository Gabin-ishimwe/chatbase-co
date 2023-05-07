import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const MyChatBot = () => {
  const route = useRouter();

  React.useEffect(() => {
    if (localStorage.getItem("AUTH_TOKEN")) return;
    route.push("/signin");
  }, []);
  return (
    <div className="pt-14 pb-72">
      <div className="max-w-3xl w-full m-auto flex justify-between items-center">
        <h1 className=" text-2xl md:text-3xl font-extrabold text-black">
          My Chatbots{" "}
          <span className="text-sm font-normal">(1 chatbots limit)</span>
        </h1>
      </div>
      <div className="py-4">
        <div className="py-16">
          <div className="flex justify-center">
            <Link href="/create-new-chatbot">
              <button
                data-variant="flat"
                className="rounded-md py-2 text-sm text-white text-center bg-black px-4"
                type="button">
                {" "}
                New Chatbot
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyChatBot;
