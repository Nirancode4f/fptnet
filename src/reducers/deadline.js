
const initialState ={
    list:[],
    userId: ''
}



const DeadlineReducer = (state = initialState, action) =>{
    switch (action.type){
        case "RELOAD_DEADLINE":{
            console.log("RELOAD_DEADLINE checked")
            return state
        }
        // eslint-disable-next-line no-fallthrough
        default:
            return state
    }


}
export default DeadlineReducer