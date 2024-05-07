export const addProduct = ({photo,title,price,desc})=>({
    type:"ADD_PRODUCT",
    products:{
        id:crypto.randomUUID(),
        photo,
        title,
        price,
        desc
    }
})