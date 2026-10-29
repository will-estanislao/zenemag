import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  trash: true,
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
    imageSizes: [
      {
        name: "small",
        width: 200,
        height: undefined,
        position: "centre",
        withoutEnlargement: true,
      },
    ],
    formatOptions: { format: "webp" },
    mimeTypes: ["image/png", "image/webp", "image/jpg", "image/jpeg"],
  },
};
