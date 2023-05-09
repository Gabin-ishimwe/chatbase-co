export const createChatbot = async ({
  formData,
  token,
}: {
  formData: FormData;
  token: string;
}) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/chatbot/create-bot`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const createChatbotWithWeblinks = async ({
  body,
  token,
}: {
  body: any;
  token: string;
}) => {
  try {
    console.log(JSON.stringify(body));
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/chatbot/create-bot`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
