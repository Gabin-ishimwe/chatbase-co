import AuthComponent from "@/components/AuthComponent";
import ChatbotHoc from "@/components/ChatbotHoc";
import ChatDashoard from "@/components/UI/chat-dashboard";
import { useRouter } from "next/router";
import React from "react";

const Chatbot = (props: any) => {
  const router = useRouter();
  const botId = router.query.id;
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<any>(null);
  const [toast, setToast] = React.useState(false);
  const [toastColor, setToastColor] = React.useState(false);
  const changeToast = () => setToast((toast) => (toast = false));
  const [toastMessage, setToastMessage] = React.useState("");

  return (
    <ChatDashoard
      messageColor={props.data?.chatbotInterface.messageColor}
      bgColor={props.data?.chatbotInterface.theme}
    />
  );
};

export default AuthComponent(ChatbotHoc(Chatbot));
