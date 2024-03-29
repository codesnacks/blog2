import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import invariant from "tiny-invariant";

import { getPost } from "~/post";
import PostComponent from "~/components/postComponent";
import type { MetaFunction } from "remix";

export const loader: LoaderFunction = async ({ params }) => {
  console.log({ params });
  params.slug = params["*"]; //params.path + "/" + params.filename;
  invariant(params.slug, "expected params.slug");
  return getPost(params.slug);
};

export const meta: MetaFunction = (data) => {
  return { title: data?.data?.title || "codesnacks.net" };
};

export default function PostSlug() {
  const post = useLoaderData();
  return <PostComponent post={post} />;
  // return <div dangerouslySetInnerHTML={{ __html: post.html }} />;
}
