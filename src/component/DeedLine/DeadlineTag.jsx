import { Chip } from '@mui/material';
import React from 'react';



function DeadlineTag (props)  {



    

  return (

 <div className='Deadline-Box'>




        <div className="row-deadline ">
          <div className="name-col">       <Chip style={{fontweight:600}} label="Deadline 1" color="primary" variant='outlined' /></div>
          <div className="description-col"><Chip style={{fontweight:600}} label="Nothing Nothing Nothing Nothing Nothing Nothing Nothing Nothing " color="primary" variant='outlined'/></div>
          <div className="date-col">       <Chip style={{fontweight:600}} label="20/11/2022" color="warning" variant='filled'/> </div>
      <div className="edit-col"><span className='edit-deadline-btn'> <i className="fas fa-bars"> </i> </span></div>
      </div>


    
     
       <div className="row-deadline ">
          <div className="name-col">       <Chip style={{fontweight:600}} label="Deadline 1" color="primary" variant='outlined' /></div>
          <div className="description-col"><Chip style={{fontweight:600}} label="Nothing Nothing Nothing Nothing Nothing Nothing Nothing Nothing " color="primary" variant='outlined'/></div>
          <div className="date-col">       <Chip style={{fontweight:600}} label="20/11/2022" color="error" variant='filled'/> </div>
      <div className="edit-col"> <span className='edit-deadline-btn'> <i className="fas fa-bars"> </i> </span></div>
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

      </div>
  )
};

export default DeadlineTag


