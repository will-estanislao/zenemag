import type { CollectionConfig } from "payload";

export const Zines: CollectionConfig = {
  slug: "zines",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
  ],
  upload: {
    mimeTypes: ["application/pdf"],
  },
};
