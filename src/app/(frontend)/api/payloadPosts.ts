import { getPayloadClient } from "@/lib/getPayloadClient";
import { BasePayload } from "payload";

const getPayload: BasePayload = await getPayloadClient();

export async function retrieveAllPosts() {
  const posts = await getPayload.find({
    collection: "posts",
    limit: 5,
    page: 1,
    sort: "-createdAt",
    select: {
      title: true,
      createdAt: true,
    },
  });

  return posts.docs;
}

export async function retrieveByID(params: string | number) {
  const post = await getPayload.findByID({
    collection: "posts",
    id: params,
  });

  return post;
}
