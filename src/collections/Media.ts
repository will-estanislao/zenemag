import type { CollectionConfig } from "payload";
import { editor } from "./access/editor";

export const Media: CollectionConfig = {
  slug: "media",
  trash: true,
  folders: true,
  access: {
    read: () => true,
    update: editor,
    create: editor,
    delete: editor,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "tag",
      required: true,
      type: "select",
      defaultValue: "gallery",
      options: [
        {
          label: "Gallery",
          value: "gallery",
        },
        {
          label: "Video",
          value: "video",
        },
      ],
      //hooks: {
      //  beforeChange: [protectRoles],
      //},
    },
  ],
  upload: {
    disableLocalStorage: true,
    formatOptions: { format: "webp" },
    mimeTypes: [
      "image/png",
      "image/webp",
      "image/jpg",
      "image/jpeg",
      "video/*",
    ],
  },
};
