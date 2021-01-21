// import logo from './logo.svg';
import Answer from './components/answer/answer'
import Footer from './components/footer/footer'
import './App.css';
import * as Styles from './AppStyle';

function App() {
  return (
    <div>
      <Styles.Container>
        <h1 className="title">
          Mag ik de straat op?
        </h1>
        <Answer />
      </Styles.Container>
      
      <Footer />
    </div>
  );
}

export default App;
