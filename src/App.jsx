import { Button } from '@material-ui/core'
import { useState } from 'react'
import './App.css'
import Hero from './assets/Hero/Hero'
import Navbar from './assets/Navigation/Navbar'
import Speciality from './assets/Speciality/Speciality'
import WhyUs from './assets/whyUs/WhyUs'
import './App.css'
import OurApp from './assets/ourApp/App'
function App() {
    const [theme, setTheme]= useState('white')
    const handleClick = () => {
      theme === 'white' ? setTheme('dark') : setTheme('white');
    }
// patient is the user who books an appointment
//doctor will accept and send join link to a zoom meeting
  return (
    <div  className={theme === 'white'? 'whitetheme': 'darktheme'}>   
          <Button onClick={handleClick}  style={{position:'fixed', height:'20px', zIndex:999, bottom:"0%", left:'0%', backgroundColor: theme === 'white' ? 'transparent' : 'transparent',  color: theme === 'white' ? 'black' : 'white' }}>{theme === 'white'?<p>Black</p>: <p>White</p>}</Button>
    <Navbar theme= {theme}/>
    <Hero />
     <Speciality/>
     <WhyUs />
     <OurApp theme= {theme}/>
    </div>
  )
}

export default App
