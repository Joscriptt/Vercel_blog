import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
// import { rehypeoptions } from "./utils/rehypeoptions";

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: true,
    },
    summary: {
      type: "string",
      description: "The description of the post",
      required: true,
    },
    image: {
      type: "string",
      description: "The description of the post",
      required: true,
    },
    Author_image: {
      type: "string",
      description: "The description of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    time_Read: {
      type: "number",
      description: "The date of the post",
      required: true,
    },
    author: {
      type: "string",
      description: "The author of the post",
      required: true,
    },
    author_Title: {
      type: "string",
      description: "The author of the post",
      required: true,
    },

    tags: {
      type: "list",

      required: false,
      of: { type: "string" },
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
  },
}));

const rehypeoptions = {
  theme: "github-dark",
  keepBackground: true,
  onVisitLine(node: any) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: "" }];
    }
  },
  onVisitHightLightedLine(node: any) {
    node.properties.className.push("highlighted");
  },
  onVisitHightLightedWord(node: any) {
    node.properties.className.push("word");
  },
};

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [[rehypePrettyCode, rehypeoptions]],
  },
});
