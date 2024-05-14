export const addProduct = ({image,title,price,description})=>({
    type:"ADD_PRODUCT",
    products:{
        id:crypto.randomUUID(),
        image,
        title,
        price,
        description
    }
})

export const editProduct = (id,update)=>({
    type:"UPDATE_PRODUCT",
    id,update
})


export const deleteProduct =({id})=>({
    type:"REMOVE_PRODUCT",
    id
})