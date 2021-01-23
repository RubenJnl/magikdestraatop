import React, { useState } from 'react'
import Answer from './components/answer/answer'
import Footer from './components/footer/footer'
import Configuration from './components/configuration/configuration'
import { getPreference } from './helpers/preference'

import './App.css';
import * as Styles from './style/AppStyle';

function App() {
  const [hond, setHond] = useState(getPreference('hond'));
  const [verklaring, setVerklaring] = useState(getPreference('verklaring'));
  const [bullshit, setBullshit] = useState(getPreference('bullshit'));

  return (
    <Styles.Wrapper>
      <Configuration 
        hond={hond} 
        verklaring={verklaring} 
        bullshit={bullshit} 
        setHond={setHond} 
        setVerklaring={setVerklaring} 
        setBullshit={setBullshit} 
      />
      <Styles.Container>
        <Styles.Header>
          Mag ik de straat op?
        </Styles.Header>
        <Answer 
          hond={hond} 
          verklaring={verklaring} 
          bullshit={bullshit}
        />
      </Styles.Container>
      
      <Footer />
    </Styles.Wrapper>
  );
}

export default App;
