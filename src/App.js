// import logo from './logo.svg';
import Answer from './components/answer'
import Footer from './components/footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <h1 className="title">
          Mag ik de straat op?
        </h1>
        <Answer />
      </main>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Footer />
    </div>
  );
}

export default App;
