import { configureStore } from '@reduxjs/toolkit'
import movieSlice from '../slice/movieSlice'
import characterSlice from '../slice/characterSlice'

const store = configureStore({
  reducer: {movie:movieSlice,character:characterSlice},
})

export default store