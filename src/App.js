import {Routes, Route} from 'react-router-dom'
import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Student from './Components/Students'
import Contact from './Components/Contact'
import './Components/style.css'
import AddStudent from './Components/AddStudent'
import EditStudent from './Components/EditStudent'
import { StudentProvider } from './Components/StudentContext'



const App = () => {
  return (
    <>
    <StudentProvider>
    <Navbar/>
    <Routes>
    <Route path='/' element ={<Home/> }></Route> 
    <Route path='/home' element ={<Home/> }></Route> 
    <Route path='/students' element= { <Student/>}  />
    <Route path='contact' element= { <Contact/>}  />
    <Route path="/student-desc" element={<AddStudent/> } />
    <Route path="/student-desc/:stdId" element={<EditStudent/> } />
  </Routes>
  </StudentProvider>
    </>
  )
}

export default App