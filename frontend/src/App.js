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
  const [Name ,setName] = useState('vishnu');
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
    <button onClick={()=> setName('')} className="butt">add name</button>
     <h1 className='count'>Counter:{Count}</h1>
     <h1>Name:{Name}</h1>
     { Count > 10 ? <h1> more than 10</h1> : <h1>less than 10</h1>}
     
    </div>
    
  );
}

export default App;
