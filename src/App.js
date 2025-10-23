import logo from './logo.svg';
import './App.css';
import Calculadora from './components/calculadoraintegral';
import NavbarPropio from './components/Navbar';
import Heropropio from './components/Hero';
import ServiciosPropios from './components/Servicios';
import SolucionesPropias from './components/Soluciones';
import PlanesPropio from './components/planes';
import TestimonioPropio from './components/Testimonio';

function App() {
  return (

    <div className='App'>
        <div className='container'>
        <NavbarPropio/>
        <Heropropio/>
        <ServiciosPropios/>
        <SolucionesPropias/>
        <Calculadora/>
        <PlanesPropio/>
        <TestimonioPropio/>
        </div>
    </div>
  );
}

export default App;
