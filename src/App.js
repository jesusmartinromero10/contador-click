
import './App.css';
import Botton from './components/botton';
import freeCodeCampLogo from './images/logo-freecodecamp.png'

function App() {
  const handClick= ()=>{
    console.log('hola')
    const [click, setClick] = 0
  }

  const resetCount = ()=>{
    console.log('adios')
  }
  return (
    <div className="App">
      <div className='container-freecodecamp-logo'>
        <img className='freecodecamp-logo' src={freeCodeCampLogo} alt= 'Logo de freecodecamp' />
      </div>
      <div className='container-principal'>
        <Botton text = 'Click' esBottonClick={true} handClick={handClick} />
        <Botton text = 'Reset' esBottonClick={false} handClick= {resetCount} />
      </div>
    </div>
  );
}

export default App;
