import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginActions } from '../Redux/UserSlice'
import { useDispatch } from 'react-redux'
function Login() {
    const [inputs, setinputs] = useState({})
    let navigate = useNavigate()
    let InputsHandler = (e) => {
        setinputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    let dispatch = useDispatch()

    let SubmitHandler = () => {

        if (inputs.name && inputs.password) {

            fetch('http://localhost:4000/api/auth/login', { method: "POST", body: JSON.stringify(inputs), credentials: 'include', headers: { 'Content-Type': 'application/json' }, }).then((res) => res.json()).then((data) => {

                if (data.status === "success") {

                    dispatch(loginActions.setLogin())
                    dispatch(loginActions.setId({ id: data.id }))
                    navigate('/')

                }
            })
        }
    }
    return (


        <div className='  border-slate-500 border-2 rounded-md w-[80-vw] sm:w-[380px] h-[320px] ml-auto mr-auto grid place-items-center  bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg   ' onChange={InputsHandler}>
            <div className=' flex flex-col sm:flex-row text-slate-600'> <p>Name:</p><input type="text" name="name" id="" placeholder='your Name ' className=' bg-transparent border-[1px] border-slate-500  placeholder-slate-600 placeholder-opacity-80' />
            </div>

            <div className=' flex flex-col sm:flex-row text-slate-600'><p> password:</p>
                <input type="password" name="password" id="" placeholder='**********' className=' bg-transparent border-[1px] border-slate-500  placeholder-slate-600 placeholder-opacity-80' />
            </div>

            <div> <button className=' bg-indigo-950 rounded-md w-40 sm:w-80 h-12 text-white ' onClick={SubmitHandler}>Login</button>
                <p>don't have an account<Link to={'/signUp'}> <span className=' text-primary'>register</span></Link></p>
            </div>

        </div>

    )
}

export default Login