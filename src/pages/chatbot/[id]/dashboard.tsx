import ChatBotLayout from "@/components/ChatBotLayout";

const Dashboard = () => {
  return (
    <div className="max-w-6xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8">
      <ChatBotLayout result={{}}>
        <h1>Dashboard</h1>
      </ChatBotLayout>
    </div>
  );
};

export default Dashboard;
