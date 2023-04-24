import Image from "next/image";
import Link from "next/link";
import quran from "../../public/images/quran.png";
import userPhoto1 from "../../public/images/user-photo1.png";
import userPhoto2 from "../../public/images/user-photo2.png";

const FeaturedBots = () => {
  return (
    <div className="pt-14">
      <div className="max-w-3xl w-full m-auto flex justify-between items-center">
        <h1 className=" text-2xl md:text-3xl font-extrabold text-black">
          Featured Chatbots
        </h1>
      </div>
      <div className="py-4">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-8 max-w-3xl w-full m-auto my-8">
          <Link href={"#"}>
            <div className="flex flex-col justify-between h-full border rounded relative">
              <div className="flex flex-col justify-between h-full border rounded relative">
                <Image
                  src={userPhoto1}
                  width={200}
                  height={280}
                  alt={""}
                  className="m-auto"
                />
              </div>
              <div className="px-1">
                <h3 className="text-xs md:text-sm my-2 font-semibold text-center overflow-hidden">
                  Naval Ravinkat
                </h3>
              </div>
            </div>
          </Link>
          <Link href={"#"}>
            <div className="flex flex-col justify-between h-full border rounded relative">
              <div className="flex flex-col justify-between h-full border rounded relative">
                <Image
                  src={userPhoto2}
                  width={200}
                  height={280}
                  alt={""}
                  className="m-auto"
                />
              </div>
              <div className="px-1">
                <h3 className="text-xs md:text-sm my-2 font-semibold text-center overflow-hidden">
                  Paul Graham
                </h3>
              </div>
            </div>
          </Link>
          <Link href={"#"}>
            <div className="flex flex-col justify-between h-full border rounded relative">
              <div className="flex flex-col justify-between h-full border rounded relative">
                <Image
                  src={quran}
                  width={200}
                  height={280}
                  alt={""}
                  className="m-auto"
                />
              </div>
              <div className="px-1">
                <h3 className="text-xs md:text-sm my-2 font-semibold text-center overflow-hidden">
                  Paul Graham
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBots;
