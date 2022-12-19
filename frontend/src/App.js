// import logo from './logo.svg';
import './App.css';
import Second from './Second';

function App() {
  function Mycombo(props){
    return <h1>my combo {props.name}</h1>;
  }
  return (
    <div>
     <h1 className='visu'>heoo</h1>
     <Mycombo name='sheddy' />
     <Second />
    </div>
    
  );
}

export default App;
