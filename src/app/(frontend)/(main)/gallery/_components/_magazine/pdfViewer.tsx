'use client'

import { pdfjs } from 'react-pdf';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url,).toString();

 const options = {
    cMapUrl: "cmaps/",
    cMapPacked: true,
    standardFontDataUrl: "standard_fonts/",
  };

export default function PDFViewer(props:any) {

    const samplePDF = '/issue3.pdf';

    const [numPages, setNumPages] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages }: {numPages:number}) {
        setNumPages(numPages);
    }

    function changePage(offset : number) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);

    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    return (
        <>
            <div className="text-3xl font-bold mb-10 underline text-shadow-lg/50 tracking-widest text-center text-nowrap">
                <h2>Zine Archive</h2>
            </div>
            <div className='flex justify-center text-center mb-5 '>
                <button className='p-2 m-2 font-extrabold bg-[#2fada0]/75 rounded-2xl w-25 md:w-50 text-shadow-lg/50 ' type="button" disabled={pageNumber <= 1} onClick={previousPage}>Prev</button>
                <h3 className='p-2 m-2 font-extrabold bg-[#2fada0]/75 rounded-2xl w-25 md:w-55 text-shadow-lg/50 '> {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'} </h3>
                <button className='p-2 m-2 font-extrabold bg-[#2fada0]/75 rounded-2xl w-25 md:w-50 text-shadow-lg/50' type="button" disabled={pageNumber >= numPages} onClick={nextPage}>Next</button>
            </div>
            <div className='flex justify-center p-2 mx-auto'>
                <Document file={samplePDF}  onLoadSuccess={onDocumentLoadSuccess} options={options}>
                    <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
                </Document>
            </div>
      
        </>
    )

}