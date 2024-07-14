import React, { useState } from 'react'
import AddPerfume from './AddPerfume'
import { useDispatch, useSelector } from 'react-redux'
import AdminLogin from './AdminLogin'
import { MdAddBusiness } from 'react-icons/md'
import { useEffect } from 'react'
import AdminPerfume from './AdminPerfume'
import { useNavigate } from 'react-router'
import { erroActions } from '../Redux/ErrrorSlice'

function AdminBody() {
    let dispatch = useDispatch(),
        navigate = useNavigate()
    const [Add, setAdd] = useState(false)
    const [perfumes, setperfumes] = useState(null)
    let { isAdmin } = useSelector(adminstate => adminstate.admin)
    console.log('isadmin', isAdmin);
    useEffect(() => {

        fetch('https://perfume-vfig.onrender.com/api/perfumes/perfumes').then(res => res.json()).then(data => {
            if (data.status === 'success') {
                setperfumes(data.perfumes)
            }
            else {
                dispatch(erroActions.setError({ code: 400, message: data.message }))
                navigate('/Error')
            }

        }).catch((err) => {
            dispatch(erroActions.setError({ code: 500, message: "Server error! check your connection" }))
            navigate('/Error')
        })


    }, [])

    return (

        <div>

            {!isAdmin && <AdminLogin />}
            {
                isAdmin && <div>
                    <div className=' w-40 flex justify-center font-mono text-green-500 ml-10' onClick={() => { setAdd(true) }}> <span>Add perfume</span> <MdAddBusiness className=' text-amber-600 w-8 h-8' /></div>
                    {
                        Add && <div className='grid grid-cols-1 place-items-center'><div className=' w-[100vw] relative bg-black h-[100vh] opacity-35 z-1 ' onClick={() => { setAdd(false) }} />
                            <div className='  z-20 absolute top-48 '>{<AddPerfume />}

                            </div></div>}

                    {perfumes?.map(
                        perf => (
                            <AdminPerfume name={perf.name} price={perf.price} url={perf.image_url} />
                        )
                    )}
                </div>
            }

        </div>
    )
}

export default AdminBody