import React,{useEffect,useState} from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'

import menu_icon from  '../../assets/menu.png.png'
const Navbar = () => {
  const[sticky,setSticky] = useState(false);
  useEffect( ()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 700 ?setSticky(true) :setSticky(false);
    })
  })

  const [mobileMenu,setMobileMenu] = useState(false);
  const toggleMenu = () =>{
    mobileMenu ? setMobileMenu (false) : setMobileMenu(true);
  }

  return (
    <nav className={`container  ${sticky?  'dark-nav' : ''}`}>
    <h1>Pra <span>veen.</span></h1>
    <ul className={mobileMenu?'':'hide-mobile-menu'}>
      <li><Link to='home' smooth ={true} offset ={0} duration={700} >Home</Link></li>
      <li><Link to='services' smooth ={true} offset ={-260} duration={500} >Services</Link></li>
      <li><Link to='about' smooth ={true} offset ={-290} duration={800} >About </Link></li>
      <li><Link to='skills' smooth ={true} offset ={-160} duration={500}  >Skills </Link></li>
      <li><Link to='portfolio' smooth ={true} offset ={-180} duration={500} >Portfolio</Link></li>
      <li><Link to='contact' smooth ={true} offset ={-230} duration={500} ><button className='btn'>Contact </button></Link></li>
      
      
    </ul>
    <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
  </nav>
  )
}

export default Navbar
