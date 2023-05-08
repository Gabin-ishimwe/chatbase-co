import ChatBotLayout from "@/components/ChatBotLayout";

const ManagedSource = () => {
  return (
    <div className="max-w-6xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full m-auto">
        <ChatBotLayout result={{}}>
          <div className="py-4">
            <h1>Managed source</h1>
          </div>
        </ChatBotLayout>
      </div>
    </div>
  );
};

export default ManagedSource;
