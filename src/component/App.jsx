import React, {useState} from 'react';
import Cell from './Cell';
import CellWithRedux from './CellWithRedux';
import './App.css';


function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>Count: {count}</div>
      <div className="grid">
        {/* <Cell count={count} updateCount={(increment)=>{setCount(count + increment)}}/>
        <Cell count={count} updateCount={(increment)=>{setCount(count + increment)}}/>
        <Cell count={count} updateCount={(increment)=>{setCount(count + increment)}}/>
        <Cell count={count} updateCount={(increment)=>{setCount(count + increment)}}/> */}
        <Cell count={count} updateCount={(newCount)=>{setCount(newCount)}}/>
        <Cell count={count} updateCount={(newCount)=>{setCount(newCount)}}/>
        <Cell count={count} updateCount={(newCount)=>{setCount(newCount)}}/>
        <Cell count={count} updateCount={(newCount)=>{setCount(newCount)}}/>

        


      </div>


      <div>Count: </div>
      <div className="grid">
        <CellWithRedux/>
        <CellWithRedux/>
        <CellWithRedux/>
        <CellWithRedux/>
      </div>


    </div>
  );

}

export default App;