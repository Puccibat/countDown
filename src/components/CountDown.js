import React, { useEffect, useState } from 'react';

const CountDown = () => {
  const difference = +new Date(`2021-04-24 09:30:00`) - +new Date();
  const calculateTimeLeft = () => {
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <div className='container'>
      <h2>
        {difference > 0 ? (
          <div>
            <h2>Time remaining before end:</h2>
            {timeLeft.days} days : {timeLeft.hours} hours : {timeLeft.minutes}{' '}
            minutes : {timeLeft.seconds} seconds
          </div>
        ) : (
          <div>END !!!!!!</div>
        )}
      </h2>
    </div>
  );
};

export default CountDown;
