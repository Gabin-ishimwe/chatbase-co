import ChatBotLayout from "@/components/ChatBotLayout";

const Settings = () => {
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
          </div>
        </ChatBotLayout>
      </div>
    </div>
  );
};

export default Settings;
