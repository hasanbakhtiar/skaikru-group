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


export const deleteProduct =({id})=>({
    type:"REMOVE_PRODUCT",
    id
})