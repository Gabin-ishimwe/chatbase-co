export const signIn = async ({ email }: { email: string }) => {
  try {
    const response = await fetch(
      "https://chatbase-be.onrender.com/api/v1/auth/forgot-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
