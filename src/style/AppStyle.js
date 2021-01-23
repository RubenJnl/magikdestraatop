import styled from 'styled-components';
import getBackground from '../helpers/background'
import Color from '../helpers/color'

export const Header = styled.h1`
  color: ${Color()};
  text-shadow: white 1px 0 5px;
  margin: 0;
  line-height: 1.15;
  font-size: 3em;
  font-size: clamp(2em, 7em, 10vw);
`

export const Wrapper = styled.main`
    padding: 5rem 0 .5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
    background: url(${getBackground().small}) no-repeat center center; 
    background-position: center center;

    @media all and (min-width: 500px), (min-height: 500px) {
        background-image: url(${getBackground().medium});
    }
    @media all and (min-height: 500px) and (max-width: 1280px) {
        background-size: auto 100%;
    }
    
    @media all and (min-width: 1500px) {
        background-image: url(${getBackground().medium});
    }
    
    @media all and (min-width: 1600px) {  
        background-image: url(${getBackground().large});
    }
`

export const Container = styled.div`
  padding: 10vh .5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
