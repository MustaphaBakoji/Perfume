import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { actions } from '../Redux/AdminSlice'
import Loading from '../Components/Loading'
import { erroActions } from '../Redux/ErrrorSlice'
import { useNavigate } from 'react-router'

function AdminLogin() {
    const [loading, setLoading] = useState(false)

    const [inputs, setinputs] = useState({})
    let InputsHandler = (e) => {
        setinputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    let dispatch = useDispatch(),
        navigate = useNavigate()

    let SubmitHandler = () => {
        setLoading(true)
        if (inputs.name && inputs.password) {

            fetch('https://perfume-vfig.onrender.com/api/auth/login', { method: "POST", body: JSON.stringify(inputs), credentials: 'include', headers: { 'Content-Type': 'application/json' }, }).then(res => res.json()).then(data => {
                if (data.role === 'admin') {
                    setLoading(false)
                    dispatch(actions.setAdmin(true))

                } else {
                    dispatch(erroActions.setError({ code: 401, message: 'you can`t access this page because you are not admin' }))
                    navigate('/Error')
                }


            }).catch((err) => {
                dispatch(erroActions.setError({ code: 500, message: "Server error! check your connection" }))
                navigate('/Error')
            })

        }
    }
    return (

        <div className='container/wrapper'>
            {loading ? <Loading /> : <div className='  border-slate-500 border-2 rounded-md w-[80-vw] sm:w-[380px] h-[320px] ml-auto mr-auto grid place-items-center  bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg   ' onChange={InputsHandler}>
                <div className=' flex flex-col sm:flex-row text-slate-600'> <p>Name:</p><input type="text" name="name" id="" placeholder='your Name ' className=' bg-transparent border-[1px] border-slate-500  placeholder-slate-600 placeholder-opacity-80' />
                </div>

                <div className=' flex flex-col sm:flex-row text-slate-600'><p> password:</p>
                    <input type="password" name="password" id="" placeholder='**********' className=' bg-transparent border-[1px] border-slate-500  placeholder-slate-600 placeholder-opacity-80' />
                </div>

                <button className=' bg-indigo-950 rounded-md w-40 sm:w-80 h-12 text-white ' onClick={SubmitHandler}>Login</button>



            </div>}</div>

    )
}

export default AdminLogin