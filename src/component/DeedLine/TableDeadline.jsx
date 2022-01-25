import React, { useEffect, useState } from 'react'
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
import DeadlineTag from './DeadlineTag';
import { propTypes } from 'react-bootstrap/esm/Image';

import PropTypes from "prop-types"



TableDeadline.prototype={
  Deadlinelist: PropTypes.array
}
TableDeadline.defaultProps = {
  Deadlinelist: []
}

export default function TableDeadline(props) {


const {Deadlinelist} = props

const [Ismount, setIsmount] = useState(false);



useEffect(() => {
  
  console.log(`something`,Deadlinelist)
  
return () => {
    ;
  };
}, [Deadlinelist]);




  return (
    <div className='Content-deadline'>
    
    <div className="Table-deadline">
      <div className="row-deadline-header ">
          <div className="name-col title-table">Name </div>
          <div className="description-col title-table">Description</div>
          <div className="form-col title-table">From</div>
         <div className="due-col title-table">Due</div>
          <div className="edit-col title-table "></div>
      </div>

       {/* mỗi Job 1 row */}

      {
         // eslint-disable-next-line array-callback-return
         Deadlinelist ?
         Deadlinelist.map(e=>(
          <DeadlineTag key={e._id} data={e}  />
         ))
          : (<></>)
  
      }


  </div>
  </div>
    )
}
