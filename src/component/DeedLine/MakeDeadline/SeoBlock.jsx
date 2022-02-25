/* eslint-disable no-use-before-define */
import React, { useEffect, useLayoutEffect, useState } from "react";
import AxiosMain from "../../../API/AxiosMain";
import PropTypes from "prop-types";
import MakeSeoURL from "./MakeSeoURL";

const SeoBlock = (props) => {
  const { Link } = props;

  const [Seotaken, setSeotaken] = useState({});

  const [isUnmound, setisUnmound] = useState(true);
  const [IsSuccess, setIsSuccess] = useState(null)

  const handleBegin = () => {
    if (Link) {
      AxiosMain.post("/api/linkinfor/seo", {
        link: `${Link}`,
      }).then((res) => {
        if (isUnmound) {
          if (res.success) {
            setIsSuccess(res.success)
            setSeotaken(res.message);
          }else{
            setIsSuccess(null)
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


  return ( <> 

  { IsSuccess && <MakeSeoURL DataSeo={Seotaken} />} 
  
  
  </>);
};

export default SeoBlock;
