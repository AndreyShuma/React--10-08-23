import {useState} from 'react';
import logo from '../logo.svg';
import './App.css';


function App() {
  const [left, setLeft] = useState(0);
  const handlerclick = () => {
    setLeft(left + 1)
  }
  return (
    <div className="App">
      <header className="App-header">
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
          {left ? <>True--</>  : <>False--</>}
          {/* { console.log('False')  console.log('True')} */}
          Learn React {left}
        </a>
        <button onClick={handlerclick}>Click</button>
      </header>
    </div>
  );
}

export default App;
