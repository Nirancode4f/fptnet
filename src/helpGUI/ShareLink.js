import HashLink from "./HashLink"



const ShareLink = {
    Deadline: (params) =>{

        return HashLink( params )
    },
    Post: (params) =>{
        console.log(params)
        return params
    }
}
export default ShareLink

