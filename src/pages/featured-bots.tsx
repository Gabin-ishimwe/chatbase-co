import Link from "next/link";

const FeaturedBots = () => {
  return (
    <div className="pt-14 pb-72">
      <div className="max-w-4xl w-full m-auto flex justify-between items-center">
        <h1 className=" text-2xl md:text-3xl font-extrabold text-black">
          Featured Chatbots
        </h1>
      </div>
      <div className="py-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl w-full m-auto my-8">
          <Link href={"#"}>
            <div className="flex space-x-2 items-center max-h-[200px] border rounded p-2">
              <div className="w-12 h-12 rounded-full bg-cover bg-center bg-[url('../../public/images/quran.png')] flex-none"></div>
              <div className="flex-initial">
                <h3 className="text-xs md:text-sm font-semibold text-center overflow-hidden">
                  Quran
                </h3>
                <p className="text-xs md:text-sm text-center overflow-hidden text-zinc-500">
                  Quran chatbot
                </p>
              </div>
            </div>
          </Link>
          <Link href={"#"}>
            <div className="flex space-x-2 items-center max-h-[200px] border rounded p-2">
              <div className="w-12 h-12 rounded-full bg-cover bg-center bg-[url('../../public/images/user-photo1.png')] flex-none"></div>
              <div className="flex-initial">
                <h3 className="text-xs md:text-sm font-semibold text-center overflow-hidden">
                  Paul Graham
                </h3>
                <p className="text-xs md:text-sm text-center overflow-hidden text-zinc-500">
                  Funny memes and videos chatbot
                </p>
              </div>
            </div>
          </Link>
          <Link href={"#"}>
            <div className="flex space-x-2 items-center max-h-[200px] border rounded p-2">
              <div className="w-12 h-12 rounded-full bg-cover bg-center bg-[url('../../public/images/user-photo2.png')] flex-none"></div>
              <div className="flex-initial">
                <h3 className="text-xs md:text-sm font-semibold text-center overflow-hidden">
                  Paul Graham
                </h3>
                <p className="text-xs md:text-sm text-center overflow-hidden text-zinc-500">
                  Business and entreprise chatbot
                </p>
              </div>
            </div>
          </Link>
          <Link href={"#"}>
            <div className="flex space-x-2 items-center max-h-[200px] border rounded p-2">
              <div className="w-12 h-12 rounded-full bg-cover bg-center bg-[url('../../public/images/user-photo2.png')] flex-none"></div>
              <div className="flex-initial">
                <h3 className="text-xs md:text-sm font-semibold text-center overflow-hidden">
                  Paul Graham
                </h3>
                <p className="text-xs md:text-sm text-center overflow-hidden text-zinc-500">
                  Business and entreprise chatbot
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBots;
