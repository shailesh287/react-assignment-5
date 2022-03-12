import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
    <NavLink to = '/' className= "link home">Home</NavLink>
    <NavLink to = '/students' className= "link student" >Student </NavLink>
    <NavLink to = '/contact' className= "link contact" >Contact us </NavLink>
    </nav>
  )
}

export default Navbar