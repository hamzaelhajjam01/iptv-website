"use client";

import React, { useEffect, useState } from 'react';

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const pad = (n: number) => n.toString().padStart(2, '0');

const CountdownTimer: React.FC<{ msFromNow?: number }> = ({ msFromNow = 3 * 24 * 60 * 60 * 1000 }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: '00', hours: '00', minutes: '00', seconds: '00' });

  useEffect(() => {
    const countDownDate = Date.now() + msFromNow;
    const interval = setInterval(() => {
      const now = Date.now();
      const distance = countDownDate - now;
      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }
      setTimeLeft({
        days: pad(Math.floor(distance / (1000 * 60 * 60 * 24))),
        hours: pad(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
        minutes: pad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))),
        seconds: pad(Math.floor((distance % (1000 * 60)) / 1000)),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [msFromNow]);

  return (
    <div className="countdown-box inline-block p-4 rounded-lg mb-8 border border-gray-700">
      <div id="countdown" className="text-4xl font-bold text-white tracking-widest">
        <span>{timeLeft.days}</span>:<span>{timeLeft.hours}</span>:<span>{timeLeft.minutes}</span>:<span>{timeLeft.seconds}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
