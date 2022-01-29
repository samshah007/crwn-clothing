const INITIAL_STATE = {
    ccurrentUser : null
}

const userReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'SET_CURRENT_USER':
            return{
                ...state,
                ccurrentUser:action.payload
            }
        default:
            return state;
    }
}
export default userReducer;