// components/DigitalClock.tsx

import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setTime(new Date());
  };

  return (
    <div className="digital-clock">
      {time.toLocaleTimeString()}
    </div>
  );
};

export default DigitalClock;
