import type { Access } from "payload";

export const user: Access = ({ req: { user } }) => {
  return Boolean(user && ["admin", "editor", "user"].includes(user.role));
};
