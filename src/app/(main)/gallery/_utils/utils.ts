import { gsap } from "gsap";

/**
 * Function to handle fetching images
 * Function to handle the fetching pdf + displaying
 *
 * DB connection
 *
 */

export function getCoverImgUrl(cover: string) {
  return "/pdf/" + cover + ".png";
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
