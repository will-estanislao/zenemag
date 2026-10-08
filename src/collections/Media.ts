import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  trash: true,
  folders: true,
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
  upload: {
    mimeTypes: [
      "image/png",
      "image/webp",
      "image/jpg",
      "image/jpeg",
      "application/pdf",
      "video/*",
    ],
  },
};
