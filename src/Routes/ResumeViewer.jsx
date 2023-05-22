import React, { useContext, useEffect, useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import { useLocation } from "react-router-dom";
import { WindowContext } from "../App";
import ArrowButton from "../Components/elements/Buttons/ArrowButton/ArrowButton";
import resume from "../assets/documents/Resume_DerekDeLizo.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// import './Sample.css';
import "./ResumeViewer.scss";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const options = {
  cMapUrl: "cmaps/",
  standardFontDataUrl: "standard_fonts/",
};

const MIN_WIDTH = 629;
const PADDING_WIDTH = 0;

export default function Sample() {
  const { state } = useLocation();
  const dimensions = useContext(WindowContext);
  const [docWidth, setDocWidth] = useState(MIN_WIDTH);

  useEffect(() => {
		if (dimensions.width < 1032) {
			setDocWidth(dimensions.width)
    } else {
			setDocWidth()
		}
	}, [dimensions]);

	const increaseDocumentSize = () => {
		if(!docWidth){
			setDocWidth(MIN_WIDTH + 100)
		}
		else if( docWidth + 100 < dimensions.width - 100 ){
			setDocWidth(docWidth + 100)
		} else {
			setDocWidth(dimensions.width - 100)
		}
	}

	const decreaseDocumentSize = () => {
		if( docWidth - 100 > MIN_WIDTH ){
			setDocWidth(docWidth - 100)
		} else {
			setDocWidth(MIN_WIDTH)
		}
	}

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    console.log("yeet");
  }

  return (
    <div className="resume">
      <div className="resume-container">
			<header>
          <ArrowButton
            arrowLocation="left"
            fillColor="white"
            url={state?.canGoBack ? -1 : "/"}
            text="Back"
          />
          <a href={resume} download>Download</a>
        </header>
        <div className="document-container">
          <Document
            className="document"
            file={resume}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
          >
            <Page key="page_1" pageNumber={1} width={docWidth} />
            <Page
              className="page_2"
              key="page_2"
              pageNumber={2}
              width={docWidth}
            />
          </Document>
        </div>
        <div className="zoom-settings">
          <button onClick={increaseDocumentSize}>+</button>
          <button onClick={decreaseDocumentSize}>-</button>
        </div>
      </div>
    </div>
  );
}
