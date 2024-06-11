import supabase from "../../config/connect";

export const getData = (data)=>({
    type:"GET_TEXT",
    data
})

export const addData = async(fd)=>{
    const {data,error} = await supabase.from('mydata').insert({text:fd});
        if (error) {
            console.log(error);
        }else{
            swal('success','','success')
        }
}