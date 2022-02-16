/* eslint-disable react-hooks/rules-of-hooks */


import { Link } from "@mui/material";
import React, { useEffect, useState } from "react";

import AxiosMain from "../API/AxiosMain";
import logo  from "./logo.png";

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
          console.log(res.message);
        }
      });
    }

    return () => {
      setisUnmound(false);
    };
  }, []);

  return (
    
    <Link href={link}>
      <div className="deadline-attachment-row">
        <div className="attachment-background">
          {Seotaken.image ? (
            <img
              src={`${Seotaken.image}`}
              className="background-attachment-link"
            />
          ) : (
            <img
              src={logo}
              className="background-attachment-link"
            />
          )}
          <div className="attachment-content">{Seotaken.title}</div>
          <div className="attachment-provider">
            <img src={`${Seotaken.icon}`} className="favicon" />
            {Seotaken.provider}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GetSeo;
