// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: true
    },
    summary: {
      type: "string",
      description: "The description of the post",
      required: true
    },
    image: {
      type: "string",
      description: "The description of the post",
      required: true
    },
    Author_image: {
      type: "string",
      description: "The description of the post",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true
    },
    time_Read: {
      type: "number",
      description: "The date of the post",
      required: true
    },
    author: {
      type: "string",
      description: "The author of the post",
      required: true
    },
    author_Title: {
      type: "string",
      description: "The author of the post",
      required: true
    },
    tags: {
      type: "list",
      required: false,
      of: { type: "string" }
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`
    }
  }
}));
var rehypeoptions = {
  theme: "github-dark",
  keepBackground: true,
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: "" }];
    }
  },
  onVisitHightLightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHightLightedWord(node) {
    node.properties.className.push("word");
  }
};
var contentlayer_config_default = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [[rehypePrettyCode, rehypeoptions]]
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-O7LVUFVC.mjs.map
