/* eslint-disable no-use-before-define */
import React from "react";
import "./DetailDeadLine.css";
import GetSeo from "../../../helpGUI/GetSeo";
import DeadlineTag from "../DeadlineTag";
import { Avatar } from "@mui/material";
import { ClickAwayListener } from "@mui/base";
import PropTypes from "prop-types";

DetailDeadline.prototype = {
  onClickOut: PropTypes.func,
};
DetailDeadline.defaultProps = {
  onClickOut: true,
};

function DetailDeadline(props) {
  const { data, onClickOut } = props;

 

  function handleClick(){
  
    console.log(`update`)

    onClickOut(false)

  };

  return (
    <div className="DetailDeadline">
      <ClickAwayListener onClickAway={handleClick}>
        <div className="DetailDeadline-container">
          <div className="DetailDeadline-container-receiver">
            <Avatar>H</Avatar>
            <Avatar sx={{ bgcolor: "green" }}>N</Avatar>
            <Avatar sx={{ bgcolor: "red" }}>OP</Avatar>
          </div>
          <div className="DetailDeadline-container-body">
            <div className="DetailDeadline-container-body__title-and-provider">
              <GetSeo link={data.attachment[0]} />
            </div>
            <div className="DetailDeadline-container-body__content">
              {data.content}
            </div>
            <div className="DetailDeadline-container-body__note">
              Note: {data.note}
            </div>
          </div>
        </div>
      </ClickAwayListener>
    </div>
  );
};
export default DetailDeadline;
