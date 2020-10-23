import React from "react";
import ClockComponent from "./clock/ClockComponent";
import QuoteComponent from "./quote/QuoteComponent";

import "./app.css";

const App = () => {
  return (
    <div className="app">
      <ClockComponent />
      <QuoteComponent />
    </div>
  );
};

export default App;
