


const DeadlineReducer = (state, action) =>{
    switch (action.type){
        case "RELOAD_DEADLINE":{
            console.log("RELOAD_DEADLINE")
        }
        // eslint-disable-next-line no-fallthrough
        default:
            return state
    }


}
export default DeadlineReducer