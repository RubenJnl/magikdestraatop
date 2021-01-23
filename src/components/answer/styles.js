import styled from 'styled-components'

export const AnswerNegative = styled.h2`
  display: block;
  font-size: 3em;
  font-size: clamp(2em, 7em, 10vw);
  margin: .25em;
  color: rgb(170, 40, 10);
`

export const AnswerPositive = styled.h2`
  display: block;
  color: rgb(100, 200, 20);
  font-size: 3em;
  font-size: clamp(1.75em, 6em, 7vw);
  line-height: 1;
  margin: .125em 0;
`

export const SubTitle = styled.span`
  font-size: 50%;
`