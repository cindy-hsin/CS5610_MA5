import React, {useState} from 'react';
import Cell from './Cell';
import './App.css';


function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>Count: {count}</div>
      <div className="grid">
        <Cell id={1} count={count} updateCount={(increment)=>{setCount(count + increment)}}/>
        <Cell id={2} count={count} updateCount={(increment)=>{setCount(count + increment)}}/>
        <Cell id={3} count={count} updateCount={(increment)=>{setCount(count + increment)}}/>
        <Cell id={4} count={count} updateCount={(increment)=>{setCount(count + increment)}}/>
      </div>
    </div>
  );

}

export default App;