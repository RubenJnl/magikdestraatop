
import React from "react"
import * as Styles from './styles'
import Switch from '../../helpers/switch'
import Counter from '../counter/counter'

const Answer = ({
  hond,
  verklaring,
  bullshit
}) => {
  if (Switch() === 'night') {
    
    return (
      <>
      {hond && (
        <Styles.AnswerPositive>
          Ja
          <Styles.SubTitle>
            , ook zodra de avondklok ingaat mag je met de hond op pad.
          </Styles.SubTitle>
        </Styles.AnswerPositive>
      )}
      {verklaring && (
        <Styles.AnswerPositive>
          Ja
          <Styles.SubTitle>
              , met een verklaring mag je tijdens de avondklok voor je werk op pad
          </Styles.SubTitle>
        </Styles.AnswerPositive>
      )}
      {bullshit && (
        <Styles.AnswerNegative>
          Nee
          <Styles.SubTitle>
            , we houden je niet tegen maar je bent gewaarschuwd!
          </Styles.SubTitle>
        </Styles.AnswerNegative>
      )}
      {!hond && !verklaring && !bullshit && (
        <Styles.AnswerNegative>
            Nee
        </Styles.AnswerNegative>
      )}
      </>
    )
  } else {
    return (
      <>
      {hond && (
        <Styles.AnswerPositive>
          Ja
          <Styles.SubTitle>
            , ook zodra de avondklok ingaat mag je met de hond op pad.
          </Styles.SubTitle>
        </Styles.AnswerPositive>
      )}
      {verklaring && (
        <Styles.AnswerPositive>
          Ja
          <Styles.SubTitle>
              , met een verklaring mag je tijdens de avondklok voor je werk op pad
          </Styles.SubTitle>
        </Styles.AnswerPositive>
      )}
      {bullshit && (
        <Styles.AnswerNegative>
          Nee
          <Styles.SubTitle>
            , we houden je niet tegen maar je bent gewaarschuwd!
          </Styles.SubTitle>
        </Styles.AnswerNegative>
      )}
      {!hond && !verklaring && !bullshit && (
        <Styles.AnswerPositive>
            Ja
            <Styles.SubTitle>
                , Voorlopig nog wel
            </Styles.SubTitle>
        </Styles.AnswerPositive>
      )}
        <Counter></Counter>
      </>
    )
  }
}



export default Answer