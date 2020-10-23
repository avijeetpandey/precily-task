import React, { useState, useEffect } from "react";
import 'react-clock/dist/Clock.css';
import Clock from "react-clock";

const ClockComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <Clock value={time} />;
};

export default ClockComponent;
