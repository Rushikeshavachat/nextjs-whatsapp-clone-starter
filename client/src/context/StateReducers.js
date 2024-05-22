import { reducerCases } from "./constants";

export const initialState={
    userInfo:undefined,
    newUser:false,
    contactsPage:false,
}
const reducer=(state , action)=>{
    switch (action.type) {
        case reducerCases.SET_USER_INFO:{
            console.log({userInfo : action.userInfo});
            return {
                ...state,
                userInfo:!action.userInfo,
            }
        }
           
            case reducerCases.SET_NEW_USER:
                return{
                    ...state,
                    newUser : !action.newUser,  
                }
              case reducerCases.SET_CONTACTS_PAGE:
                return{
                    ...state,
                contactsPage: !action.contactsPage, 
                }  
       default:
        return state;

    }
}
export default reducer