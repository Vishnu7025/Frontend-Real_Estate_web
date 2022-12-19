// import logo from './logo.svg';
import './App.css';
import Second from './Second';

function App() {
  const theFruits = [
    {id:1,name:"apple",color:"red"},
    { id: 2,name: "pinapple", color:"yellow"},
    { id: 3,name: "grapes", color:"green"},
    { id: 4,name: "green apple", color:"green"},
  ]
  return (
    <div>
     <Second />
     { theFruits.map((fruits)=>{
      return <h2 key={fruits.id}>This is {fruits.name} with have color {fruits.color}</h2>
     })}
    </div>
    
  );
}

export default App;
