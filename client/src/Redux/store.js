import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice'
import errorReducer from './ErrrorSlice'
import adminReducer from "./AdminSlice"
let reducers = combineReducers({
    admin: adminReducer,
    userSlice: userReducer,
    error: errorReducer
})
let store = configureStore({

    reducer: reducers
})
export default store