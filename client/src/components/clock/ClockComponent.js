import React, { useState, useEffect } from "react";
import { Resizable } from "re-resizable";
import "react-clock/dist/Clock.css";
import Clock from "react-clock";

const ClockComponent = () => {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#f0f0f0",
  };

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Resizable
        style={style}
        defaultSize={{
          width: 320,
          height: "80vh",
        }}
      >
        <Clock value={time} />
      </Resizable>
    </div>
  );
};

export default ClockComponent;
