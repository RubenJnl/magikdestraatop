import styled from 'styled-components'
import Theme from '../../style/config'
import Switch from '../../helpers/switch';

export const ConfigWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  background: rgba(250,250,250,.3);
  z-index: 1;
`

export const ConfigContent = styled.div`
  width: 100%;
  border: 2px solid darkgrey;
  background: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px;
  border-radius: 15px;

  @media (min-width: 800px){
    width: clamp(300px, 100%, 600px);
  }
`

export const TextLabel = styled.label`
  line-height: 40px;
  font-size: clamp(1.25rem, 1.5rem, .5vw);
  flex-grow: 2;
  padding-left: 15px;
  cursor: pointer;
`

export const OptionRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`

export const Toggle = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + label {
    background: #bada55;
  }

  :checked + label:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }
`
export const ToggleLabel = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  width: 100px;
  height: 50px;
  background: grey;
  display: block;
  border-radius: 50px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 40px;
    transition: 0.3s;
  }

  :active:after {
    width: 60px;
  }
`

export const Button = styled.button`
  border: 1px solid transparent;
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  background: rgba(0,0,0,.2);
  padding: 5px 5px 5px 10px;
  border-radius: 0 0 0 50%;
  cursor: pointer;
  transition: all .3s ease-in;
  z-index: 3;
  
  &:hover,
  &:focus {
    background: rgba(250,250,250,.2);
    transition: all .3s ease-in;
  }

  &:focus,
  &:active {
    outline: 0;
    border: 1px solid ${Theme.color.config[Switch()].hover};
  }
  
  svg {
    fill: ${Theme.color.config[Switch()].default};
    transition: fill .3s ease-in;
  }

  &:hover svg,
  &:focus svg {
    fill: ${Theme.color.config[Switch()].hover};
    transition: fill .3s ease-in;
  }

`

export const ConfigSvg = styled.svg`
  position: relative;
  width: 50px;
  transition: fill .3s ease-in;
`
