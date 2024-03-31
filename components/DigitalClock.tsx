// components/DigitalClock.tsx

import React, { useState, useEffect } from 'react';

// Define a functional component DigitalClock
const DigitalClock = () => {
  // Define state variable 'time' to hold the current time
  const [time, setTime] = useState(new Date());

  // Define a side effect using useEffect
  useEffect(() => {
    // Create a timer that updates the time every second
    const timerID = setInterval(() => tick(), 1000);

    // Cleanup function to clear the interval when component unmounts
    return () => {
      clearInterval(timerID);
    };
  }, []); // Dependency array to ensure the effect runs only once on component mount

  // Function to update the time
  const tick = () => {
    setTime(new Date());
  };

  // Render the digital clock component
  return (
    <div className="digital-clock">
      {/* Display the time in the format of hour, minute, and second */}
      {time.toLocaleTimeString()}
    </div>
  );
};

// Export the DigitalClock component as default
export default DigitalClock;
