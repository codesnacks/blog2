import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";

import styles from "./styles/app.css";
import highlight from "./styles/highlightjs.css";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    // highlight js theme
    {
      rel: "stylesheet",
      href: "https://unpkg.com/@highlightjs/cdn-assets@11.4.0/styles/nord.min.css",
    },
    // highlight js default styling
    { rel: "stylesheet", href: highlight },
  ];
}

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  const url =
    "https://ufashion.us2.list-manage.com/subscribe/post?u=91b43ba27e5e1743125c41f40&amp;id=65091370b3";
  const { loading, error, success, message, handleSubmit } =
    useMailChimpForm(url);
  const { fields, handleFieldChange } = useFormFields({
    EMAIL: "",
  });

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <Meta />
        <Links />
      </head>
      <body>
        <>
          <nav id="header" className="fixed w-full z-10 top-0">
            <div id="progress" className="h-1 z-20 top-0"></div>

            <div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
              <div className="pl-4">
                <a
                  className="bg-white/75 text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl"
                  href="/"
                >
                  codesnacks.net
                </a>
              </div>

              <div className="block lg:hidden pr-4">
                <button
                  id="nav-toggle"
                  className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none"
                >
                  <svg
                    className="fill-current h-3 w-3"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
              </div>

              <div
                className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20"
                id="nav-content"
              >
                <ul className="list-reset lg:flex justify-end flex-1 items-center">
                  <li className="mr-3">
                    <a
                      className="inline-block py-2 px-4 text-gray-900 font-bold no-underline"
                      href="#"
                    >
                      Active
                    </a>
                  </li>
                  <li className="mr-3">
                    <a
                      className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4"
                      href="#"
                    >
                      link
                    </a>
                  </li>
                  <li className="mr-3">
                    <a
                      className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4"
                      href="#"
                    >
                      link
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="container w-full md:max-w-3xl mx-auto pt-20">
            <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
              <Outlet />
            </div>

            <hr className="border-b-2 border-gray-400 mb-8 mx-4" />

            <div className="container px-4">
              <div className="font-sans bg-gradient-to-b from-blue-100 to-gray-100 rounded-lg shadow-xl p-4 text-center">
                <h2 className="font-bold break-normal text-xl md:text-3xl">
                  Subscribe to my Newsletter
                </h2>
                <h3 className="font-bold break-normal text-gray-600 text-sm md:text-base">
                  Get the latest posts delivered right to your inbox
                </h3>
                <div className="w-full text-center pt-4">
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      handleSubmit(fields);
                    }}
                  >
                    {!loading && !error && !success && (
                      <div className="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
                        <input
                          type="email"
                          placeholder="youremail@example.com"
                          className="flex-1 mt-4 appearance-none border border-gray-400 rounded shadow-md p-3 text-gray-600 mr-2 focus:outline-none"
                          id="EMAIL"
                          value={fields.EMAIL}
                          onChange={handleFieldChange}
                        />
                        <button
                          type="submit"
                          className="flex-1 mt-4 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400"
                        >
                          Subscribe
                        </button>
                      </div>
                    )}
                  </form>
                  {loading && "submitting"}
                  {error && message}
                  {success && message}
                </div>
              </div>
            </div>

            <div className="flex w-full items-center font-sans px-4 py-12">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src="https://media-exp1.licdn.com/dms/image/C5103AQEThWJHL-PBVg/profile-displayphoto-shrink_400_400/0/1517060869209?e=1649894400&v=beta&t=na33MxSqGTtFMeNt4ZzaC0qje0VZYyp3Tq2sMu1ekuc"
                alt="Benjamin Mock"
              />
              <div className="flex-1 px-2">
                <p className="text-base font-bold text-base md:text-xl leading-none mb-2">
                  Benjamin Mock
                </p>
                <p className="text-gray-600 text-xs md:text-base">
                  Senior Developer at Shopify
                </p>
                {/* <a className="text-green-500 no-underline hover:underline" href="https://www.tailwindtoolbox.com">TailwindToolbox.com</a> */}
              </div>
              <div className="justify-end">
                <a
                  href="/about"
                  className="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full cursor-pointer"
                >
                  Read More
                </a>
              </div>
            </div>

            {/*<hr className="border-b-2 border-gray-400 mb-8 mx-4" />

            <div className="font-sans flex justify-between content-center px-4 pb-12">
              <div className="text-left">
                <span className="text-xs md:text-sm font-normal text-gray-600">
                  &lt; Previous Post
                </span>
                <br />
                <p>
                  <a
                    href="#"
                    className="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
                  >
                    Blog title
                  </a>
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs md:text-sm font-normal text-gray-600">
                  Next Post &gt;
                </span>
                <br />
                <p>
                  <a
                    href="#"
                    className="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
                  >
                    Blog title
                  </a>
                </p>
              </div>
            </div> */}
          </div>

          <footer className="bg-white border-t border-gray-400 shadow">
            <div className="container max-w-4xl mx-auto flex py-8">
              <div className="w-full mx-auto flex flex-wrap">
                <div className="flex w-full md:w-1/2 ">
                  <div className="px-8">
                    <h3 className="font-bold text-gray-900">About</h3>
                    <p className="py-4 text-gray-600 text-sm">
                      Tools, Tricks, snackable content and public learning.
                      Mostly frontend related.
                    </p>
                  </div>
                </div>

                <div className="flex w-full md:w-1/2">
                  <div className="px-8">
                    <h3 className="font-bold text-gray-900">Social</h3>
                    <ul className="list-reset items-center text-sm pt-3">
                      <li>
                        <a
                          className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1"
                          href="https://twitter.com/benjaminmock"
                        >
                          Twitter
                        </a>
                      </li>
                      <li>
                        <a
                          className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1"
                          href="https://www.linkedin.com/in/benjamin-mock/"
                        >
                          LinkedIn
                        </a>
                      </li>
                      <li>
                        <a
                          className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1"
                          href="https://github.com/benjaminmock"
                        >
                          GitHub
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
