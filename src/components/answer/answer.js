
import React from "react"
import * as Styles from './styles'
import SwitchAnswer from '../../helpers/switchAnswer'
import Counter from '../counter/counter'
import CounterEnded from '../counterEnded/counterEnded'

const Answer = ({
  hond,
  verklaring,
  eigenVerklaring,
  bullshit
}) => {
    const endedDateArray = [2021, 2, 31, 4, 30]
    let ended = +new Date(endedDateArray[0], endedDateArray[1], endedDateArray[2], endedDateArray[3], endedDateArray[4]) < +new Date()
    
    return (<>
      {ended ? (
        <>
        <Styles.AnswerPositive>
          Ja
          <Styles.SubTitle>
            , We hebben geen avondklok meer sinds:
          </Styles.SubTitle>
        </Styles.AnswerPositive>
        <CounterEnded endedDateArray={endedDateArray}></CounterEnded>
        </>
      ) : (
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
          {eigenVerklaring && (
            <Styles.AnswerPositive>
              Ja
              <Styles.SubTitle>
                  , met een geldige eigen verklaring mag je tijdens de avondklok op pad
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
          {!hond && !verklaring && !bullshit && !eigenVerklaring &&(
            <>
              {SwitchAnswer() === 'night' && (
                <Styles.AnswerNegative>
                    Nee
                </Styles.AnswerNegative>
              )}
              {SwitchAnswer() === 'day' && (
                <Styles.AnswerPositive>
                  Ja
                  <Styles.SubTitle>
                      , Voorlopig nog wel
                  </Styles.SubTitle>
                </Styles.AnswerPositive>
              )}
            </>
          )}
          <Counter ended={ended} endedDateArray={endedDateArray}></Counter>
        </>
      )
      }
    </>)
}



export default Answer