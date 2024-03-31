import React,{useState} from 'react'
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Titile from './Component/Titile/Titile';
import Services from './Component/Services/Services';
import About from './Component/About/About';
import Skills from './Component/Skills/Skills';
import Portfolio from './Component/Portfolio/Portfolio';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';

const App = () => {
  const[playState,setPlayState] = useState(false);
  return (
    <>
      <Navbar/>
      <Home/>
      <div className="container">
      <Titile  subTitle='What We Offer' title='Services'/>
      <Services/>
      <Titile  subTitle='......' title='About'/>
      <About/>
      <Titile  subTitle='' title='Skills'/>
      <Skills/>
      <Titile  subTitle='My Recent Projects' title='Portfolio'/>
       <Portfolio/>
       <Titile  subTitle='Get In Touch' title='Contact '/>
     <Contact/>
    
     <Footer/>
      </div>
      
    </>
  )
}


export default App

