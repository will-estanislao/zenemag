import {
  FixedToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import type { CollectionConfig } from "payload";
import { editor } from "./access/editor";

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "content", "username", "createdAt"],
    description: "Create or edit a blog post",
    listSearchableFields: ["title"],
  },
  access: {
    read: () => true,
    update: editor,
    create: editor,
    delete: editor,
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Blog Post Title",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      label: "Blog Post Body",
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          FixedToolbarFeature(),
        ],
      }),
      required: true,
    },
    {
      name: "username",
      type: "relationship",
      relationTo: "users",
      label: "Author",
      index: true,
      hasMany: false,
    },
  ],
  versions: {
    drafts: true,
  },
};
