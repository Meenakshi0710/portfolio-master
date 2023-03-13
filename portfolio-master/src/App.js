import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import { Routes, Route, Link } from "react-router-dom";
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import Contactus from './Components/Contactus';
function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Header/>
      <Projects/>
      <Skills/>
      <Contactus/>
      <Footer/>
    </div>
  );
}

export default App;
