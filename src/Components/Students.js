import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, useNavigate } from 'react-router-dom';
import { studentsContext } from './StudentContext';
import { useContext } from 'react';


export default function BasicTable() {

  let navigate = useNavigate();

  let [students] = useContext (studentsContext);

  console.log(students);

  const addStudentHandler = () => {
    navigate(`/student-desc`)
  }

  return (
      <>
      <span className='std'>Students Details</span>
      <button className="btn add_btn" onClick={addStudentHandler}>Add Student</button>
    <TableContainer component={Paper} style={{margin:"30px auto",width:"80vw"}}>
      <Table sx={{ minWidth: 550 }} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="row">Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Course</TableCell>
            <TableCell align="right">Batch</TableCell>
            <TableCell align="right">Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student,index) => {
            console.log(student)
            return (<>
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {student.name}
              </TableCell>
              <TableCell align="right">{student.age}</TableCell>
              <TableCell align="right">{student.course}</TableCell>
              <TableCell align="right">{student.batch}</TableCell>
              <TableCell align="right"><Link to={"/student-desc/"+student.id}>edit</Link></TableCell>
            </TableRow>
            </>)
          })}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}