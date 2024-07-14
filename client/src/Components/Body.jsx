import React, { useEffect, useState } from 'react'
import Image from './Image'
import { MdArrowRightAlt } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Loading from './Loading'
import { erroActions } from '../Redux/ErrrorSlice'

function Body() {
    const [perfumes, setperfumes] = useState(null)
    const [loading, setloading] = useState(true)
    let { isLogin } = useSelector(adminstate => adminstate.userSlice)
    let navigate = useNavigate(),
        dispatch = useDispatch()

    useEffect(() => {

        fetch('https://perfume-vfig.onrender.com/api/perfumes/perfumes').then(res => res.json()).then(data => {
            if (data.status === 'success') {
                setperfumes(data.perfumes)
                setloading(false)
            }
            else {
                setloading(false)
                dispatch(erroActions.setError({ code: 404, message: data.message }))
                navigate('Error')


            }

        }).catch((err) => {
            dispatch(erroActions.setError({ code: 500, message: "Server error! check your connection" }))
            navigate('/Error')
        })


    }, [])


    return (
        <div>{loading ? <Loading /> : <div className=' grid grid-cols-1 sm:grid-cols-4 ml-10 mt-10 gap-y-5  place-items-center '>
            {isLogin ? perfumes?.map((perf) => <Image name={perf.name} url={perf.image_url} price={perf.price} category={'category'} perfume_id={perf._id} />) : perfumes?.map((perf) => <Image name={perf.name} url={perf.image_url} price={perf.price} category={'category'} perfume_id={'##'} />)}
            {!isLogin && <div className=' w-[100vw]   h-10 grid grid-cols-1 place-items-center'>  <button className=' bg-primary w-[300px] h-10 rounded-full text-white relative  ' onClick={() => { navigate('/login') }}>View All products
                <MdArrowRightAlt className='bg-white text-primary absolute right-1 top-[0.35rem] rounded-full h-7 w-7 font-extralight' /></button>
            </div>}
        </div>}</div>
    )
}

export default Body
