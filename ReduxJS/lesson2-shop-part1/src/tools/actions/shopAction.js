export const addProduct = ({myPhoto,myTitle,myPrice,myDesc})=>({
    type:"ADD_PRODUCT",
    products:{
        id:crypto.randomUUID(),
        photo:myPhoto,
        title:myTitle,
        price:myPrice,
        desc:myDesc
    }
})