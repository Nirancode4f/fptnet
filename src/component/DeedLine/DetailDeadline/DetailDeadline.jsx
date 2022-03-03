/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from "react";
import "./DetailDeadLine.css";
import GetSeo from "../../../helpGUI/GetSeo";
import DeadlineTag from "../DeadlineTag";
import { Avatar } from "@mui/material";
import { ClickAwayListener } from "@mui/base";
import PropTypes from "prop-types";
import ShareLink from "../../../helpGUI/FormatLinkShare/ShareLink";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { CopyToClipboard } from "react-copy-to-clipboard";

import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";

import scrollLock from "scroll-lock";
import UserReceiveTag from "./UserReceiveTag";

DetailDeadline.prototype = {
  onClickOut: PropTypes.func,
};
DetailDeadline.defaultProps = {
  onClickOut: null,
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
    scrollLock.disablePageScroll();
  }, []);


  return (
    <div className="DetailDeadline">
      <ClickAwayListener onClickAway={handleClick}>
        <div className="DetailDeadline-container">
          <div className="DetailDeadline-container-receiver">
            {" "}
            Received List

            { data.student.map((e) => ( <UserReceiveTag key={e._id}  data={e} /> )) }

            
          </div>
          <div className="DetailDeadline-container-body">
            <div className="DetailDeadline-container-body__title-and-provider">
              {data.attachment[0] && <GetSeo link={data.attachment[0]} />}
            </div>
            <div className="DetailDeadline-container-body__content">
              {data.content}
            </div>
            <div className="DetailDeadline-container-body__note">
              {data.note}
            </div>
            <div className="share-deadline">
              <div className="text-share-link">Share: {Link}</div>
              <div className="share-deadline-button">
                <CopyToClipboard text={`${Link}`} onCopy={CheckCopy}>
                  {isCopy ? (
                    <button>
                      <DoneAllIcon color="warning" />{" "}
                    </button>
                  ) : (
                    <button>
                      <ContentCopyRoundedIcon lable={"share your link"} />{" "}
                    </button>
                  )}
                </CopyToClipboard>
                {isCopy && <span style={{ color: "red" }}>Copied.</span>}
              </div>
            </div>
          </div>
        </div>
      </ClickAwayListener>
    </div>
  );
}
export default DetailDeadline;
