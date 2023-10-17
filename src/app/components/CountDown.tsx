"use client";

import React, { useState, useEffect } from "react";

const CountDown = () => {
  const futureDate = new Date("2024-01-14").getTime(); // Specify your target date
  const [delay, setDelay] = useState(calculateDelay());

  function calculateDelay() {
    const currentDate = new Date().getTime();
    return futureDate - currentDate;
  }

  const calculateTime = () => {
    if (delay <= 0) {
      return "Countdown expired";
    }

    const d = Math.abs(Math.floor(delay / (1000 * 60 * 60 * 24)));
    const h = Math.abs(Math.floor((delay / (1000 * 60 * 60)) % 24));
    const m = Math.abs(Math.floor((delay / (1000 * 60)) % 60));
    const s = Math.abs(Math.floor((delay / 1000) % 60));

    return `${h}:${m}:${s}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(calculateDelay()); // Update delay based on the current date
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <span className="font-bold text-5xl text-write">{calculateTime()}</span>
  );
};

export default CountDown;
