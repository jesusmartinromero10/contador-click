
import './App.css';
import Botton from './components/botton';
import Count from './components/count';
import freeCodeCampLogo from './images/logo-freecodecamp.png'
import { useState } from 'react'


function App() {

  const [numClick, setNumClick] = useState(0)


  const handClick= () => {
    setNumClick(numClick + 1)
    
  }

  const resetCount = ()=>{
    setNumClick(0)  }
  return (
    <div className="App">
      <div className='container-freecodecamp-logo'>
        <img className='freecodecamp-logo' src={freeCodeCampLogo} alt= 'Logo de freecodecamp' />
      </div>
      <div className='container-principal'>
        <Count numClick = {numClick} />
        <Botton text = 'Click' esBottonClick={true} handClick={handClick} />
        <Botton text = 'Reset' esBottonClick={false} handClick= {resetCount} />
      </div>
    </div>
  );
}

export default App;
