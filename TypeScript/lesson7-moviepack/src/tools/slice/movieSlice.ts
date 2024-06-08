import { createSlice } from "@reduxjs/toolkit";




const movieData:any[] = [];


const movieSlice = createSlice({
    name: 'test',
    initialState: movieData,
    reducers: {
      readmovie: (state,action ) => {
            return action.payload;
      },
    },
  })


  export default movieSlice.reducer;

  export const {readmovie} = movieSlice.actions;