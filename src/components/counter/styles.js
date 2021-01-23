import styled from 'styled-components'
import Theme from '../../style/config'
import Switch from '../../helpers/switch'

export const Counter = styled.span`
  display: block;
  font-size: clamp(1.25rem, 2rem, 3vw);
  line-height: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: ${Theme.color.title[Switch()]}
`
