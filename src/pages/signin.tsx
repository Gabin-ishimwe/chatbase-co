import { signIn } from "@/api/signIn";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const router = useRouter();
  const signInMutation = useMutation({
    mutationFn: signIn,
    onSuccess: (data, variables, context) => {
      if (data.status <= 299 && data.status >= 200) {
        setToastMessage((msg) => (msg = data.message));
        setToastColor(true);
        setToast(true);
        router.push("/my-chatbots");
      } else if (data.status <= 499 && data.status >= 400) {
        setToastMessage((msg) => (msg = data.message));
        setToast(true);
      } else {
        setToastMessage((msg) => (msg = data.message));
        setToast(true);
      }
    },
  });
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [toast, setToast] = React.useState(false);
  const changeToast = () => setToast((toast) => (toast = false));
  const [toastMessage, setToastMessage] = React.useState("");
  const [toastColor, setToastColor] = React.useState(false);
  const handleChangeEmail = (value: string) =>
    setEmail((email) => (email = value));
  const handleChangePassword = (value: string) =>
    setPassword((password) => (password = value));
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (email.trim() !== "" && password.trim() !== "") {
      signInMutation.mutate({
        email,
        password,
      });
    }
  };
  return (
    <div className="pt-14">
      {toast && (
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2">
          <div
            className="max-w-xs bg-red-500 text-sm text-white rounded-md shadow-lg"
            role="alert">
            <div className="flex p-4 gap-4 items-center justify-between">
              <p className="grow">{toastMessage}</p>
              <div className="ml-auto">
                <button
                  type="button"
                  onClick={changeToast}
                  className={
                    toastColor
                      ? "inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-md text-white/[.5] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-green-500 transition-all text-sm dark:focus:ring-offset-green-500 dark:focus:ring-green-700"
                      : "inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-md text-white/[.5] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-800 focus:ring-red-500 transition-all text-sm dark:focus:ring-offset-red-500 dark:focus:ring-red-700"
                  }>
                  <span className="sr-only">Close</span>
                  <svg
                    className="w-3.5 h-3.5"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center">
        <div className="flex flex-col justify-between max-w-lg px-3 mx-auto w-80">
          <div className="flex flex-col">
            <button className="bg-white hover:bg-gray-200 border-zinc-300 border rounded flex justify-center items-center space-x-2 py-2">
              <FcGoogle className="text-xl" />
              <span className="text-zinc-500 text-sm">Sign in with Google</span>
            </button>
            <hr className="text-zinc-500 my-8" />
            <form>
              <div className="flex flex-col gap-1">
                <label className="text-zinc-500" htmlFor="email">
                  Email address
                </label>
                <input
                  name="email"
                  value={email}
                  onChange={(e) => handleChangeEmail(e.target.value)}
                  type="email"
                  placeholder="Your email address"
                  className="p-2 border-zinc-300 hover:border-zinc-900 border rounded focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-1 my-4">
                <label className="text-zinc-500" htmlFor="password">
                  Password
                </label>
                <input
                  name="password"
                  value={password}
                  onChange={(e) => handleChangePassword(e.target.value)}
                  type="password"
                  placeholder="Enter your password"
                  className="p-2 border-zinc-300 hover:border-zinc-900 border rounded focus:outline-none"
                />
              </div>
              <button
                onClick={(e) => handleSubmit(e)}
                data-variant="flat"
                className="mb-8 mt-2 w-full rounded-md py-3 text-sm font-semibold text-white text-center hover:bg-zinc-800 bg-black">
                {signInMutation.isLoading ? "Loading..." : "Sign In"}
              </button>
            </form>
            <Link
              href={"signup"}
              className="text-center text-sm text-zinc-500 underline">
              Don&apos;t have an account? Signup
            </Link>
            <Link
              href={"forgot-password"}
              className="text-center text-sm text-zinc-500 underline pt-3">
              Forgot your password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
