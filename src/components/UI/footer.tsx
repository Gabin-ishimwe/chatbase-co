import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-[1920px] px-6 bg-zinc-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-zinc-400 py-12 text-black transition-colors duration-150 bg-zinc-100">
        <div className="col-span-1 lg:col-span-2">
          <Link
            className="flex flex-initial items-center font-bold md:mr-24"
            href="/">
            <span className="mb-6 text-2xl">Chatbase</span>
          </Link>
          <a className="block text-sm text-zinc-600" href="/privacy">
            Privacy Policy
          </a>
          <a className="block text-sm text-zinc-600" href="/terms">
            Terms of Service
          </a>
        </div>
        <div className="col-span-1 lg:col-span-2"></div>
        <div className="col-span-1 lg:col-span-2"></div>
        <div className="col-span-1 lg:col-span-6 flex items-start lg:justify-end text-black">
          <div className="flex space-x-6 items-center h-10">
            <a aria-label="Twitter Account" target="_blank" href="#">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  fill="currentColor"></path>
              </svg>
            </a>
            <a aria-label="LinkedIn Account" target="_blank" href="#">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  fill="currentColor"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <p className="py-5">
        Contact:<a href="#"> support@chatbase.co</a>
      </p>
    </footer>
  );
};

export default Footer;
