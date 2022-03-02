import * as React from "react";

import { getMDXComponent } from "mdx-bundler/client";

export default function PostComponent({ post }) {
  console.log(post);
  const code = post.body;
  //   const Component = React.useMemo(() => getMDXComponent(code), [code]);
  const Component = () => <div></div>;
  return (
    <>
      <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
          <div className="font-sans">
            <p className="text-base md:text-sm text-green-500 font-bold">
              &lt;{" "}
              <a
                href="/"
                className="text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
              >
                BACK TO BLOG
              </a>
            </p>
            <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
              {post.title}
            </h1>
          </div>
          <Component />
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>

        <div className="text-base md:text-sm text-gray-500 px-4 py-6">
          Tags:{" "}
          <a
            href="#"
            className="text-base md:text-sm text-green-500 no-underline hover:underline"
          >
            Link
          </a>{" "}
          .{" "}
          <a
            href="#"
            className="text-base md:text-sm text-green-500 no-underline hover:underline"
          >
            Link
          </a>
        </div>

        <hr className="border-b-2 border-gray-400 mb-8 mx-4" />
      </div>
    </>
  );
}
