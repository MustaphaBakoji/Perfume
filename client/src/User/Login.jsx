import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginActions } from '../Redux/UserSlice'
import { useDispatch } from 'react-redux'
import { erroActions } from '../Redux/ErrrorSlice'
import Loading from '../Components/Loading'
function Login() {
    const [inputs, setinputs] = useState({})
    const [loading, setloading] = useState(false)
    let navigate = useNavigate()
    let InputsHandler = (e) => {
        setinputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    let dispatch = useDispatch()

    let SubmitHandler = () => {
        setloading(true)

        if (inputs.name && inputs.password) {

            fetch('https://perfume-vfig.onrender.com/api/auth/login', { method: "POST", body: JSON.stringify(inputs), credentials: 'include', headers: { 'Content-Type': 'application/json' }, }).then((res) => res.json()).then((data) => {

                if (data.status === "success") {
                    setloading(false)
                    dispatch(loginActions.setLogin())
                    dispatch(loginActions.setId({ id: data.id }))
                    navigate('/')

                }
                else {
                    setloading(false)
                    dispatch(erroActions.setError({ code: 404, message: data.message }))
                    navigate('/Error')
                }
            }).catch((err) => {
                setloading(false)
                dispatch(erroActions.setError({ code: 500, message: "Server error! check your connection" }))
                navigate('/Error')
            })
        }
    }
    return (

        <div>
            {loading ? <Loading /> : <div className='  border-slate-500 border-2 rounded-md w-[80-vw] sm:w-[380px] h-[320px] ml-auto mr-auto grid place-items-center  bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg   ' onChange={InputsHandler}>
                <div className=' flex flex-col sm:flex-row text-slate-600'> <p>Name:</p><input type="text" name="name" id="" placeholder='your Name ' className=' bg-transparent border-[1px] border-slate-500  placeholder-slate-600 placeholder-opacity-80' />
                </div>

                <div className=' flex flex-col sm:flex-row text-slate-600'><p> password:</p>
                    <input type="password" name="password" id="" placeholder='**********' className=' bg-transparent border-[1px] border-slate-500  placeholder-slate-600 placeholder-opacity-80' />
                </div>

                <div> <button className=' bg-indigo-950 rounded-md w-40 sm:w-80 h-12 text-white ' onClick={SubmitHandler}>Login</button>
                    <p>don't have an account<Link to={'/signUp'}> <span className=' text-primary'>register</span></Link></p>
                </div>

            </div>}
        </div>

    )
}

export default Login