import type { CollectionConfig } from "payload";

export const Posts: CollectionConfig = {
  slug: "blog",
  access: {},
  fields: [
    {
      name: "post",
      type: "text",
      required: false,
    },
  ],
};
