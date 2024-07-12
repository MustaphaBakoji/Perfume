import { createSlice } from '@reduxjs/toolkit'
let initialState = { isLogin: false, id: null, cartNo: 0 }
let UserSlice = createSlice({
    name: 'userSlice',
    initialState,


    reducers: {
        setLogin(state) {
            state.isLogin = true
        },
        setId(state, actions) {
            state.id = actions.payload.id

        },
        setCartno(state, actions) {
            state.cartNo = actions.payload.cartNo
        }

    }

})
let { actions } = UserSlice
export { actions as loginActions };
export default UserSlice.reducer