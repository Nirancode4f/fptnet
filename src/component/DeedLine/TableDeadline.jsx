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
import AxiosMain from "../../API/AxiosMain";
import isEqual from "lodash/isEqual";

TableDeadline.prototype = {
  DetailDeadlinePopup: PropTypes.func,
};
TableDeadline.defaultProps = {
  DetailDeadlinePopup: null,
};

export default function TableDeadline(props) {
  const { DetailDeadlinePopup } = props;

  const [Loading, setLoading] = useState(true);
  const [DeadlineList, setDeadlineList] = useState([]);


  const [LoginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

  const [Ismount, setIsmount] = useState(true);

  function GetDeadline() {
    try {
      AxiosMain.post("/api/deadline/getdeadlines", {
        userId: `${LoginData.user._id}`,
      }).then((res) => {
        setLoading(false);

        if (Ismount) {
          if (!isEqual(res.deadlines, DeadlineList)) {
            setDeadlineList(res.deadlines);

          }
        }
      });
      return () => {
        setIsmount(false);
      };
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setInterval(() => {
      GetDeadline();
    }, 5000);

    return () => {
      setIsmount(false);
      clearInterval();
    };
  }, []);

  const dataLogout = (event) => {
    DetailDeadlinePopup(event);
  };

  console.log(DeadlineList)

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

      {DeadlineList &&
        DeadlineList.map((e) => (
          <DeadlineTag key={e._id} data={e} onHandleClick={dataLogout} />
        ))}
    </div>
  );
}
