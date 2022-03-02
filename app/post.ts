import path from "path";
import fs from "fs/promises";
import parseFrontMatter from "front-matter";
import invariant from "tiny-invariant";
import { marked } from "marked";
import fsSync from "fs";
import { mdx } from "../remix.config.js";
import { createRoutesFromChildren } from "react-router";

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code, lang) {
    console.log("#---->", code, lang);
    const hljs = require("highlight.js");
    const language = hljs.getLanguage(lang) ? lang : "plaintext";
    return hljs.highlight(code, { language }).value;
  },
  langPrefix: "hljs language-", // highlight.js css expects a top-level 'hljs' class.
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
});

// marked.setOptions({
//   highlight: function (code, lang, callback) {
//     require("pygmentize-bundled")(
//       { lang: lang, format: "html" },
//       code,
//       function (err, result) {
//         callback(err, result.toString());
//       }
//     );
//   },
// });

export type Post = {
  slug: string;
  title: string;
};

export type PostMarkdownAttributes = {
  title: string;
  spoiler?: string;
};

// const postsPath = path.join(__dirname, "../posts");
const postsPath = path.join(__dirname, "../../..", "posts");
// const postsPath = path.join(__dirname, "./routes/posts");

function isValidPostAttributes(
  attributes: any
): attributes is PostMarkdownAttributes {
  return attributes?.title;
}

type NewPost = {
  title: string;
  slug: string;
  markdown: string;
};

export async function createPost(post: NewPost) {
  const md = `---\ntitle: ${post.title}\n---\n\n${post.markdown}`;
  await fs.writeFile(path.join(postsPath, post.slug + ".md"), md);
  return getPost(post.slug);
}

export async function getPost(slug: string) {
  let filepath = null;
  let file = null;
  try {
    filepath = path.join(postsPath, slug.replace(/\/$/, "") + ".md");
    console.log("######", filepath);
    const x = mdx(filepath);
    console.log(x);
    file = await fs.readFile(filepath);
  } catch (e) {}
  if (!file) {
    try {
      filepath = path.join(postsPath, slug + "/index" + ".md");
      console.log("######", filepath);
      file = await fs.readFile(filepath);
    } catch (e) {}
  }
  const { attributes, body } = parseFrontMatter(file.toString());
  invariant(
    isValidPostAttributes(attributes),
    `Post ${filepath} is missing attributes`
  );
  const html = marked(body);
  return { slug, html, title: attributes.title, body };
}

function getAllPosts(postsPath: any, dir: any, originalPath: string) {
  return dir
    .filter((filename: string) => {
      const stats = fsSync.statSync(postsPath + "/" + filename);
      if (stats.isDirectory()) {
        return true;
      }
      try {
        const file = fsSync.readFileSync(path.join(postsPath, filename));
        const { attributes } = parseFrontMatter(file.toString());
        invariant(isValidPostAttributes(attributes));
        return true;
      } catch (e) {
        return false;
      }
    })
    .map((filename: string) => {
      console.log(filename);
      const stats = fsSync.statSync(postsPath + "/" + filename);
      if (!stats.isDirectory()) {
        const file = fsSync.readFileSync(path.join(postsPath, filename));
        const { attributes } = parseFrontMatter(file.toString());
        invariant(isValidPostAttributes(attributes));
        return {
          slug: (postsPath + "/" + filename)
            .replace(/\.md$/, "/")
            .replace(/index\//, "")
            .replace(originalPath, ""),
          title: attributes.title,
          spoiler: attributes.spoiler || "",
        };
      }
      dir = fsSync.readdirSync(postsPath + "/" + filename);
      return getAllPosts(postsPath + "/" + filename, dir, originalPath);
    })
    .flat(Infinity);
}

export function getPosts() {
  const dir = fsSync.readdirSync(postsPath);
  return getAllPosts(postsPath, dir, postsPath);
}
