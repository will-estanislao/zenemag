import type { CollectionConfig } from "payload";
import {
  FixedToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "author", "createdAt"],
    description: "edit blog",
    listSearchableFields: ["title"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      label: "Blog Post Title",
      type: "text",
      required: true,
    },
    {
      name: "username",
      type: "relationship",
      relationTo: "users",
      label: "Author",
    },
    {
      name: "content",
      label: "Write your blog post here",
      type: "richText",
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          FixedToolbarFeature(),
        ],
      }),
    },
  ],
  versions: {
    drafts: true,
  },
};
