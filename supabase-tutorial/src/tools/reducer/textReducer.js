export const textReducer=(state=[],action)=>{
    switch (action.type) {
        case "GET_TEXT":
            return action.data;        
    
        default:
            return state;
    }
}