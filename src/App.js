// import logo from './logo.svg';
import Answer from './components/answer/answer'
import Footer from './components/footer/footer'
import './App.css';
import * as Styles from './style/AppStyle';

function App() {
  return (
    <Styles.Wrapper>
      <Styles.Container>
        <Styles.Header>
          Mag ik de straat op?
        </Styles.Header>
        <Answer />
      </Styles.Container>
      
      <Footer />
    </Styles.Wrapper>
  );
}

export default App;
