
const queryString = require('query-string');

const HashLink = (data) => {
   

    const newdata = queryString.stringifyUrl({
        url: `${window.location.href}`,
        query: data,
        
    });

 
    console.log(`data`,newdata)
    return {newdata}



}
export default HashLink