import "pdfjs-dist/web/pdf_viewer.css";
import * as pdfjsLib from "pdfjs-dist";
import { init, getPdfjs } from "./pdfjs-init";

////unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export function loadPDF() {
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/6.3.289/pdf.worker.mjs";

  try {
    const loadingTask = pdfjsLib.getDocument({ url: "issue3.pdf" });
    loadingTask.promise.then(function (pdf) {
      console.log(pdf.numPages);
      return pdf;
    });
  } catch (error) {
    console.log("Error loading PDF:", error);
    alert(error);
  }
}
