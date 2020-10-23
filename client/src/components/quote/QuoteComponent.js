import React, { useState, useEffect } from "react";
import { Resizable } from "re-resizable";

import "./QuoteComponents.css";

import AddModal from "../modal/AddModal";
import UpdateModal from "../modal/UpdateModal";
import CountModal from "../modal/CountModal";

const QuoteComponent = () => {
  const [quote, setQuote] = useState("");

  return (
    <div className="quotes">
      <Resizable
        defaultSize={{
          width: "60vw",
          height: "80vh",
        }}
      >
        <h1>Quote of the day is </h1>
        <h2>{quote}</h2>
        <div>
          <AddModal quote={quote} setQuote={setQuote} />
          <UpdateModal quote={quote} setQuote={setQuote} />
          <CountModal quote={quote} />
        </div>
      </Resizable>
    </div>
  );
};
export default QuoteComponent;
