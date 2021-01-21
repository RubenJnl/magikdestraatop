import styled from 'styled-components';
import getBackground from '../helpers/background'
import Switch from '../helpers/switch'

export const Header = styled.h1`
  color: ${Switch()};
  margin: 0;
  line-height: 1.15;
  font-size: 3em;
  font-size: clamp(2em, 10em, 10vw);
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
    
    @media all and (min-width: 1500px) {
        background-image: url(${getBackground().medium});
    }
    
    @media all and (min-width: 2000px) {  
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

// let all = `
// .container {
//   min-height: 100vh;
//   padding: 0 0.5rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   /* background: url('/francois-hoang-xxZCfAnMUrM-unsplash-small.jpg') no-repeat center center; */
//   background-position: center center;
// }

// @media all and (min-width: 500px), (min-height: 500px) {
//   .container {
//     /* background-image: url(francois-hoang-xxZCfAnMUrM-unsplash-medium.jpg); */
//   }
// }

// @media all and (min-width: 1500px) {
//   .container {
//     /* background-image: url(francois-hoang-xxZCfAnMUrM-unsplash.jpg); */
//   }
// }

// @media all and (min-width: 2000px) {  
//   .container {
//     /* background-image: url(francois-hoang-xxZCfAnMUrM-unsplash-original.jpg); */
//   }
// }

// main {
//   padding: 5rem 0;
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// }

// footer {
//   width: 100%;
//   max-width: 690px;
//   padding: 15px 0;
//   border-top: 1px solid #eaeaea;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: space-around;
//   align-items: center;
// }

// footer p {
//   width: 100%;
//   font-size: 60%;
//   text-align: center;
//   justify-content: center;
//   padding: 0;
//   margin: 0;
// }

// a {
//   color: inherit;
//   text-decoration: none;
// }

// .title {
//   color: rgb(150, 140, 150);
//   margin: 0;
//   line-height: 1.15;
//   font-size: 3em;
//   font-size: clamp(2em, 10em, 10vw);
// }

// .answer {
//   display: block;
// }

// .answer {
//   color: rgb(100, 200, 20);
//   font-size: 3em;
//   font-size: clamp(2em, 10em, 10vw);
//   margin-top: .25em;
// }

// .answer.negative {
//   color: rgb(170, 40, 10);
// }

// .title,
// .description {
//   text-align: center;
// }

// .description {
//   line-height: 1.5;
//   font-size: 1.5rem;
// }

// .grid {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-wrap: wrap;

//   max-width: 800px;
//   margin-top: 3rem;
// }

// .logo {
//   height: 1em;
// }

// @media (max-width: 600px) {
//   .grid {
//     width: 100%;
//     flex-direction: column;
//   }
// }
// `