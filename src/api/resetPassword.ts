export const resetPassword = async ({
  userId,
  token,
  newPassword,
}: {
  token: string;
  newPassword: string;
  userId: string;
}) => {
  try {
    const response = await fetch(
      "https://chatbase-be.onrender.com/api/v1/auth/change-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, token, newPassword }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
