import React, { useEffect, useState } from "react";

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

// import { Container } from './styles';

function DetaillReceive(props) {
  function handleClickAway() {}

  return (
    <>
      <div className="DetailDeadline">
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className="DetailDeadline-container">
            
          
              <div className="DetailDeadline-container-body__title-and-provider">
                {/* {data.attachment[0] && <GetSeo link={data.attachment[0]} />} */}
              </div>
              <div className="DetailDeadline-container-body__content">
                {/* {data.content} */}
              </div>
              <div className="DetailDeadline-container-body__note">
                {/* {data.note} */}
              </div>
              <div className="share-deadline">
                {/* <div className="text-share-link">Share: {Link}</div> */}
                <div className="share-deadline-button">
                  {/* {isCopy && <span style={{ color: "red" }}>Copied.</span>} */}
                </div>
              </div>
       
          </div>
        </ClickAwayListener>
      </div>
    </>
  );
}

export default DetaillReceive;
