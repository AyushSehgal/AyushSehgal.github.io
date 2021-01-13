import React, { Component, useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";

import worksheet from "../resources/Ayush_Runtime_Worksheet.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



export default function Worksheet() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <center>
      <Document
        file={worksheet}
        onLoadSuccess={onDocumentLoadSuccess}
      >
          
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </center>
    )
}