import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type todoType={
    id:string,
    text:string
}

const initialState:todoType[] = [];

const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        add:(state,action:PayloadAction)=>{
                const newTodo:any = {id:crypto.randomUUID(),text:action.payload}
                state.push(newTodo)
        },
        remove:(state,action:PayloadAction)=>{
            return state.filter(( item:any ) => {
                return item.id !== action.payload
            })
        }
    }
})

export const {add,remove} = todoSlice.actions;
export default todoSlice.reducer;