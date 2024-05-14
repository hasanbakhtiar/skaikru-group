export const shopReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return [...state, action.products]

        case "UPDATE_PRODUCT":
            return state.map(item=>{
                if (item.id === action.id) {
                        return{
                            ...item,...action.update
                        }
                }else{
                    return item;
                }
            })

        case "REMOVE_PRODUCT":
            return state.filter(({ id }) => {
                return id !== action.id
            })
        default:
            return state;
    }
}