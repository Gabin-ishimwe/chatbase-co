import { Chat } from "@/components/Chat/Chat";
import ChatBotLayout from "@/components/ChatBotLayout";
import React from "react";
import { SketchPicker } from "react-color";
import { AiFillCaretDown } from "react-icons/ai";

const Settings = () => {
  const [color, setColor] = React.useState("#3b82f6");
  const [showPicker, setShowPicker] = React.useState(false);
  const handleChangeColor = (value: any) => {
    console.log(value);
    setColor(value.hex);
    console.log(value.hex);
  };
  return (
    <div className="max-w-6xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full m-auto">
        <ChatBotLayout result={{}}>
          <div className="py-4">
            <div className="pb-8">
              <label className="block text-sm font-medium text-gray-700">
                Chatbot ID
              </label>
              <div className="mt-1 font-semibold">-hbR3swCmB_n9bGS5azlJ</div>
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
                  value="Evelyne Umubyeyi_Gabin Ishimwe_Adrine Uwera_Emile Kamana_final_project.pdf"
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
                  rows="5"
                  class="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                  maxlength="3000">
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
                className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900">
                <option value="gpt-3.5-turbo" selected>
                  gpt-3.5-turbo
                </option>
                <option value="gpt-4">gpt-4</option>
              </select>
            </div>
            <div className="pb-8">
              <label className="block text-sm font-medium text-gray-700">
                Visibilty
              </label>
              <select
                id="location"
                name="location"
                className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900">
                <option value="private">Private</option>
                <option value="private_but_can_be_embedded">
                  Private but can be embedded on website
                </option>
                <option value="public" selected>
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
                  placeholder="example.com"
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
            <div className="pb-8">
              <div className="flex justify-between">
                <label className="block text-sm font-medium text-gray-700">
                  Rate Limiting
                </label>
                <button className="inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-200 py-1 px-2 text-sm font-medium text-black shadow-sm hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto">
                  Reset
                </button>
              </div>
              <p className="mt-2 text-sm text-zinc-500">
                Limit the number of messages sent from one device on the iframe
                and chat bubble (this limit will not be applied to you on
                chatbase.co, only on your website for your users to prevent
                abuse).
              </p>
              <div className="mt-1 text-sm text-zinc-700">
                Limit to only
                <input
                  name="ip_limit"
                  type="number"
                  className="min-w-0 p-1 px-2 rounded-md border border-zinc-900/10 bg-white shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                  value="20"></input>
                messages every
                <input
                  name="ip_limit_timeframe"
                  type="number"
                  className="min-w-0 p-1 px-2 rounded-md border border-zinc-900/10 bg-white shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                  value="240"></input>
                seconds
              </div>
            </div>
            <div className="text-sm text-zinc-700 my-4">
              Show this message to show when limit is hit
              <input
                name="ip_limit_message"
                className="min-w-0 p-1 mt-1 px-2 w-full rounded-md border border-zinc-900/10 bg-white shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                value="Too many messages in a row"></input>
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
                    <button className="inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-200 py-1 px-2 text-sm font-medium text-black shadow-sm hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto">
                      Reset
                    </button>
                  </div>
                  <div className="mt-1">
                    <textarea
                      name="initial_messages"
                      className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                      maxLength={1000}>
                      Hi! What can I help you with?
                    </textarea>
                    <p className="mt-2 text-sm text-zinc-500">
                      Enter each message in a new line.
                    </p>
                  </div>
                </div>
                <div className="pb-8">
                  <label className="block text-sm font-medium text-gray-700">
                    Suggested Messages
                  </label>
                  <div className="mt-1">
                    <textarea
                      name="suggested_messages"
                      placeholder="What is example.com?,How does it work?"
                      className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"></textarea>
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
                    name="theme"
                    className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900">
                    <option value="light" selected>
                      light
                    </option>
                    <option value="dark">dark</option>
                  </select>
                </div>
                <div className="pb-8">
                  <label className="block text-sm font-medium text-gray-700">
                    Update chatbot profile picture
                  </label>
                  <input
                    id="bot_profile_picture"
                    type="file"
                    accept="image/*"
                    name="bot_profile_picture"
                    className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"></input>
                </div>
                <div className="pb-8">
                  <label className="block text-sm font-medium text-gray-700">
                    Remove Chatbot Profile Picture
                  </label>
                  <input
                    type="checkbox"
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
                      className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                      value=""
                    />
                  </div>
                </div>
                <div className="pb-8">
                  <div className="flex justify-between">
                    <label className="block text-sm font-medium text-gray-700">
                      User Message Color
                    </label>
                    <button className="inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-200 py-1 px-2 text-sm font-medium text-black shadow-sm hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto">
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
                <div className="pb-8">
                  <label className="block text-sm font-medium text-gray-700">
                    Update chat icon
                  </label>
                  <input
                    id="chat_icon"
                    type="file"
                    accept="image/*"
                    name="bot_profile_picture"
                    className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                  />
                </div>
                <div className="pb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Remove chat icon
                  </label>
                  <input
                    type="checkbox"
                    name="should_remove_bot_profile_picture"
                    className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-600"
                  />
                </div>
                <div className="pb-8">
                  <div className="flex justify-between">
                    <label className="block text-sm font-medium text-gray-700">
                      Chat Bubble Button Color
                    </label>
                    <button className="inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-200 py-1 px-2 text-sm font-medium text-black shadow-sm hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto">
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
                <div className="pb-8">
                  <label className="block text-sm font-medium text-gray-700">
                    Align Chat Bubble Button
                  </label>
                  <select
                    id="theme"
                    name="theme"
                    className="min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900">
                    <option value="right" selected>
                      right
                    </option>
                    <option value="left">left</option>
                  </select>
                </div>
                <div className="mt-1 text-sm text-zinc-700">
                  Auto show initial messages after{" "}
                  <input
                    name="auto_open_chat_window_after"
                    type="number"
                    className="min-w-0 p-1 px-2 rounded-md border border-zinc-900/10 bg-white shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900"
                    value="3"
                  />
                  seconds (negative to disable)
                </div>
              </div>
              <div className="flex-1">
                <Chat
                  loading={false}
                  messages={[
                    {
                      role: "assistant",
                      content: `Hi there! I'm Chatbot UI, an AI assistant. I can help you with things like answering questions, providing information, and helping with tasks. How can I help you?`,
                    },
                    {
                      role: "user",
                      content: "Hello there!",
                    },
                  ]}
                  onReset={() => {}}
                  onSend={() => {}}
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                data-variant="flat"
                className="rounded-md py-2 font-medium text-white text-center bg-black px-4"
                type="button">
                {" "}
                Save changes
              </button>
            </div>
          </div>
        </ChatBotLayout>
      </div>
    </div>
  );
};

export default Settings;
