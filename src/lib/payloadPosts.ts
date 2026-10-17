import { getPayloadClient } from "@/lib/getPayloadClient";
import { BasePayload } from "payload";

const getPayload: BasePayload = await getPayloadClient();

export async function fetchAllPosts() {
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

export async function fetchByID(params: string | number) {
  const post = await getPayload.findByID({
    collection: "posts",
    id: params,
    depth: 2,
  });

  return post;
}

export async function fetchFirstPost() {
  const firstPost = await getPayload.find({
    collection: "posts",
    limit: 1,
    select: {
      id: true,
      title: true,
      createdAt: true,
    },
    sort: "-createdAt",
  });

  return firstPost.docs;
}
