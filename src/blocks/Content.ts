import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { Block } from "payload";

const Content: Block = {
  slug: "content",
  fields: [
    {
      name: "content",
      type: "richText",
      editor: lexicalEditor({}),
    },
  ],
};

export default Content;
