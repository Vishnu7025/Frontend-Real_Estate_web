// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Second from './Second';
import { useState } from 'react';

function App() {
  const theFruits = [
    {id:1,name:"apple",color:"red"},
    { id: 2,name: "pinapple", color:"yellow"},
 ]
  const [Count, setCount] = useState(0);
  return (
    <div>
     <Second />
     { theFruits.map((fruits)=>{
      return <h2 key={fruits.id}>This is {fruits.name} with have color {fruits.color}</h2>
     })}
     <div>
        <button onClick={()=> setCount(Count+1)} className='butt'>Add+</button>
        <button onClick={()=> setCount(Count-1)} className="butt">Minus-</button>

     </div>
    
     <h1>Counter:{Count}</h1>
    </div>
    
  );
}

export default App;
