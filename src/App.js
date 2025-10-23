import logo from './logo.svg';
import './App.css';
import Calculadora from './components/calculadoraintegral';
import NavbarPropio from './components/Navbar';
import Heropropio from './components/Hero';

function App() {
  return (

    <div className='App'>
        <div className='container'>
        <NavbarPropio/>
        <Heropropio/>
        <Calculadora/>
          
        </div>
    </div>
  );
}

export default App;
