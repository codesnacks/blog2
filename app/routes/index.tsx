import { Link, useLoaderData } from "remix";

import { getPosts } from "~/post";
import type { Post } from "~/post";

export const loader = async () => {
  return getPosts();
};

export default function Posts() {
  const posts = useLoaderData<Post[]>();
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <>
            {/* <li className="my-4" key={post.slug}>
              <Link to={post.slug}>
                <div>{post.title}</div>
                <small>{post.spoiler}</small>
              </Link>
            </li> */}
            <div className="my-4">
              <div>
                <h2 className="text-xl font-bold leading-8 tracking-tight">
                  <Link
                    className="text-gray-900 dark:text-gray-100"
                    to={post.slug}
                  >
                    {post.title}
                  </Link>
                </h2>
                {/* Tags */}
              </div>
              <div className="text-sm prose max-w-none text-gray-500 dark:text-gray-400">
                {post.spoiler}
              </div>
            </div>
          </>
        ))}
      </ul>
    </div>
  );
}

const Tags = () => {
  return (
    <div className="flex flex-wrap">
      <a
        className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
        href="/tags/next-js"
      >
        next-js
      </a>
      <a
        className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
        href="/tags/tailwind"
      >
        tailwind
      </a>
      <a
        className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
        href="/tags/guide"
      >
        guide
      </a>
    </div>
  );
};
