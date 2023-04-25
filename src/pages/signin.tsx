import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  return (
    <div className="pt-14">
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
                  type="password"
                  placeholder="Enter your password"
                  className="p-2 border-zinc-300 hover:border-zinc-900 border rounded focus:outline-none"
                />
              </div>
              <button
                data-variant="flat"
                className="mb-8 mt-2 w-full rounded-md py-3 text-sm font-semibold text-white text-center hover:bg-zinc-800 bg-black">
                Sign In
              </button>
            </form>
            <Link
              href={"signup"}
              className="text-center text-sm text-zinc-500 underline">
              Don&apos;t have an account? Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
