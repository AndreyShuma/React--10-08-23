import {useState, useEffect} from 'react';
import axios from 'axios';
import logo from '../logo.svg';
import './App.css';


function App() {
  const [left, setLeft] = useState(0);
  const [start, setStart] = useState('');
  
  console.log('початок');

useEffect(() => {
  const fetchData = async () => {
    const result = await axios.get('https://swapi.dev/api/people/1');
    console.log('result >>>', result.data.name);
    console.log('start>>>', start);
    setStart(result.data.name);
    console.log('end>>>', start);
  };

  fetchData();
}, []);

  console.log('кінець start>>>', start);


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

          Learn React {left}
        </a>
        <button onClick={handlerclick}>Click</button>
        <p>Тут знаходиться ім'я з сайту swapi.dev -----{start}</p>
      </header>
    </div>
  );
}

export default App;
