import './App.css'
import Hero from './assets/Hero/Hero'
import Navbar from './assets/Navigation/Navbar'
import Speciality from './assets/Speciality/Speciality'
import WhyUs from './assets/whyUs/WhyUs'

function App() {
// patient is the user who books an appointment
//doctor will accept and send join link to a zoom meeting
  return (
    <div className="App">   
    <Navbar />
    <Hero />
     <Speciality/>
     <WhyUs />
    </div>
  )
}

export default App
