import React, { useEffect, useLayoutEffect, useState } from 'react'
import AxiosMain from '../../../API/AxiosMain';

const SeoBlock = (props) => {

    const {link} = props 
    console.log(`link`, link)
    const [Seotaken, setSeotaken] = useState({})
    const [isUnmound, setisUnmound] = useState(true)

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
      }, [link]);
    

  return (
    <div>SeoBlock</div>
  )
}

export default SeoBlock