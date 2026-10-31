import { zineData } from "../../../../../lib/data/data";

/**
 * Function to handle fetching images
 * Function to handle the fetching pdf + displaying
 *
 * DB connection
 *
 */

export function getCoverImgUrl(cover: string) {
  return "/pdf/covers/" + cover + ".webp";
}

export function showMagazinePreview() {
  // activate the
}

export function getGalleryImgUrl(image: string) {
  return "/gallery/" + image + ".jpg";
}

export function trimPath() {
  const word = /\/(\w+)/gi;
  const arrayPath = currentPath.toUpperCase().match(word);
  const pathname = arrayPath?.at(0)?.split("/");
  return pathname;
}

export async function fetchIssueData(issue: string) {
  const data = zineData;
  const issueInfo = data.find((m) => m.url === issue);
  return issueInfo;
}
