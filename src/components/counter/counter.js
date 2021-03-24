import React, { useEffect, useState } from "react";
import * as Style from './styles'
const Counter = () => {

  const [started, setStarted] = useState(false)
  const [current, setCurrent] = useState(false)
  let diff = +new Date(2021, 0, 23, 21) - +new Date()
  
  const Calculate = () => {
    let difference = +new Date(2021, 0, 23, 21) - +new Date()
    let compareHour = 21
    let now = new Date()
    const dayOfMonth = now.getDate()
    const month = now.getMonth()
    const year = now.getFullYear()
  
    if ((month === 2 && dayOfMonth === 31) || (month >= 3 && year >= 2021)){
      compareHour = 22
    }
    console.log(compareHour);
    if (difference < 0 ){
      let counterDate = new Date()
      if (counterDate.getHours() >= compareHour ) {
        counterDate.setHours(4)
        counterDate.setMinutes(30)
        counterDate.setDate(counterDate.getDate() + 1)
        if (!current) {
          setCurrent(true)
        }
      } else if ( (counterDate.getHours() === 4 && counterDate.getMinutes() < 30) || counterDate.getHours() < 4){
        counterDate.setHours(4)
        counterDate.setMinutes(30)
        counterDate.setDate(counterDate.getDate())
        if (!current) {
          setCurrent(true)
        }
      } else {
        counterDate.setHours(21)
        counterDate.setMinutes(0)
        counterDate.setDate(counterDate.getDate())
        if (current){
          setCurrent(false)
        }
      }
      counterDate.setSeconds(0)
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
    
    if (typeof timeLeft.hours === 'undefined' || typeof timeLeft.minutes === 'undefined') {
      timeLeft = false
    }
    
    return timeLeft;
  };

  if (diff < 0 && started === false){
    setStarted(true)
  }

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
          {!current && 
            <>
              {(started ? (
                <>tot de avondklok weer in gaat vanavond</>
              ) : ( 
                <>tot de avondklok in gaat!</> 
              ) 
              )}
            </>
          }
          {current && <>tot je weer de straat op mag!</>}
        </>
      ) : '')}
    </Style.Counter>
  );
}

export default Counter;
