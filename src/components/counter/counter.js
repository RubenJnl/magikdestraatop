import React, { useEffect, useState } from "react";
import * as Style from './styles'
function Counter() {

  const Calculate = () => {
    const difference = +new Date(2021, 0, 23, 21) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(Calculate());
  
  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(Calculate());
    }, 1000);
  });

  return (
     <Style.Counter>
      {(timeLeft ? (
        <> Nog       
          {timeLeft.days === 1 ? ` ${timeLeft.days} dag ` : timeLeft.days > 1 ? ` ${timeLeft.days} dagen ` : ``}
          {timeLeft.uren === 1 ? ` ${timeLeft.hours} uur ` : ` ${timeLeft.hours} uur ` }
          {timeLeft.minutes === 1 ? ` ${timeLeft.minutes} minuut ` : ` ${timeLeft.minutes} minuten ` }
          {timeLeft.seconds === 1 ? ` ${timeLeft.seconds} seconde ` : ` ${timeLeft.seconds} seconden ` } <br />
          tot de avondklok in gaat!
        </>
      ) : '')}
    </Style.Counter>
  );
}

export default Counter;
