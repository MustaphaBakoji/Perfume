import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
    const [inputs, setinputs] = useState({})
    let InputsHandler = (e) => {
        setinputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    let SubmitHandler = () => {
        if (inputs.name && inputs.password) {
            // fetch('http://localhost:4000/', { method: "POST", body: inputs }).then((res) => res.json()).then((data) => {
            //     console.log(data);
            // })
            console.log(inputs);
        }
    }
    return (
        <div className=' border-slate-500 border-2 rounded-md w-[80-vw] sm:w-[380px] h-[320px] ml-auto mr-auto grid place-items-center  bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg' onChange={InputsHandler}>
            <div className=' flex flex-col sm:flex-row text-slate-600'> <p>Name:</p><input type="text" name="name" id="" placeholder='your Name ' className=' bg-transparent border-[1px] border-slate-500  placeholder-slate-600 placeholder-opacity-80' />
            </div>
            <div className=' flex flex-col sm:flex-row text-slate-600'><p>Email:</p> <input type="mail" name="email" id="" placeholder='your@mail ' className=' bg-transparent border-[1px] border-slate-500  placeholder-primary placeholder-opacity-60' />
            </div>
            <div className=' flex flex-col sm:flex-row text-slate-600'><p>Phone no.</p><input type="tel" name="phone" id="" placeholder='+234 ########### ' className=' bg-transparent border-[1px] border-slate-500  placeholder-slate-600 placeholder-opacity-80' />
            </div>
            <div className=' flex flex-col sm:flex-row text-slate-600'><p> password:</p>
                <input type="password" name="password" id="" placeholder='********** ' className=' bg-transparent border-[1px] border-slate-500  placeholder-slate-600 placeholder-opacity-80' />
            </div>
            <div> <button className=' bg-indigo-950 rounded-md w-40 sm:w-80 h-12 text-white ' onClick={SubmitHandler}>Login</button>
                <p>alreay have an account?<Link to={'/login'}> <span className=' text-primary'>Login</span></Link></p>
            </div>
        </div>
    )
}

export default SignUp