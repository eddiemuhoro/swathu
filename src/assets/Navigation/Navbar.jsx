import { Collapse, Menu } from '@material-ui/core'
import {   LogoutOutlined, Person2, StackedBarChart } from '@mui/icons-material'

import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../styles/nav.css'
const Navbar = ({theme}) => {
    const [expanded, setExpanded] = useState(false)
  return (
    <div style={{width:'100%', height:"50px"}}>
        <nav className={theme === 'black' ? 'navbar dark': 'navbar'}>
            <section className={theme === 'white' ?'logo ': 'logo dark'}>
                <Link to='/'><img src='https://firebasestorage.googleapis.com/v0/b/fir-api-7421d.appspot.com/o/test%2Flogo%201.png?alt=media&token=7e277800-5522-4d18-9f25-80ea9035f6b1' alt logo /></Link>
                <input type='search' placeholder='Search for doctors, clinics, etc. ' />
            </section>
            <section className={expanded ? 'nav-links' : 'nav-links mobile'}>
                <ul>
                    <NavLink to='appointments'>Appointments</NavLink>
                    <NavLink to='doctors'>Consult Doctors</NavLink>
                    <NavLink to='diagnostics'>Diagnostics</NavLink>
                    <button>Login/Register</button>
                </ul>
            </section>
            <div className='menu-icon' >
               <StackedBarChart onClick={() => setExpanded(!expanded)} />
            </div>
        </nav>
    </div>
  )
}

export default Navbar