import type { CollectionConfig } from "payload";
import { editor } from "./access/editor";
import { admin } from "./access/admin";

export const Zines: CollectionConfig = {
  slug: "zines",
  admin: {
    useAsTitle: "title",
    defaultColumns: [],
    description: "Upload issues of Zine",
    hidden: true,
  },
  access: {
    read: admin,
    update: admin,
    create: admin,
    delete: admin,
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Zine Title",
      required: true,
    },
    {
      name: "subtitle",
      type: "text",
      label: "Subtitle for issue",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description for this issue",
    },
    {
      name: "storeurl",
      type: "text",
      label: "Link to the store page",
    },
    {
      name: "cover",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "fileUrl",
      type: "upload",
      relationTo: "media",
    },
  ],
};
