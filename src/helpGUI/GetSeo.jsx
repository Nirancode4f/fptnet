/* eslint-disable react-hooks/rules-of-hooks */

import React, { useEffect, useState } from "react";
import AxiosMain from "../API/AxiosMain";

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
          console.log(res.message)
        }
      });
    }

    return () => {
      setisUnmound(false);
    };
  }, []);

  return (
    <>
      <div className="deadline-attachment-row">
        <div className="attachment-background">
          <img
            src={`${Seotaken.image ? Seotaken.image : "" }`}
            className="background-attachment-link"
          />
          <div className="attachment-content">
            {Seotaken.title}
          </div>
          <div className="attachment-provider">
            <img
              src={`${Seotaken.icon}`}
              className="favicon"
            />
            {Seotaken.provider}
          </div>
        </div>
      </div>
    </>
  );
};

export default GetSeo;
