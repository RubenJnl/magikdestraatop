import React, { useEffect, useState } from "react";
import * as Style from './styles'
function Counter() {

  let [started, setStarted] = useState(false)
  let diff = +new Date(2021, 0, 23, 21) - +new Date()

  const Calculate = () => {
    let difference = +new Date(2021, 0, 23, 21) - +new Date()

    if (difference < 0 ){
      let counterDate = new Date()
      counterDate.setHours(21)
      counterDate.setMinutes(0)
      counterDate.setSeconds(0)
      counterDate.setDate(counterDate.getDate())
      difference = +new Date(counterDate) - +new Date()     
    }

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    if ((timeLeft.hours === 6 && timeLeft.minutes >= 30) || timeLeft.hours > 6 ) {
      timeLeft = false
    }

    return timeLeft;
  };

  useEffect(() => {
    if (diff < 0 ){
      setStarted(true)
    }
  })

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
          {(started ? (
            <>tot de avondklok weer in gaat vanavond</>
          ) : ( 
            <>tot de avondklok in gaat!</> 
          ) 
          )}
        </>
      ) : '')}
    </Style.Counter>
  );
}

export default Counter;
