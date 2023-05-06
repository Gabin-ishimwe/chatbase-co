import Link from "next/link";
import { useRouter } from "next/router";

const ManagedSource = () => {
  const router = useRouter();
  const navItems = [
    {
      name: "chat",
      path: "../chatbot",
    },
    {
      name: "Settings",
      path: "settings",
    },
    {
      name: "Dashboard",
      path: "dashboard",
    },
    {
      name: "Manage Resources",
      path: "manage-source",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full m-auto">
        <div className="flex justify-center pb-8">
          <div>
            <h1 className=" text-2xl md:text-3xl font-extrabold text-black text-center mb-5">
              Title of Bot
            </h1>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className={`${
                    item.path == router.pathname
                      ? "border-indigo-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 "
                  }   inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium`}>
                  {item.name}
                </Link>
              ))}
              <button className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">
                Embed on website
              </button>
              <button className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">
                Share Chatbot
              </button>
              <button className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">
                Delete Chatbot
              </button>
            </div>
          </div>
        </div>
        <div className="py-4">
          <h1>Managed source</h1>
        </div>
      </div>
    </div>
  );
};

export default ManagedSource;
