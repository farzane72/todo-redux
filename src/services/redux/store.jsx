import {configureStore} from "@reduxjs/toolkit"
//import todo
import todoReducer from "./todoSlice"

const store=configureStore({
    reducer:{
        todo:todoReducer,
       
    }
})
export default store