import swal from "sweetalert";
import { supabase } from "../../supabase/supabaseClient"

export const getProduct = (product) => ({
        type: "GET_PRODUCT",
        product
})

export const addProductFromDatabase = async (alldata) => {
        const { data, error } = await supabase.from('products').insert(alldata)
        if (error) {
                console.log(error);
        }else{
                console.log(data);
                window.location.assign('/dashboard');
        }
}

export const deleteProductFromDatabase = async(id)=>{
        const {data,error} = await supabase.from('products').delete().eq('id',id);
        if (error) {
            console.log(error);
        }else{
            swal('product was deleted!',"","success");
            setTimeout(()=>{
                window.location.assign('/dashboard')
            },1500)
        }
    }

export const updateProductFromDatabase = async(id, update) => {


        const {data,error} = await supabase.from('products').update(update).match({id:id})
        if (error) {
                console.log(error);
        }else{
                console.log(data);
                window.location.assign('/dashboard');
        }
        

}

