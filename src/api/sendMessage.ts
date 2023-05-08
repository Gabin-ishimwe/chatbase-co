export const sendMessage = async ({
  token,
  body,
}: {
  token: string;
  body: any;
}) => {
  try {
    console.log(body);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/chatbot/send-message`,
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
