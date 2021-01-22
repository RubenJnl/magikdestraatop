
import React from "react"
import * as Styles from './styles'
import Switch from '../../helpers/switch'
import Counter from '../counter/counter'

const Answer = () => {

  if (Switch() === 'night') {
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
        <Counter></Counter>
      </>
    )
  }

}



export default Answer