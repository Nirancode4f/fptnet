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
import { Icon } from '@mui/material';
import { Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function createData(deadlineName, description, date, status, note) {
  return { deadlineName, description, date, status, note };
}



export default function TableDeadline() {
  return (
    <div className='Content-deadline'>
    
    <div className="Table-deadline">
      <div className="row-deadline-header ">
          <div className="name-col title-table">Name </div>
          <div className="description-col title-table">Description</div>
          <div className="date-col title-table">Date</div>
          <div className="edit-col title-table "></div>
      </div>

       {/* mỗi Job 1 row */}
       
       <div className="row-deadline ">
          <div className="name-col">       <Chip style={{fontweight:600}} label="Deadline 1" color="primary" variant='outlined' /></div>
          <div className="description-col"><Chip style={{fontweight:600}} label="Nothing Nothing Nothing Nothing Nothing Nothing Nothing Nothing " color="primary" variant='outlined'/></div>
          <div className="date-col">       <Chip style={{fontweight:600}} label="20/11/2022" color="error" variant='filled'/> </div>
      <div className="edit-col"> <span className='edit-deadline-btn'> <i className="fas fa-bars"> </i> </span></div>
      </div>

      <div className="row-deadline ">
          <div className="name-col">       <Chip style={{fontweight:600}} label="Deadline 1" color="primary" variant='outlined' /></div>
          <div className="description-col"><Chip style={{fontweight:600}} label="Nothing Nothing Nothing Nothing Nothing Nothing Nothing Nothing " color="primary" variant='outlined'/></div>
          <div className="date-col">       <Chip style={{fontweight:600}} label="20/11/2022" color="error" variant='filled'/> </div>
      <div className="edit-col"><span className='edit-deadline-btn'> <i className="fas fa-bars"> </i> </span></div>
      </div>

      <div className="row-deadline ">
          <div className="name-col">       <Chip style={{fontweight:600}} label="Deadline 1" color="primary" variant='outlined' /></div>
          <div className="description-col"><Chip style={{fontweight:600}} label="Nothing Nothing Nothing Nothing Nothing Nothing Nothing Nothing " color="primary" variant='outlined'/></div>
          <div className="date-col">       <Chip style={{fontweight:600}} label="20/11/2022" color="error" variant='filled'/> </div>
      <div className="edit-col"><span className='edit-deadline-btn'> <i className="fas fa-bars"> </i> </span></div>
      </div>

      <div className="row-deadline ">
          <div className="name-col">       <Chip style={{fontweight:600}} label="Deadline 1" color="primary" variant='outlined' /></div>
          <div className="description-col"><Chip style={{fontweight:600}} label="Nothing Nothing Nothing Nothing Nothing Nothing Nothing Nothing " color="primary" variant='outlined'/></div>
          <div className="date-col">       <Chip style={{fontweight:600}} label="20/11/2022" color="error" variant='filled'/> </div>
      <div className="edit-col"><span className='edit-deadline-btn'> <i className="fas fa-bars"> </i> </span></div>
      </div>

      <div className="row-deadline ">
          <div className="name-col">       <Chip style={{fontweight:600}} label="Deadline 1" color="primary" variant='outlined' /></div>
          <div className="description-col"><Chip style={{fontweight:600}} label="Nothing Nothing Nothing Nothing Nothing Nothing Nothing Nothing " color="primary" variant='outlined'/></div>
          <div className="date-col">       <Chip style={{fontweight:600}} label="20/11/2022" color="warning" variant='filled'/> </div>
      <div className="edit-col"><span className='edit-deadline-btn'> <i className="fas fa-bars"> </i> </span></div>
      </div>

      <div className="row-deadline ">
          <div className="name-col">       <Chip style={{fontweight:600}} label="Deadline 1" color="primary" variant='outlined' /></div>
          <div className="description-col"><Chip style={{fontweight:600}} label="Nothing Nothing Nothing Nothing Nothing Nothing Nothing Nothing " color="primary" variant='outlined'/></div>
          <div className="date-col">       <Chip style={{fontweight:600}} label="20/11/2022" color="warning" variant='filled'/> </div>
      <div className="edit-col"><span className='edit-deadline-btn'> <i className="fas fa-bars"> </i> </span></div>
      </div>

      <div className="row-deadline ">
          <div className="name-col">       <Chip style={{fontweight:600}} label="Deadline 1" color="primary" variant='outlined' /></div>
          <div className="description-col"><Chip style={{fontweight:600}} label="Nothing Nothing Nothing Nothing Nothing Nothing Nothing Nothing " color="primary" variant='outlined'/></div>
          <div className="date-col">       <Chip style={{fontweight:600}} label="20/11/2022" color="warning" variant='filled'/> </div>
      <div className="edit-col"><span className='edit-deadline-btn'> <i className="fas fa-bars"> </i> </span></div>
      </div>

      <div className="row-deadline ">
          <div className="name-col">       <Chip style={{fontweight:600}} label="Deadline 1" color="primary" variant='outlined' /></div>
          <div className="description-col"><Chip style={{fontweight:600}} label="Nothing Nothing Nothing Nothing Nothing Nothing Nothing Nothing " color="primary" variant='outlined'/></div>
          <div className="date-col">       <Chip style={{fontweight:600}} label="20/11/2022" color="warning" variant='filled'/> </div>
      <div className="edit-col"><span className='edit-deadline-btn'> <i className="fas fa-bars"> </i> </span></div>
      </div>

      <div className="row-deadline ">
          <div className="name-col">       <Chip style={{fontweight:600}} label="Deadline 1" color="primary" variant='outlined' /></div>
          <div className="description-col"><Chip style={{fontweight:600}} label="Nothing Nothing Nothing Nothing Nothing Nothing Nothing Nothing " color="primary" variant='outlined'/></div>
          <div className="date-col">       <Chip style={{fontweight:600}} label="20/11/2022" color="success" variant='filled'/> </div>
      <div className="edit-col"><span className='edit-deadline-btn'> <i className="fas fa-bars"> </i> </span></div>
      </div>

      <div className="row-deadline ">
          <div className="name-col">       <Chip style={{fontweight:600}} label="Deadline 1" color="primary" variant='outlined' /></div>
          <div className="description-col"><Chip style={{fontweight:600}} label="Nothing Nothing Nothing Nothing Nothing Nothing Nothing Nothing " color="primary" variant='outlined'/></div>
          <div className="date-col">       <Chip style={{fontweight:600}} label="20/11/2022" color="success" variant='filled'/> </div>
      <div className="edit-col"><span className='edit-deadline-btn'> <i className="fas fa-bars"> </i> </span></div>
      </div>

      <div className="row-deadline ">
          <div className="name-col">       <Chip style={{fontweight:600}} label="Deadline 1" color="primary" variant='outlined' /></div>
          <div className="description-col"><Chip style={{fontweight:600}} label="Nothing Nothing Nothing Nothing Nothing Nothing Nothing Nothing " color="primary" variant='outlined'/></div>
          <div className="date-col">       <Chip style={{fontweight:600}} label="20/11/2022" color="success" variant='filled'/> </div>
      <div className="edit-col"><span className='edit-deadline-btn'> <i className="fas fa-bars"> </i> </span></div>
      </div>

      <div className="row-deadline ">
          <div className="name-col">       <Chip style={{fontweight:600}} label="Deadline 1" color="primary" variant='outlined' /></div>
          <div className="description-col"><Chip style={{fontweight:600}} label="Nothing Nothing Nothing Nothing Nothing Nothing Nothing Nothing " color="primary" variant='outlined'/></div>
          <div className="date-col">       <Chip style={{fontweight:600}} label="20/11/2022" color="success" variant='filled'/> </div>
      <div className="edit-col"><span className='edit-deadline-btn'> <i className="fas fa-bars"> </i> </span></div>
      </div>

      <div className="row-deadline ">
          <div className="name-col">       <Chip style={{fontweight:600}} label="Deadline 1" color="primary" variant='outlined' /></div>
          <div className="description-col"><Chip style={{fontweight:600}} label="Nothing Nothing Nothing Nothing Nothing Nothing Nothing Nothing " color="primary" variant='outlined'/></div>
          <div className="date-col">       <Chip style={{fontweight:600}} label="20/11/2022" color="success" variant='filled'/> </div>
      <div className="edit-col"><span className='edit-deadline-btn'> <i className="fas fa-bars"> </i> </span></div>
      </div>

      <div className="row-deadline ">
          <div className="name-col">       <Chip style={{fontweight:600}} label="Deadline 1" color="primary" variant='outlined' /></div>
          <div className="description-col"><Chip style={{fontweight:600}} label="Nothing Nothing Nothing Nothing Nothing Nothing Nothing Nothing " color="primary" variant='outlined'/></div>
          <div className="date-col">       <Chip style={{fontweight:600}} label="20/11/2022" color="success" variant='filled'/> </div>
      <div className="edit-col"><span className='edit-deadline-btn'> <i className="fas fa-bars"> </i> </span></div>
      </div>

      <div className="row-deadline ">
          <div className="name-col">       <Chip style={{fontweight:600}} label="Deadline 1" color="primary" variant='outlined' /></div>
          <div className="description-col"><Chip style={{fontweight:600}} label="Nothing Nothing Nothing Nothing Nothing Nothing Nothing Nothing " color="primary" variant='outlined'/></div>
          <div className="date-col">       <Chip style={{fontweight:600}} label="20/11/2022" color="success" variant='filled'/> </div>
      <div className="edit-col"><span className='edit-deadline-btn'> <i className="fas fa-bars"> </i> </span></div>
      </div>

  </div>
  </div>
    )
}
