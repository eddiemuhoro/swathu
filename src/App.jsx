import { Button } from '@material-ui/core'
import { useState } from 'react'
import './App.css'
import Hero from './assets/Hero/Hero'
import Navbar from './assets/Navigation/Navbar'
import Speciality from './assets/Speciality/Speciality'
import WhyUs from './assets/whyUs/WhyUs'
import './App.css'
function App() {
    const [theme, setTheme]= useState('white')
    const handleClick = () => {
      theme === 'white' ? setTheme('dark') : setTheme('white');
    }
// patient is the user who books an appointment
//doctor will accept and send join link to a zoom meeting
  return (
    <div  className={theme === 'white'? 'whitetheme': 'darktheme'}>   
          <Button onClick={handleClick}  style={{position:'absolute', height:'20px', zIndex:999, top:"20%", right:'5%', backgroundColor: theme === 'white' ? 'white' : 'black',  color: theme === 'white' ? 'black' : 'white' }}>{theme === 'white'?<p>Black</p>: <p>White</p>}</Button>

    <Navbar />
    <Hero />
     <Speciality/>
     <WhyUs />
    </div>
  )
}

export default App
