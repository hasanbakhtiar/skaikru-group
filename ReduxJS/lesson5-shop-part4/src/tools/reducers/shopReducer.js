export const shopReducer = (state=[],action)=>{
        switch (action.type) {
            case "ADD_PRODUCT":
                return [...state,action.products]
        case "REMOVE_PRODUCT":
            return state.filter(({id})=>{
                return id !== action.id
            })
            default:
                return state;
        }
}