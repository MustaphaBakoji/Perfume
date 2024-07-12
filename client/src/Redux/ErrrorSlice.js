import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    code: '',
    message: ''
}
let ErrorSlice = createSlice({
    name: 'errorSlice',
    initialState,
    reducers: {
        setError(state, action) {
            state.message = action.payload.message
            state.code = action.payload.code


        }
    }

})
let { actions } = ErrorSlice
export { actions as erroActions }
export default ErrorSlice.reducer