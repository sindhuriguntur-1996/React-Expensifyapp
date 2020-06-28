//import { act } from "react-dom/test-utils";

export default (state={},action)=>{
    switch(action.type){
        case 'LOGIN':
            return{
                uid:action.uid
            }
        case 'LOGOUT':
            return{

            }
        default:
            return state;
    }

}