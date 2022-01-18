import AxiosMain from "../AxiosMain";

// delete comment here
const DeleteCmt  = {

    postDelete: (body) => {
        const url = "/api/comment/delete";
         return AxiosMain.post(url, {body})
    }
}
export default DeleteCmt