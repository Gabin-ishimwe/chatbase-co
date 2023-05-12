export const updateChatbot = async ({
  token,
  body,
  botId,
}: {
  token: string;
  body: any;
  botId: string;
}) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/chatbot/` + botId,
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

export function getObjectAsFormData(obj: any, exclude = []) {
  const formData = new FormData();
  Object.keys(obj).forEach((key) => {
    if (!exclude.includes(key as never) && obj[key] !== null) {
      if (typeof obj[key] === "object") {
        // If the value is an object, loop through its keys and append them to the formData
        Object.keys(obj[key]).forEach((subKey) => {
          if (obj[key][subKey] !== null) {
            formData.append(`${subKey}`, obj[key][subKey]);
          }
        });
      } else {
        // If the value is not an object, append it directly to the formData
        formData.append(key, obj[key]);
      }
    }
  });
  return formData;
}
