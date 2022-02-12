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
      
        }
      });
    }

    return () => {
      setisUnmound(false);
    };
  }, []);

  return <>{Seotaken.description}</>;
};

export default GetSeo;
