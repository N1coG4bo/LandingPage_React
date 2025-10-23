import logo from './logo.svg';
import './App.css';
import Calculadora from './components/calculadoraintegral';
import NavbarPropio from './components/Navbar';

function App() {
  return (

    <div className='App'>
        <div className='container'>
        <NavbarPropio/>
        <Calculadora/>
          
        </div>
    </div>
  );
}

export default App;
