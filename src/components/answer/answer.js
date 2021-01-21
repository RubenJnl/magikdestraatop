
import React from "react"
import * as Styles from './styles'

const Answer = () => {
  const now = new Date()
  const hour = now.getHours()
  const minute = now.getMinutes()

  if ((hour === 20 && minute >= 30) || hour > 20) {
    return (
        <Styles.AnswerNegative>
            Nee
        </Styles.AnswerNegative>
    )
  } else {
    return (
        <>
            <Styles.AnswerPositive>
                Ja
                <Styles.SubTitle>
                    , Voorlopig nog wel
                </Styles.SubTitle>
            </Styles.AnswerPositive>
            
        </>
    )
  }

}



export default Answer