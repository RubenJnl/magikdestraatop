
import React, { useState } from "react"
// import Switch from "../../helpers/switch"
import * as Styles from './styles'
import ConfigImg from './configImg'
import { setPreference } from '../../helpers/preference'

const Configuration = ({
  hond,
  verklaring,
  bullshit,
  setHond,
  setVerklaring,
  setBullshit
}) => {
  const [visible, setCheck] = useState(false);

  const save = (set, value) => {
    if (set === 'hond'){
      setHond(value)
      if(value){
        setPreference('bullshit', false)
        setBullshit(false)
      }
    }
    if (set === 'verklaring'){
      setVerklaring(value)
      if (value){
        setPreference('bullshit', false)
        setBullshit(false)
      }
    }
    if (set === 'bullshit'){
      if (value){
        setPreference('hond', false)
        setPreference('verklaring', false)
        setHond(false)
        setVerklaring(false)  
      }

      setBullshit(value)
    }
    
    setPreference(set, value)
  }
  
  return (
    <>
    <Styles.Button onClick={() => {setCheck(!visible)}}>
      <ConfigImg />
    </Styles.Button>

    {visible && (
      <Styles.ConfigWrapper>
        <Styles.ConfigContent>
          <Styles.OptionRow>
            <Styles.Toggle id="hond" type="checkbox" checked={hond} onChange={() => {save('hond', !hond)}}></Styles.Toggle>
            <Styles.ToggleLabel htmlFor="hond"></Styles.ToggleLabel>
            <Styles.TextLabel htmlFor="hond">Ik heb een hond</Styles.TextLabel>
          </Styles.OptionRow>
          <Styles.OptionRow>
            <Styles.Toggle id="verklaring" type="checkbox" checked={verklaring} onChange={() => {save('verklaring',!verklaring)}}></Styles.Toggle>
            <Styles.ToggleLabel htmlFor="verklaring"></Styles.ToggleLabel>
            <Styles.TextLabel htmlFor="verklaring">Ik heb werkgeversverklaring</Styles.TextLabel>
          </Styles.OptionRow>
          <Styles.OptionRow>
            <Styles.Toggle id="bullshit" type="checkbox" checked={bullshit} onChange={() => {save('bullshit', !bullshit)}}></Styles.Toggle>
            <Styles.ToggleLabel htmlFor="bullshit"></Styles.ToggleLabel>
            <Styles.TextLabel htmlFor="bullshit">Ik doe toch wat ik wil</Styles.TextLabel>
          </Styles.OptionRow>
        </Styles.ConfigContent>
      </Styles.ConfigWrapper>
    )}
    </>
  )

}



export default Configuration