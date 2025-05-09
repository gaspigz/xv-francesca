import React, { useEffect, useState } from 'react';

const targetDate = new Date('2025-05-30T21:00:00');

const getTimeRemaining = (endTime: Date) => {
  const total = endTime.getTime() - new Date().getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
};

const BloqueDos: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = getTimeRemaining(targetDate);
      setTimeLeft(remaining);

      if (remaining.total <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timeLeft.total <= 0) {
    return (
      <div className="text-center w-full bg-slate-100 p-8">
        <h2 className="text-3xl text-red-500 font-bold">¡ES LA HORA!</h2>
      </div>
    );
  }

  return (
    <div className="text-center bg-slate-100 w-full p-8">
      <h2 className="text-3xl font-light mb-3">TAN SÓLO FALTAN</h2>
      <div className="flex justify-center gap-4 text-xl">
        <div>
          <span className="font-bold text-4xl">{timeLeft.days}</span><br />días
        </div>
        <div>
          <span className="font-bold text-4xl">{timeLeft.hours}</span><br />hs
        </div>
        <div>
          <span className="font-bold text-4xl">{timeLeft.minutes}</span><br />min
        </div>
        <div>
          <span className="font-bold text-4xl">{timeLeft.seconds}</span><br />seg
        </div>
      </div>
    </div>
  );
};

export default BloqueDos;
