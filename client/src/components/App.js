import React from "react";
import ClockComponent from "./clock/ClockComponent";
import QuoteComponent from "./quote/QuoteComponent";

import "./app.css";
import NewsComponent from "./news/NewsComponent";

const App = () => {
  return (
    <div>
      <div className="app">
      <ClockComponent />
      <QuoteComponent />
    </div>
    <NewsComponent />
    </div>
  );
};

export default App;
