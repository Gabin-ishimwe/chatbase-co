export const updateChatbot = async ({
  token,
  body,
}: {
  token: string;
  body: any;
}) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/chatbot`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body,
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
