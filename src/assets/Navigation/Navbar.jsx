import { Collapse, Menu } from '@material-ui/core'
import {   LogoutOutlined, Person2, StackedBarChart } from '@mui/icons-material'

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/nav.css'
const Navbar = () => {
    const [expanded, setExpanded] = useState(false)
  return (
    <div style={{width:'100%', height:"50px"}}>
        <nav className='navbar'>
            <section className='logo'>
                <NavLink to='/'>Logo</NavLink>
            </section>
            <section className={expanded ? 'nav-links' : 'nav-links mobile'}>
                <ul>
                    <NavLink to='about'>About</NavLink>
                    <NavLink to='projects'>Projects</NavLink>
                    <NavLink to='contacts'>Contact</NavLink>
                    <button>Log in</button>
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