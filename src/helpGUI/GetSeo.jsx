/* eslint-disable react-hooks/rules-of-hooks */

import { Link } from "@mui/material";
import React, { useEffect, useState } from "react";

import AxiosMain from "../API/AxiosMain";
import logo from "./logo.png";

const GetSeo = (props) => {
  const [Seotaken, setSeotaken] = useState({});
  const { link } = props;
  const [isUnmound, setisUnmound] = useState(true);

  useEffect(() => {
    if (link) {
      AxiosMain.post("/api/linkinfor/seo", {
        link: `${link}`,
      }).then((res) => {
        if (isUnmound) {
          setSeotaken(res.message);
        }
      });
    }

    return () => {
      setisUnmound(false);
    };
  }, [isUnmound, link]);

  return (
    <div style={{ color: "#000" }} href={link}>
      <div className="deadline-attachment-row">
        <div className="attachment-background">
          <div className="attachment-provider">
            <img src={`${Seotaken.icon}`} className="favicon" />
          </div>
          <div className="attachment-content">{Seotaken.title}</div>
        </div>
      </div>
    </div>
  );
};

export default GetSeo;
