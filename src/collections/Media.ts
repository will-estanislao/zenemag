import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
    {
      name: "dateUpload",
      type: "date",
    },
  ],
  upload: {
    mimeTypes: ["image/webp", "image/png", "image/jpg"],
    formatOptions: { format: "webp" },
  },
};
