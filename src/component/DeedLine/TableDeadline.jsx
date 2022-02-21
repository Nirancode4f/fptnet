import React, { useEffect, useState } from "react";
import "./assets/Deadline.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Chip, LinearProgress } from "@mui/material";
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
  Deadlinelist: PropTypes.array,
  DetailDeadlinePopup: PropTypes.func,
};
TableDeadline.defaultProps = {
  Deadlinelist: [],
  DetailDeadlinePopup: null,
};

export default function TableDeadline(props) {
  const { Deadlinelist, Loading, DetailDeadlinePopup } = props;

  const [Ismount, setIsmount] = useState(false);
 

  useEffect(() => {
    return () => {};
  }, [Deadlinelist]);

  const dataLogout = (event) => {
    DetailDeadlinePopup(event);
  };

  return (
    <div className="Table-deadline">
      <div className="title-deadline-and-btns">
        <div className="title-deadline">DEADLINE</div>
      </div>
      {Loading && (
        <LinearProgress
          color="inherit"
          style={{ color: "#f36f21", height: "2px" }}
        />
      )}

      {Deadlinelist &&
        Deadlinelist.map((e) => (
          <DeadlineTag key={e._id} data={e} onHandleClick={dataLogout} />
        ))}
    </div>
  );
}
