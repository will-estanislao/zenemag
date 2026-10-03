"use strict";
import * as pdfjsLib from "pdfjs-dist";

export function getPdfjs() {
  return pdfjsLib;
}

export function init() {
  //pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/6.3.289/pdf.worker.mjs";
}
