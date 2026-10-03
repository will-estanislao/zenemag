"use strict";

import pdfjsLib from "pdfjs-dist";

export function getPdfjs() {
  return pdfjsLib;
}

export function init(pfx: any) {
  pfx = pfx || "";
  pdfjsLib.GlobalWorkerOptions.workerSrc = `${pfx}/pdf.worker.js`;
}
