import React, { useEffect, useState } from "react";
import "./assets/Deadline.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Chip } from "@mui/material";
import { Icon } from "@mui/material";
import { Menu } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DeadlineTag from "./DeadlineTag";
import { propTypes } from "react-bootstrap/esm/Image";
import { Button } from "@mui/material";
import { Badge } from '@mui/material';
import { Avatar } from '@mui/material';

import PropTypes from "prop-types";

TableDeadline.prototype = {
  Deadlinelist: propTypes.array,
};
TableDeadline.defaultProps = {
  Deadlinelist: [],
};

export default function TableDeadline(props) {
  const { Deadlinelist } = props;

  const [Ismount, setIsmount] = useState(false);

  useEffect(() => {
    console.log(`something`, Deadlinelist);

    return () => {};
  }, [Deadlinelist]);

  return (
    <div className="Content-deadline">
      <div className="Table-deadline">
        <div className="title-deadline-and-btns">
          <div className="title-deadline">DEADLINE</div>
          <div className="add-deadline-btn">
            <Button color="warning" variant="contained" style={{}}>
              ADD
            </Button>
          </div>
        </div>

        


        {Deadlinelist &&
          Deadlinelist.map((e) => <DeadlineTag key={e._id} data={e} />)}
     {/* mỗi dl 1 section */}
    <div className="deadline-section">
          <div className="deadline-info-row">
            <div className="deadline-creater-img" >
            <Avatar
                  alt="Avatar"
                  src="data:image/png;base64,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"
                  sx={{ width: 60, height: 60 }}
                  style={{
                    border:"1px solid #f36f21"
                  }}
                />
            </div>
            <div className="deadline-name">Deadline Name</div>
            <div className="deadline-note">Deadline Note</div>
            <div className="deadline-date">
            
            <Chip color="success" label="1/1/2022" size='medium' style={{marginRight:20}}>DATE</Chip>
            <Badge 
            badgeContent={"DUE"} 
            color="warning" 
            anchorOrigin={{
             vertical: 'top',
              horizontal: 'right',
            }}
            style={{
              tranform:"translateX(50%)"
            }}
            >
            
            <Chip color="success" label="2/1/2022" size='medium'/>
           </Badge>
            </div>
         
          </div>
             {/* mỗi attachment 1 row */}
          <div className="deadline-attachment-row">
          attachment
          </div>
      </div> 

       {/* mỗi dl 1 section */}
    <div className="deadline-section">
          <div className="deadline-info-row">
            <div className="deadline-creater-img" >
            <Avatar
                  alt="Avatar"
                  src="data:image/png;base64,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"
                  sx={{ width: 60, height: 60 }}
                  style={{
                    border:"1px solid #f36f21"
                  }}
                />
            </div>
            <div className="deadline-name">Deadline Name</div>
            <div className="deadline-note">Deadline Note</div>
            <div className="deadline-date">
            
            <Chip color="success" label="1/1/2022" size='medium' style={{marginRight:20}}>DATE</Chip>
            <Badge 
            badgeContent={"DUE"} 
            color="warning" 
            anchorOrigin={{
             vertical: 'top',
              horizontal: 'right',
            }}
            style={{
              tranform:"translateX(50%)"
            }}
            >
            
            <Chip color="success" label="2/1/2022" size='medium'/>
           </Badge>
            </div>
         
          </div>
             {/* mỗi attachment 1 row */}
          <div className="deadline-attachment-row">
          attachment
          </div>
      </div> 
      





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
