import HashLink from "./HashLink"
const queryString = require('query-string');

const params = {}

const ShareLink = {
    Deadline: (params) =>{

        const newdata = queryString.stringifyUrl({
            url: `${window.location.hostname}`+`/share`,
            query: params,
            
        });
    
        return newdata
    },
    
    Post: (params) =>{
        console.log(params)
        return params
    }
}
export default ShareLink

