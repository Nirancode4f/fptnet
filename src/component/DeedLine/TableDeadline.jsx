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
import { Badge } from "@mui/material";
import { Avatar } from "@mui/material";
import { TextField } from "@mui/material";
import DeadlinePopUp from "./DeadlinePopUp";


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
      </div>


      
      

    </div>
  );
}
