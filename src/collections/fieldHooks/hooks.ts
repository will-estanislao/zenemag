import type { FieldHook } from "payload";
import type { CollectionAfterReadHook } from "payload";
import { fetchByID } from "@/lib/payloadPosts";
import type { Field } from "payload";

type PostAuthorHook = FieldHook<Post, string | number, Post>;

/*
export const afterReadHooks: CollectionAfterReadHook = async (
    {
        collection: ,
        context:,
        doc:,
        query:,
        req:,
    }
) => {
    
}
*/

export const setAuthor: PostAuthorHook = ({ value, req }) => {
  if (!value && req.user) {
    return req.user.id;
  }
  return value;
};

export const afterReadHooks: CollectionAfterReadHook = async ({
  req: { payload },
}) => {
  const author = await payload.find({
    collection: "users",
    select: {
      username: true,
    },
  });
  return author;
};
