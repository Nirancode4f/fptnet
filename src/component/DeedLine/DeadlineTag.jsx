import { Chip } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

DeadlineTag.propTypes = {
  data: PropTypes.object,
  onHandleClick: PropTypes.func,
};

DeadlineTag.defaultProps = {
  data: [],
  onHandleClick: null,
};

function DeadlineTag(props) {
  const { data } = props;
  console.log(data);

  return (
    <div className="row-deadline ">
      <div className="name-col">
        {" "}
          <div> </div>
      </div>
      <div className="description-col">
          <div> </div>
      </div>
       <div className="form-col">
         <div> ad</div>
       </div>
       <div className="due-col">
      <div className="date-col-receive">
        {" "}
        <Chip
          style={{ fontweight: 600 , marginRight:"12px"}}
          label="20/11/2022"
          color="success"
          variant="filled"
       
       />{" "}
      </div>

      <div className="date-col-return">
        {" "}
        <Chip
          style={{ fontweight: 600 }}
          label="20/11/2022"
          color="success"
          variant="filled"
        />{" "}
      </div>
      </div>
      <div className="edit-col">
        <span className="edit-deadline-btn">
          {" "}
          <i className="fas fa-bars"> </i>{" "}
        </span>
      </div>
    </div>
  );
}

export default DeadlineTag;