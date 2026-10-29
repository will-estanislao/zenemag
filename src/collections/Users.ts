import type { CollectionConfig } from "payload";
import { protectRoles } from "./hooks/protectRoles";
import { admin } from "./access/admin";
import { editor } from "./access/editor";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "username",
    hidden: ({ user }) => user.role != "admin",
  },
  access: {
    read: editor,
    update: admin,
    create: admin,
    delete: admin,
  },
  auth: true,
  fields: [
    {
      name: "username",
      label: "Username",
      type: "text",
    },
    {
      name: "role",
      type: "select",
      defaultValue: "user",
      options: [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "Editor",
          value: "editor",
        },
        {
          label: "User",
          value: "user",
        },
      ],
      //hooks: {
      //  beforeChange: [protectRoles],
      //},
    },
  ],
};
