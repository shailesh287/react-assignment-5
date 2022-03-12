import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { studentsContext } from './StudentContext';
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";

 const AddStudent = () => {

  const [students,setStudents]= useContext (studentsContext)

  const [name,setName] = useState("")
  const [age,setAge] = useState("")
  const [course,setCourse] = useState("")
  const [batch,setBatch] = useState("")
  
  const navigate = useNavigate();

  let [tempObj] = useState({})

  const handleSubmit = () => {
    console.log(name,age,course,batch)
    console.log(tempObj)
    tempObj= {
        name,
        age,
        course,
        batch,
        id:String(students.length + 1)
    }
  
    setStudents(tempObj)
    console.log(tempObj)
    navigate("/students")
}

const backHandler = () => {
    navigate("/students")
}

  return (
      <div>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 5, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField  id="outlined-basic" label="name" value={name} onChange={(e)=>setName(e.target.value)} variant="outlined"/>

      <TextField id="outlined-basic" type='number' label='age' value={age} onChange={(e)=>setAge(e.target.value)} variant="outlined"/>

     <TextField id="outlined-basic" label="course" value={course} onChange={(e)=>setCourse(e.target.value)} variant="outlined" />

     <TextField id="outlined-basic" label="batch" value={batch} onChange={(e)=>setBatch(e.target.value)} variant="outlined"/>
    </Box>
    <div >
    <button className='btn back_btn ' onClick={backHandler} > Back</button>
    <button className='btn submit_btn' type='submit' onClick={handleSubmit}  >Submit</button>
    </div>
    </div>
  );
}

export default AddStudent
