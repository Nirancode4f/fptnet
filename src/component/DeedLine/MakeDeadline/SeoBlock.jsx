/* eslint-disable no-use-before-define */
import React, { useEffect, useLayoutEffect, useState } from "react";
import AxiosMain from "../../../API/AxiosMain";
import PropTypes from "prop-types";

const SeoBlock = (props) => {
  const { Link } = props;

  const [Seotaken, setSeotaken] = useState({});

  const [isUnmound, setisUnmound] = useState(true);

  const handleBegin = () => {
    if (Link) {
      AxiosMain.post("/api/linkinfor/seo", {
        link: `${Link}`,
      }).then((res) => {
        if (isUnmound) {
          if (res.success) {
            setSeotaken(res.message);
          }else{
            setSeotaken({})
          }
        }
      });
    }
  };

  useEffect(() => {
    handleBegin();

    return () => {
      setisUnmound(false);
    };
  }, [Link]);

  console.log(`seo  `, Seotaken);

  return <div>{Seotaken.url}</div>;
};

export default SeoBlock;
