import { createSlice } from '@reduxjs/toolkit'
let initialState = { isAdmin: false }
let AdminSlice = createSlice({
    name: 'admin',
    initialState,

    reducers: {
        setAdmin(state) {
            state.isAdmin = true
        }
    }

})
let { actions } = AdminSlice
export { actions };
export default AdminSlice.reducer
