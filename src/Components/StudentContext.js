import React, { createContext, useState } from "react";

export const studentsContext= createContext();

export const StudentProvider = (props) => {

    let [students, setStudents] = useState([
        {
            id:'1',
            name:'Shailesh',
            age:'24',
            course:'MERN',
            batch:'Oct',
          
        },
        {
            id:'2',
            name:'John',
            age:'23',
            course:'MERN',
            batch:'Sept',
            
        },
        {
            id:'3',
            name:'Sam',
            age:'25',
            course:'MERN',
            batch:'Nov',
            
        },
        {
            id:'4',
            name:'Ash',
            age:'21',
            course:'MERN',
            batch:'Oct',
          
        },
        {
            id:'5',
            name:'Don',
            age:'25',
            course:'MERN',
            batch:'Sept',
           
        },
        
    ]
);

    const addStudent = (data) =>{
        setStudents([...students,data])
    }


    return(
        <>
        <studentsContext.Provider value={[students, addStudent]}>
            {props.children}
        </studentsContext.Provider>
        </>
    )
}