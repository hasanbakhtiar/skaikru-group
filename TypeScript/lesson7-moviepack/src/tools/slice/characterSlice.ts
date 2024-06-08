import { createSlice } from "@reduxjs/toolkit";




const characterData:any[] = [];


const characterSlice = createSlice({
    name: 'test',
    initialState: characterData,
    reducers: {
      readcharacter: (state,action ) => {
            return action.payload;
      },
    },
  })


  export default characterSlice.reducer;
  export const {readcharacter} = characterSlice.actions;