import { supabase } from "../../supabase/supabaseClient"
import shopStore from "../store/shopStore"
const store = shopStore();
export const addProduct = ({ image, title, price, description }) => ({
    type: "ADD_PRODUCT",
    products: {
        id: crypto.randomUUID(),
        image,
        title,
        price,
        description
    }
})


export const editProduct = (id, update) => ({
    type: "UPDATE_PRODUCT",
    id, update
})


export const deleteProduct = ({ id }) => ({
    type: "REMOVE_PRODUCT",
    id
})
export const getProduct = (product) => ({
    type: "GET_PRODUCT",
    product
}) 

export const getProductToDatabase = async()=>{
        const {data,error} = await supabase.from('products').select();
        if (error) {
          console.log(error);
        }else{
          getProduct(data);
        }
  }