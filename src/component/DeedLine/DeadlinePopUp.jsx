import React from "react";
import DeadlineTag from "./DeadlineTag";
import { Avatar, Chip, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ClickAwayListener } from "@mui/base";
import MakeDeadline from "./MakeDeadline/MakeDeadline";
DeadlinePopUp.prototype = {
  OnClickOut: PropTypes.func,
};

DeadlinePopUp.defaultProps = {
  OnClickOut: null,
};

function DeadlinePopUp(props) {
  const { OnClickOut } = props;

  function handleClickAway() {
    OnClickOut(true);
  }

  return (
    <div className="modal-view-detail-deadline">
      <ClickAwayListener onClickAway={handleClickAway}>
        <div className="modal-view-detail-deadline-container">
          <div className="deadline_label"> MAKE YOUR DEADLINE</div>

          <div className="make_deadline_popup_table">
            <MakeDeadline />
          </div>
        </div>
      </ClickAwayListener>
    </div>
  );
}

export default DeadlinePopUp;
