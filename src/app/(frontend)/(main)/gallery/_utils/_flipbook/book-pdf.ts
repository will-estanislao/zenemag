"use strict";
import { init as pdfjsInit, getPdfjs } from "./pdfjs-init";

export function init(pdflink: any, cb: Function) {
  pdfjsInit(); // Call on worker
  const pdfjs = getPdfjs(); // get pdfjs lib

  const cache: any = []; // your useSet

  // Attempt to get pdf and parse it for info
  pdfjs
    .getDocument(pdflink)
    .promise.then((pdf) => {
      warm_cache_1(pdf, 1);
      cb(null, {
        pdf,
        numpages: () => pdf.numPages,
        getPage: (n: number, cb: any) => get_page_1(pdf, n, cb),
      });
    })
    .catch((err) => cb(err || "PDF parsing failed"));

  // takes pdf, and a number
  /* if n is less or equal to the total number for pdf,
   *  retrieve first page.
   */
  function warm_cache_1(pdf: any, n: number) {
    if (n <= pdf.numPages) get_page_1(pdf, n, () => warm_cache_1(pdf, n + 1));
  }

  /**
   * Gets the first page, takes the pdf link, a number, and a function
   * n: if null or greater than the number of pages, execute funct(in this case warm_cache?)
   * if the page in cache exist(?) return null, and
   */
  function get_page_1(pdf: any, n: number, cb: Function) {
    if (!n || n > pdf.numPages) return cb();
    if (cache[n]) return cb(null, cache[n]);
  }
}
