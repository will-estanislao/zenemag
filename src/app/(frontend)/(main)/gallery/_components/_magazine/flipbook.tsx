import { loadPDF } from "../../_utils/pdfex";
import { useState } from "react";
import { useRef } from "react";

export default function Flipbook({url}) {

    //const [pdfDoc, setPdfDoc] = useState(props.url);         // Document to load
    const [pageNum, setPageNum] = useState(1);          // Page Number
    const [totalPages, setTotalPages] = useState(0);    // Total # of pages
    const [scale, setScale] = useState(1.0);
    const canvasRef = useRef(null);
    const fileInputRef = useRef(null);


    // Have it take props, that will be the link from the data zineCard pulls
    // when zine card is clicked this will pop up

    function handleClick() {
        console.log(url);
    }

    return (
        <>
            <div className="w-full h-full absolute z-0">
            <div id="pdf-viewer">
                <div>
                    <h2>Name of Issue</h2>
                </div>
                <canvas id="canvas"></canvas>
            </div>
            <div id="viewer-controls flex justify-space-between">
                <button className="bg-amber-700 w-50 h-20" onClick={handleClick} id="next">Next</button>
                <button className="bg-amber-700 w-50 h-20" id="prev">Previous</button>
                <button className="bg-amber-700 w-50 h-20" id="zoom">Zoom</button>
            </div>
            </div>
        </>
    );
}