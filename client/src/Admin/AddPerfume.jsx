import React, { useState } from 'react'
import Loading from '../Components/Loading'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { erroActions } from '../Redux/ErrrorSlice'


function AddPerfume() {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    const [loading, setloading] = useState(false)
    const [image, setImage] = useState(null)
    let SelectHandler = (e) => {

        setImage(e.target.files[0])
    }
    const [inputs, setinputs] = useState({})
    let InputHandler = (e) => {
        setinputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    let UploadImage = () => {
        setloading(true)
        if (image && inputs.name && inputs.price) {
            let form = new FormData()
            form.append('image', image)

            fetch('https://perfume-vfig.onrender.com/api/perfumes/addPerfume', {
                method: "POST",
                body: form,
                credentials: 'include',
                headers: {
                    properties: JSON.stringify(inputs)
                },


            }).then(res => res.json()).then(data => {
                if (data.status === 'success') {

                    setloading(false)
                }
                else {
                    dispatch(erroActions.setError({ code: 500, message: data.message }))
                    navigate('/Error')
                    setloading(false)
                }

            }).catch((err) => {
                dispatch(erroActions.setError({ code: 500, message: "Server error! check your connection" }))
                navigate('/Error')
            })

        }

    }
    return (
        <div className='Container/wrapper'>{loading ? <Loading /> : <div className='  border-slate-500 border-2 rounded-md w-[80-vw] sm:w-[380px] h-[320px] ml-auto mr-auto grid place-items-center  bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg   ' onChange={InputHandler}>
            <div className=' flex flex-col sm:flex-row text-slate-600'> <p>Perf Name:</p><input type="text" name="name" id="" placeholder='Perfum name ' className=' bg-transparent border-[1px] border-slate-500  placeholder-slate-600 placeholder-opacity-80' />
            </div>

            <div className=' flex flex-col sm:flex-row text-slate-600'><p> Price:</p>
                <input type="number" name="price" id="" placeholder='N __' className=' bg-transparent border-[1px] border-slate-500  placeholder-slate-600 placeholder-opacity-80' />
            </div>
            <input type="file" className="file-input file-input-bordered w-full max-w-xs" onChange={SelectHandler} />
            <div> <button className=' bg-indigo-950 rounded-md w-16 sm:w-80 h-12 text-white ' onClick={UploadImage}>Add</button>

            </div>

        </div>}
        </div>
    )
}

export default AddPerfume