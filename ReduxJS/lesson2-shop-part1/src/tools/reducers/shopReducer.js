export const shopReducer = (state=[],action)=>{
        switch (action.type) {
            case "ADD_PRODUCT":
                return [...state,action.products]
        
            default:
                return state;
        }
}