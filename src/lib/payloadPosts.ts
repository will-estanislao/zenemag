"use server";
import { BasePayload, getPayload } from "payload";
import config from "@payload-config";

export const getPayloadClient: () => Promise<BasePayload> = async () =>
  await getPayload({ config }); // Helper for connecting with payload

export async function fetchAllPosts() {
  const getPayload: BasePayload = await getPayloadClient();
  const posts = await getPayload.find({
    collection: "posts",
    sort: "-createdAt",
    select: {
      title: true,
      createdAt: true,
    },
  });

  return posts.docs;
}

export async function fetchByID(params: string | number) {
  const getPayload: BasePayload = await getPayloadClient();
  try {
    const post = await getPayload.findByID({
      collection: "posts",
      id: params,
      depth: 2,
    });

    return post;
  } catch {
    console.log("Unable to find post");
    return null;
  }
}

export async function fetchFirstPost() {
  const getPayload: BasePayload = await getPayloadClient();
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

export async function fetchGalleryImages() {
  const getPayload: BasePayload = await getPayloadClient();
  try {
    const images = await getPayload.find({
      collection: "media",
      select: {
        url: true,
        alt: true,
        height: true,
        id: true,
        filename: true,
      },
      where: {
        "folder.name": { equals: "Gallery" },
      },
    });
    return images.docs;
  } catch (error) {
    throw new Error(`Error fetching images`);
  }
}

export async function fetchVideos() {
  const getPayload: BasePayload = await getPayloadClient();
  try {
    const videos = await getPayload.find({
      collection: "media",
      select: {
        url: true,
        alt: true,
        id: true,
        filename: true,
        mimeType: true,
      },
      where: {
        "folder.name": { equals: "Videos" },
      },
    });
    return videos.docs;
  } catch (error) {
    throw new Error(`Error fetching images`);
  }
}
