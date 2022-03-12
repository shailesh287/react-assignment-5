import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useNavigate, useParams} from 'react-router-dom';
import {studentsContext} from './StudentContext';
import {useState,useContext} from 'react'




 const EditStudent = () => {

    const navigate = useNavigate();
  
    const {stdId}=useParams()
    
    const [students]= useContext(studentsContext);

    const [name,setName] = useState(students[stdId-1].name)
    const [age,setAge] = useState(students[stdId-1].age)
    const [course,setCourse] = useState(students[stdId-1].course)
    const [batch,setBatch] = useState(students[stdId-1].batch)
  
    let [tempObj] = useState(students[stdId-1])

 
    const handleSubmit = () => {
        console.log(name,age,course,batch)
        console.log(tempObj)
        tempObj= {
            name,
            age,
            course,
            batch,
            id:String(stdId)
        }
        console.log("temp_obj"+tempObj.name)
        console.log(students.splice((stdId-1),1,tempObj))
        navigate("/students")
    }

    const handleBack = () => {
        navigate("/students")
    }

  return(
        students.map((student,index) => { 
            if(student.id===stdId)
              return (
      
                 <div key ={index}>
                   <Box
                       component="form"
                        sx={{
                          '& > :not(style)': { m: 5, width: '50ch' },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField  id="outlined-basic1" label="name" value={name} onChange={(e)=>setName(e.target.value)} variant="outlined"/>

                        <TextField id="outlined-basic2" type='number' label='age' value={age} onChange={(e)=>setAge(e.target.value)} variant="outlined"/>

                       <TextField id="outlined-basic3" label="course" value={course} onChange={(e)=>setCourse(e.target.value)} variant="outlined" />

                       <TextField id="outlined-basic4" label="batch" value={batch} onChange={(e)=>setBatch(e.target.value)} variant="outlined"/>
                </Box>

                 <div className='sub'>
                    <button className='btn back_btn ' onClick={handleBack} > Back</button>
                    <button className='btn submit_btn' type='submit' onClick={handleSubmit}  >Submit</button>

                </div>
            </div>

             )
           return null;
        })
    )
};

export default EditStudent