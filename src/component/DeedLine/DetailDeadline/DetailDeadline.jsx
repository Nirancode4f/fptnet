/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from "react";
import "./DetailDeadLine.css";
import GetSeo from "../../../helpGUI/GetSeo";
import DeadlineTag from "../DeadlineTag";
import { Avatar } from "@mui/material";
import { ClickAwayListener } from "@mui/base";
import PropTypes from "prop-types";
import ShareLink from "../../../helpGUI/FormatLinkShare/ShareLink";
import { CopyToClipboard } from "react-copy-to-clipboard";

DetailDeadline.prototype = {
  onClickOut: PropTypes.func,
};
DetailDeadline.defaultProps = {
  onClickOut: true,
};

function DetailDeadline(props) {
  const { data, onClickOut } = props;
  const [Link, setLink] = useState("");
  const [isCopy, setisCopy] = useState(false);

  const CheckCopy = () => {
    setisCopy(true);
  };

  function handleClick() {
    onClickOut(false);
  }

  useEffect(() => {
    const link = ShareLink.Deadline({ dl: `${data._id}` });
    setLink(link);
    console.log(link);
  }, []);

  console.log(data);
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
            <div>{Link}</div>
            <div className="share-deadline-button">
              <CopyToClipboard text={`${Link}`} onCopy={CheckCopy}>
                <button>CLick to Copy</button>
              </CopyToClipboard>
              {isCopy && <span style={{color: 'red'}}>Copied.</span>}
            </div>
          </div>
        </div>
      </ClickAwayListener>
    </div>
  );
}
export default DetailDeadline;
