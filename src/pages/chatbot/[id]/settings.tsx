import { fetchOneUserBot } from "@/api/chatBots";
import { getObjectAsFormData, updateChatbot } from "@/api/updateChatBot";
import { ChatInput } from "@/components/Chat/ChatInput";
import { ChatContext } from "@/components/ChatBotLayout";
import DeleteChatbot from "@/components/UI/DeleteChatbot";
import ShareChatbot from "@/components/UI/ShareChatbot";
import { chatbotReducer, initialState } from "@/state/chatbotState";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { SketchPicker } from "react-color";
import { AiFillCaretDown } from "react-icons/ai";

const Settings = () => {
  const route = useRouter();
  const botId = route.query.id;
  const [token, setToken] = React.useState("");
  const context = React.useContext(ChatContext);
  const [data, setData] = React.useState<any>(null);
  const [color, setColor] = React.useState("#3b82f6");
  const [state, dispatch] = React.useReducer(chatbotReducer, initialState);
  const [showProfile, setShowProfile] = React.useState(true);
  const [toast, setToast] = React.useState(false);
  const [toastColor, setToastColor] = React.useState(false);
  const changeToast = () => setToast((toast) => (toast = false));
  const [toastMessage, setToastMessage] = React.useState("");
  const [deleteModal, setDeleteModal] = React.useState(false);
  const [shareModal, setShareModal] = React.useState(false);
  const handleDeleteModal = () => {
    setDeleteModal(false);
  };
  const handleShareModal = () => {
    setShareModal(false);
  };
  const fetchBotQuery = useQuery({
    queryKey: ["oneUserBots", token],
    queryFn: () => fetchOneUserBot({ token: token, id: botId as string }),
    onSuccess: (res) => {
      console.log("data fetched ", res);
      if (res.message == "User bot") {
        setData(res.data);
        dispatch({
          type: "FETCH_CHATBOT",
          payload: res.data,
        });
        setColor(state.data?.chatbotInterface.messageColor);
        console.log(state);
      } else {
        console.log(res);
        setToastMessage((msg) => (msg = res.message));
        setToastColor(false);
        setToast(true);
      }
    },
  });
  const updateBotMutation = useMutation({
    mutationFn: updateChatbot,
    onSuccess: (data) => {
      if (data.message == "Chatbot updated") {
        // send toast
        setToastMessage((msg) => (msg = data.message));
        setToastColor(true);
        setToast(true);
      } else {
        // bad toast
        setToastMessage((msg) => (msg = data.message));
        setToastColor(false);
        setToast(true);
        console.log("req", data);
      }
    },
  });
  const handleSubmit = () => {
    const formData = getObjectAsFormData(state.data, [
      "userId",
      "messages",
      "updatedAt",
      "createdAt",
      "apiKey",
      "id",
      "chatbotId",
      "embeddingCode",
    ] as never);
    const keys = Object.keys(state.data);

    console.log(formData);

    updateBotMutation.mutate({
      token,
      body: formData,
      botId: botId as string,
    });
  };
  const navItems = [
    {
      name: "chat",
      path: `/chatbot/${botId}`,
    },
    {
      name: "Settings",
      path: `/chatbot/${botId}/settings`,
    },
    {
      name: "Dashboard",
      path: `/chatbot/${botId}/dashboard`,
    },
    {
      name: "Manage Resources",
      path: `/chatbot/${botId}/manage-source`,
    },
  ];
  const [showPicker, setShowPicker] = React.useState(false);
  const handleChangeColor = (value: any) => {
    console.log(value.hex);
    dispatch({ type: "CHANGE_MESSAGE_COLOR", payload: value.hex });
    setColor(value.hex);
  };
  React.useEffect(() => {
    console.log("new state", state);
  }, [state]);
  React.useEffect(() => {
    if (!localStorage.getItem("AUTH_TOKEN")) route.push("/signin");
    setToken(localStorage.getItem("AUTH_TOKEN") as string);
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8">
      {toast && (
        <div className="absolute top-14 right-0 -translate-x-1/2">
          <div
            className={
              toastColor
                ? "max-w-xs bg-green-500 text-sm text-white rounded-md shadow-lg"
                : "max-w-xs bg-red-500 text-sm text-white rounded-md shadow-lg"
            }
            role="alert">
            <div className="flex p-4 gap-4 items-center justify-between">
              <p className="grow">{toastMessage}</p>
              <div className="ml-auto">
                <button
                  type="button"
                  onClick={changeToast}
                  className={
                    toastColor
                      ? "inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-md text-white/[.5] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-green-500 transition-all text-sm dark:focus:ring-offset-green-500 dark:focus:ring-green-700"
                      : "inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-md text-white/[.5] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-800 focus:ring-red-500 transition-all text-sm dark:focus:ring-offset-red-500 dark:focus:ring-red-700"
                  }>
                  <span className="sr-only">Close</span>
                  <svg
                    className="w-3.5 h-3.5"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <DeleteChatbot isOpen={deleteModal} closeModal={handleDeleteModal} />
      <ShareChatbot isOpen={shareModal} closeModal={handleShareModal} />
      <div className="max-w-4xl w-full m-auto">
        <div className="flex justify-center pb-8">
          <div>
            <h1 className=" text-2xl md:text-3xl font-extrabold text-black text-center mb-5">
              {data?.name}
            </h1>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className={`${
                    item.path == route.pathname
                      ? "border-indigo-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 "
                  }   inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium`}>
                  {item.name}
                </Link>
              ))}
              <button className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">
                Embed on website
              </button>
              <button
                onClick={() => setShareModal(true)}
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">
                Share Chatbot
              </button>
              <button
                onClick={() => setDeleteModal(true)}
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">
                Delete Chatbot
              </button>
            </div>
          </div>
        </div>
        {/* <ChatBotLayout result={{}}> */}
        {!fetchBotQuery.isLoading ? (
          <div className="py-4">
            <div className="pb-8">
              <label className="block text-sm font-medium text-gray-700">
                Chatbot ID
              </label>
              <div className="mt-1 font-semibold">{state.data?.chatbotId}</div>
            </div>
            <div className="pb-8">
              <label className="block text-sm font-medium text-gray-700">
                Number of characters
              </label>
              <div className="mt-1 font-semibold">1,463</div>
            </div>
            <div className="pb-8">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                  value={state.data?.name}
                  onChange={(e) =>
                    dispatch({ type: "CHANGE_NAME", payload: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="pb-8">
              <div className="flex justify-between">
                <label className="block text-sm font-medium text-gray-700">
                  Base Prompt (system message)
                </label>
                <button className="inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-200 py-1 px-2 text-sm font-medium text-black shadow-sm hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto">
                  Reset
                </button>
              </div>
              <div className="mt-1">
                <textarea
                  name="intructions"
                  rows={5}
                  className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                  maxLength={3000}>
                  I want you to act as a document that I am having a
                  conversation with. Your name is &quot;AI Assistant&quot;. You
                  will provide me with answers from the given info. If the
                  answer is not included, say exactly &quot;Hmm, I am not
                  sure.&quot; and stop after that. Refuse to answer any question
                  not about the info. Never break character.
                </textarea>
              </div>
            </div>
            <div className="pb-8">
              <label className="block text-sm font-medium text-gray-700">
                Model
              </label>
              <select
                id="model"
                name="model"
                onChange={(e) =>
                  dispatch({ type: "CHANGE_MODEL", payload: e.target.value })
                }
                className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900">
                <option
                  value="gpt-3.5-turbo"
                  selected={state.data?.model == "gpt-3.5-turbo"}>
                  gpt-3.5-turbo
                </option>
                <option value="gpt-4" selected={state.data?.model == "gpt-4"}>
                  gpt-4
                </option>
                <option
                  value="text-davinci-003"
                  selected={state.data?.model == "text-davinci-003"}>
                  text-davinci-003
                </option>
              </select>
            </div>
            <div className="pb-8">
              <label className="block text-sm font-medium text-gray-700">
                Visibilty
              </label>
              <select
                id="location"
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_VISIBILITY",
                    payload: !!e.target.value,
                  })
                }
                name="location"
                className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900">
                <option value={0} selected={!state.data?.isPublic}>
                  Private
                </option>
                {/* <option value="private_but_can_be_embedded">
                    Private but can be embedded on website
                  </option> */}
                <option value={1} selected={state.data?.isPublic}>
                  Public
                </option>
              </select>
              <p className="mt-2 text-sm text-zinc-500">
                &apos;Private&apos;: No one can access your chatbot except you
                (your account)
              </p>
              <p className="mt-2 text-sm text-zinc-500">
                &apos;Private but can be embedded on website&apos;: Other people
                can&apos;t access your chatbot if you send them the link, but
                you can still embed it on your website and your website visitors
                will be able to use it. (make sure to set your domains)
              </p>
              <p className="mt-2 text-sm text-zinc-500">
                &apos;Public&apos;: Anyone with the link can access it on
                chatbase.co and can be embedded on your website.
              </p>
              <p className="mt-2 text-sm text-zinc-500">
                Set to public if you want to be able to send a link of your
                chatbot to someone to try it.
              </p>
            </div>
            <div className="pb-8">
              <label className="block text-sm font-medium text-gray-700">
                Domains
              </label>
              <div className="mt-1">
                <textarea
                  name="domains"
                  value={state.data?.botLink}
                  placeholder="example.com"
                  onChange={(e) =>
                    dispatch({
                      type: "CHANGE_DOMAIN",
                      payload: e.target.value,
                    })
                  }
                  className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                  maxLength={400}></textarea>
                <p className="mt-2 text-sm text-zinc-500">
                  Enter each domain in a new line
                </p>
                <p className="mt-2 text-sm text-zinc-500">
                  Domains you want to embed your chatbot on. Your chatbot
                  visibility has to be &apos;Public&apos; or &apos;Private but
                  can be embedded on website&apos; for this to work.
                </p>
              </div>
            </div>
            <h4 className="mt-5 font-semibold text-lg">Chat Interface</h4>
            <h4 className="mb-8 text-sm text-zinc-600">
              applies when embedded on a website
            </h4>
            <div className="flex justify-between space-x-8 flex-col sm:flex-row">
              <div className="flex-1">
                <div className="pb-8">
                  <div className="flex justify-between">
                    <label className="block text-sm font-medium text-gray-700">
                      Initial Messages
                    </label>
                    <button
                      onClick={() =>
                        dispatch({
                          type: "RESET_INITIAL_MESSAGE",
                          payload: "Hi! What can I help you with?",
                        })
                      }
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-200 py-1 px-2 text-sm font-medium text-black shadow-sm hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto">
                      Reset
                    </button>
                  </div>
                  <div className="mt-1">
                    <textarea
                      name="initial_messages"
                      value={state.data?.chatbotInterface.initialMessage}
                      onChange={(e) =>
                        dispatch({
                          type: "CHANGE_INITIAL_MESSAGE",
                          payload: e.target.value,
                        })
                      }
                      className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                      maxLength={1000}></textarea>
                    <p className="mt-2 text-sm text-zinc-500">
                      Enter each message in a new line.
                    </p>
                  </div>
                </div>

                <div className="pb-8">
                  <label className="block text-sm font-medium text-gray-700">
                    Theme
                  </label>
                  <select
                    id="theme"
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_THEME",
                        payload: e.target.value,
                      })
                    }
                    name="theme"
                    className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900">
                    <option
                      value="light"
                      selected={state.data?.chatbotInterface.theme == "light"}>
                      light
                    </option>
                    <option
                      value="dark"
                      selected={state.data?.chatbotInterface.theme == "dark"}>
                      dark
                    </option>
                  </select>
                </div>
                {showProfile && (
                  <div className="pb-8">
                    <label className="block text-sm font-medium text-gray-700">
                      Update chatbot profile picture
                    </label>
                    <input
                      id="bot_profile_picture"
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        dispatch({
                          type: "CHANGE_PROFILE",
                          payload: e.target.files && e.target.files[0],
                        })
                      }
                      name="bot_profile_picture"
                      className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"></input>
                  </div>
                )}
                <div className="pb-8">
                  <label className="block text-sm font-medium text-gray-700">
                    Remove Chatbot Profile Picture
                  </label>
                  <input
                    type="checkbox"
                    checked={showProfile}
                    onChange={() => setShowProfile(!showProfile)}
                    name="should_remove_bot_profile_picture"
                    className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-600"></input>
                </div>
                <div className="pb-8">
                  <label className="block text-sm font-medium text-gray-700">
                    Display name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      onChange={(e) =>
                        dispatch({
                          type: "CHANGE_DISPLAY_NAME",
                          payload: e.target.value,
                        })
                      }
                      className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                      value={state.data?.chatbotInterface.displayName}
                    />
                  </div>
                </div>
                <div className="pb-8">
                  <div className="flex justify-between">
                    <label className="block text-sm font-medium text-gray-700">
                      User Message Color
                    </label>
                    <button
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-200 py-1 px-2 text-sm font-medium text-black shadow-sm hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto"
                      onClick={() => {
                        dispatch({
                          type: "RESET_MESSAGE_COLOR",
                          payload: "#3b82f6",
                        });
                        setColor("#3b82f6");
                      }}>
                      Reset
                    </button>
                  </div>

                  <div
                    onClick={() => setShowPicker(!showPicker)}
                    className="relative inline-flex items-center space-x-1 rounded-md border border-transparent bg-zinc-200 py-1 px-2 text-sm font-medium text-black shadow-sm hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto hover:cursor-pointer">
                    <div
                      className={`w-[50px] h-[50px] rounded-md`}
                      style={{ backgroundColor: color }}></div>
                    <AiFillCaretDown />
                  </div>
                  {showPicker && (
                    <div className="absolute pt-2 transation ease-in-out">
                      <SketchPicker
                        color={color}
                        onChange={handleChangeColor}
                      />
                    </div>
                  )}
                </div>
                <p className="text-sm text-zinc-900 pt-12 pb-10">
                  **If the changes here don&apos;t show up immediately on your
                  website try clearing your browser cache or use incognito. (New
                  users will see the changes immediately)**
                </p>
              </div>
              <div className="flex-1">
                <div
                  className={`w-full rounded h-[38rem] flex flex-col justify-between mb-4 overflow-auto border-zinc-200 border px-2 py-2 ${
                    state.data?.chatbotInterface.theme == "dark"
                      ? "bg-black"
                      : "bg-white"
                  }`}>
                  <div>
                    <div className="float-left clear-both mr-8">
                      <div className="float-right mb-3 overflow-auto rounded-lg py-3 px-4 bg-[#F4F4F5]">
                        <p>{state.data?.chatbotInterface.initialMessage}</p>
                      </div>
                    </div>
                    <div className="float-right clear-both ml-8">
                      <div
                        className={
                          `float-right mb-3 overflow-auto rounded-lg py-3 px-4 text-white `
                          // `bg-[${state.data?.chatbotInterface.messageColor}]`
                        }
                        style={{
                          backgroundColor:
                            state.data?.chatbotInterface.messageColor,
                        }}>
                        <p>
                          I need some information about product marketing and
                          advertisement?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-8 bottom-[56px] left-0 w-full">
                    <ChatInput onSend={() => {}} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                data-variant="flat"
                onClick={handleSubmit}
                className="rounded-md py-2 font-medium text-white text-center bg-black px-4"
                type="button">
                {" "}
                {updateBotMutation.isLoading ? "Loading..." : "Save changes"}
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
        {/* </ChatBotLayout> */}
      </div>
    </div>
  );
};

export default Settings;
