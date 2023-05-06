import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="relative isolate bg-white pt-24 pb-32 sm:pt-32">
      <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
        <svg
          viewBox="0 0 1313 771"
          aria-hidden="true"
          className="ml-[max(50%,38rem)] w-[82.0625rem]">
          <path
            id="bc169a03-3518-42d4-ab1e-d3eadac65edc"
            fill="url(#85a0eca5-25f1-4ab9-af84-4e2d8d9cdbf3)"
            d="M360.508 589.796 231.671 770.522 0 498.159l360.508 91.637 232.034-325.485c1.485 150.396 51.235 393.965 238.354 165.069C1064.79 143.261 1002.42-107.094 1171.72 46.97c135.44 123.252 148.51 335.641 138.11 426.428L971.677 339.803l24.062 411.461-635.231-161.468Z"></path>
          <defs>
            <linearGradient
              id="85a0eca5-25f1-4ab9-af84-4e2d8d9cdbf3"
              x1="1313.17"
              x2="-88.881"
              y1=".201"
              y2="539.417"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#9089FC"></stop>
              <stop offset="1" stopColor="#FF80B5"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end">
        <svg
          viewBox="0 0 1313 771"
          aria-hidden="true"
          className="ml-[-22rem] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] xl:ml-0 xl:mr-[calc(50%-12rem)]">
          <use href="#bc169a03-3518-42d4-ab1e-d3eadac65edc"></use>
        </svg>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What people said about Chatbase
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-4 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
              <p>
                “For anyone on the fence - in the 2 hours since this tweet
                I&apos;ve tested, set up and gone live on three separate
                websites with Chatbase. Still need to do some light tweaking of
                the base prompt but very happy with the results.”
              </p>
            </blockquote>
            <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 py-4 px-6">
              <Image
                className="h-10 w-10 flex-none rounded-full bg-gray-50"
                src="https://pbs.twimg.com/profile_images/1257618949665173505/izjTnliK_400x400.jpg"
                alt=""
              />
              <div className="flex-auto">
                <div className="font-semibold">Ian Whiscombe</div>
                <div className="text-gray-600">Founder @StockBuddy</div>
              </div>
            </figcaption>
          </figure>
          <div className="space-y-8 xl:contents xl:space-y-0">
            <div className="xl:row-span-2 space-y-8">
              <figure className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                <blockquote className="text-gray-900">
                  <p>
                    “I’ve been looking for exactly what you’ve built with
                    chatbase! Super excited to play with it :)”
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <Image
                    className="h-10 w-10 rounded-full bg-gray-50"
                    src="https://pbs.twimg.com/profile_images/1642428370091925505/xknh7v7j_400x400.jpg"
                    alt=""
                  />
                  <div>
                    <div className="font-semibold">Jacob Andreou</div>
                    <div className="text-gray-600">SVP @Snap</div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="xl:row-start-1 space-y-8">
              <figure className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                <blockquote className="text-gray-900">
                  <p>
                    “Another overpowered project built with the 🪄 OP stack”
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <Image
                    className="h-10 w-10 rounded-full bg-gray-50"
                    src="https://pbs.twimg.com/profile_images/1237045471257952256/Wvh-XjSr_400x400.jpg"
                    alt=""
                  />
                  <div>
                    <div className="font-semibold">Greg Kogan</div>
                    <div className="text-gray-600">VP @pinecone</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="space-y-8 xl:contents xl:space-y-0">
            <div className="xl:row-start-1 space-y-8">
              <figure className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                <blockquote className="text-gray-900">
                  <p>“This is awesome, thanks for building it!”</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <Image
                    className="h-10 w-10 rounded-full bg-gray-50"
                    src="https://pbs.twimg.com/profile_images/1379817647139737600/YHL9uBk0_400x400.jpg"
                    alt=""
                  />
                  <div>
                    <div className="font-semibold">Logan.GPT</div>
                    <div className="text-gray-600">Dev Rel @OpenAI</div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="xl:row-span-2 space-y-8">
              <figure className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                <blockquote className="text-gray-900">
                  <p>
                    “Website embed works like a charm even with non-English
                    content!”
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <Image
                    className="h-10 w-10 rounded-full bg-gray-50"
                    src="https://pbs.twimg.com/profile_images/1475104326930649089/OI1bGmxG_400x400.png"
                    alt=""
                  />
                  <div>
                    <div className="font-semibold">Bence ☺︎ ☻</div>
                    <div className="text-gray-600">Designer @Nortal</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
