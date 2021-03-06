import React, { useEffect, useState } from "react";
import * as Style from '../counter/styles'
const CounterEnded = ({
  endedDateArray
}) => {

  
  const Calculate = () => {
    let  difference = +new Date() - +new Date(endedDateArray[0], endedDateArray[1], endedDateArray[2], 4, 30)  

    let timePast = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
    return timePast;
  };

  const [timePast, settimePast] = useState(Calculate());
  
  useEffect(() => {
    setTimeout(() => {
      settimePast(Calculate());
    }, 1000);
  });


  return (
     <Style.Counter>
      {(timePast && (<>
        {timePast.days === 1 ? ` ${timePast.days} dag ` : timePast.days > 1 ? ` ${timePast.days} dagen ` : ``}
        {timePast.uren === 1 ? ` ${timePast.hours} uur ` : ` ${timePast.hours} uur ` }
        {timePast.minutes === 1 ? ` ${timePast.minutes} minuut ` : ` ${timePast.minutes} minuten ` }
        {timePast.seconds === 1 ? ` ${timePast.seconds} seconde ` : ` ${timePast.seconds} seconden ` } <br />
        Sinds de laatste avondklok
      </>))}
    </Style.Counter>
  );
}

export default CounterEnded;
