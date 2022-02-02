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
   <div></div>
  );
}

export default DeadlineTag;
