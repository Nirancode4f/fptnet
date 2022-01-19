import React from 'react'
import "./assets/Deadline.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Chip } from '@mui/material';
function createData(deadlineName, description, date, status, note) {
  return { deadlineName, description, date, status, note };
}

const rows = [
  createData('1000 bài tập JS cơ bản', 'Làm theo yêu cầu của giáo viên', '14/12/2022', <Chip label="URGENT" color="error" />, 'code sao ra kết quả'),
  createData('1000 bài tập JS cơ bản', 'Làm theo yêu cầu của giáo viên', '14/12/2022', <Chip label="URGENT" color="error" />, 'code sao ra kết quả'),
  createData('1000 bài tập JS cơ bản', 'Làm theo yêu cầu của giáo viên', '14/12/2022', <Chip label="URGENT" color="error" />, 'code sao ra kết quả'),
  createData('1000 bài tập JS cơ bản', 'Làm theo yêu cầu của giáo viên', '14/12/2022', <Chip label="URGENT" color="error" />, 'code sao ra kết quả'),
  createData('1000 bài tập JS cơ bản', 'Làm theo yêu cầu của giáo viên', '14/12/2022', <Chip label="URGENT" color="error" />, 'code sao ra kết quả'),
  createData('1000 bài tập JS cơ bản', 'Làm theo yêu cầu của giáo viên', '14/12/2022', <Chip label="URGENT" color="error" />, 'code sao ra kết quả'),
  createData('1000 bài tập JS cơ bản', 'Làm theo yêu cầu của giáo viên', '14/12/2022', <Chip label="URGENT" color="error" />, 'code sao ra kết quả'),
  createData('Tiếng anh chuyên ngành 6', 'Làm theo yêu cầu của giáo viên', '14/12/2022', <Chip label="URGENT" color="error" />, 'không có ngữ pháp'),
  createData('Bài tập Python cơ bản','Làm theo yêu cầu của giáo viên','14/12/2022',<Chip label="NORMAL" color="warning" />,'dùng hàm để giải'),
  createData('Bài tập Python cơ bản','Làm theo yêu cầu của giáo viên','14/12/2022',<Chip label="NORMAL" color="warning" />,'dùng hàm để giải'),
  createData('Bài tập Python cơ bản','Làm theo yêu cầu của giáo viên','14/12/2022',<Chip label="NORMAL" color="warning" />,'dùng hàm để giải'),
  createData('Bài tập Python cơ bản','Làm theo yêu cầu của giáo viên','14/12/2022',<Chip label="NORMAL" color="warning" />,'dùng hàm để giải'),
  createData('Bài tập Python cơ bản','Làm theo yêu cầu của giáo viên','14/12/2022',<Chip label="NORMAL" color="warning" />,'dùng hàm để giải'),
  createData('Bài tập Python cơ bản','Làm theo yêu cầu của giáo viên','14/12/2022',<Chip label="NORMAL" color="warning" />,'dùng hàm để giải'),
  createData('Vovinam 2 video', 'Làm theo yêu cầu của giáo viên', '14/12/2022', <Chip label="NORMAL" color="warning" />, ''),
  createData('Vovinam 2 video', 'Làm theo yêu cầu của giáo viên', '14/12/2022', <Chip label="NORMAL" color="warning" />, ''),
  createData('Quizzi for Fe','Làm theo yêu cầu của giáo viên','14/12/2022',<Chip label="COMPLETED" color="success" />, ''),
  createData('Quizzi for Fe','Làm theo yêu cầu của giáo viên','14/12/2022',<Chip label="COMPLETED" color="success" />, ''),
  createData('Quizzi for Fe','Làm theo yêu cầu của giáo viên','14/12/2022',<Chip label="COMPLETED" color="success" />, ''),
  createData('Quizzi for Fe','Làm theo yêu cầu của giáo viên','14/12/2022',<Chip label="COMPLETED" color="success" />, ''),
  createData('Quizzi for Fe','Làm theo yêu cầu của giáo viên','14/12/2022',<Chip label="COMPLETED" color="success" />, ''),
  createData('Quizzi for Fe','Làm theo yêu cầu của giáo viên','14/12/2022',<Chip label="COMPLETED" color="success" />, ''),
];

export default function TableDeadline() {
  return (
    <div className='Content-deadline'>
    
    <div className="Table-deadline">
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table" >
      <TableHead>
        <TableRow >
          <TableCell style={{fontweight:"700",color:"#f36f21", }}
          >Deadline Name
          
          </TableCell>
          <TableCell style={{fontweight:"700",color:"#f36f21", }}
          align="right">Description
          
          </TableCell>
          <TableCell style={{fontweight:"700",color:"#f36f21", }}
          align="right">Date
          
          </TableCell>
          <TableCell style={{fontweight:"700",color:"#f36f21", }}
          align="right">Status
          
          </TableCell>
          <TableCell style={{fontweight:"700",color:"#f36f21", }}
          align="right">Note
          
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
            <TableCell component="th" scope="row">
             <b> {row.deadlineName} </b>
            </TableCell>
            <TableCell align="right">{row.description}</TableCell>
            <TableCell align="right">{row.date}</TableCell>
            <TableCell align="right"> {row.status } </TableCell>
            <TableCell align="right">{row.note}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
  </div>
    )
}
