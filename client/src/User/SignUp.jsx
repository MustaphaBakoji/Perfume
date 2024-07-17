import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { erroActions } from '../Redux/ErrrorSlice'
import { useDispatch } from 'react-redux'
import Loading from '../Components/Loading'

function SignUp() {
    const [inputs, setinputs] = useState({})
    const [loading, setloading] = useState(false)

    let InputsHandler = (e) => {
        setinputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let SubmitHandler = () => {
        setloading(true)
        console.log(inputs);
        if (inputs.name && inputs.password) {
            fetch('https://perfume-vfig.onrender.com/api/auth/signUp', { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(inputs) }).then((res) => res.json()).then((data) => {
                if (data.status === 'success') {
                    setloading(false)
                    console.log('normal');
                    navigate('/login')

                } else {
                    setloading(false)
                    dispatch(erroActions.setError({ code: 400, message: data.message }))
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
        <>{loading ? <Loading></Loading> : <div className=' border-slate-500 border-2 rounded-md w-[80-vw] sm:w-[380px] h-[320px] ml-auto mr-auto grid place-items-center  bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg' onChange={InputsHandler}>
            <div className=' flex flex-col sm:flex-row text-slate-600'> <p>Name:</p><input type="text" name="name" id="" placeholder='your Name ' className=' bg-transparent border-[1px] border-slate-500  placeholder-slate-600 placeholder-opacity-80' />
            </div>
            <div className=' flex flex-col sm:flex-row text-slate-600'><p>Email:</p> <input type="mail" name="email" id="" placeholder='your@mail ' className=' bg-transparent border-[1px] border-slate-500  placeholder-primary placeholder-opacity-60' />
            </div>
            <div className=' flex flex-col sm:flex-row text-slate-600'><p>Phone no.</p><input type="tel" name="phone" id="" placeholder='+234 ########### ' className=' bg-transparent border-[1px] border-slate-500  placeholder-slate-600 placeholder-opacity-80' />
            </div>
            <div className=' flex flex-col sm:flex-row text-slate-600'><p> password:</p>
                <input type="password" name="password" id="" placeholder='********** ' className=' bg-transparent border-[1px] border-slate-500  placeholder-slate-600 placeholder-opacity-80' />
            </div>
            <div> <button className=' bg-indigo-950 rounded-md w-40 sm:w-80 h-12 text-white sm:hover:w-96' onClick={SubmitHandler}>Register</button>
                <p>alreay have an account?<Link to={'/login'}> <span className=' text-primary'>Login</span></Link></p>
            </div>
        </div>}</>
    )
}

export default SignUp