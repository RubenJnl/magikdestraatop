
import React from "react"

const Answer = () => {
//   if (process.browser) {
  const now = new Date()
  const hour = now.getHours()
  const minute = now.getMinutes()

  if ((hour === 20 && minute >= 30) || hour > 20) {
    return (
        <React.Fragment>
            <h2 className="answer">Nee</h2>
            <style jsx>{`
                .answer {
                    display: block;
                    font-size: 3em;
                    font-size: clamp(2em, 10em, 10vw);
                    margin-top: .25em;
                    color: rgb(170, 40, 10);
                }
            `}
            </style>
        </React.Fragment>
    )
  } else {
    return (
        <React.Fragment>
            <h2 className="answer">
              Ja
              <span style="font-size: 50%;">, Voorlopig nog wel</span>
            </h2>
            <style jsx>{`
                .answer {
                    display: block;
                    color: rgb(100, 200, 20);
                    font-size: 3em;
                    font-size: clamp(2em, 10em, 10vw);
                    margin-top: .25em;
                }
            `}
            </style>
        </React.Fragment>
    )
  }

}



export default Answer
