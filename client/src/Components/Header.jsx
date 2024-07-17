import React, { useEffect, useState } from 'react'
import { MdOutlineAccountCircle } from "react-icons/md"
import { CiShoppingCart } from "react-icons/ci"
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '../Redux/UserSlice'
import ShoppingCart from '../Cart/CartBody'
import { useNavigate, } from 'react-router'
import { erroActions } from '../Redux/ErrrorSlice'


function Header() {
    let navigate = useNavigate()
    let { id } = useSelector(state => state.userSlice)
    let dispatch = useDispatch()


    useEffect(() => {

        id && fetch(`https://perfume-vfig.onrender.com/api/cart/${id}`).then(res => res.json()).then((data) => {
            console.log(data.perfumes.length);
            dispatch(loginActions.setCartno({ cartNo: data.perfumes.length }))
        }).catch((err) => {
            dispatch(erroActions.setError({ code: 500, message: "Server error! check your connection" }))
            navigate('/Error')
        })

    }, [id])
    let { cartNo } = useSelector(state => state.userSlice)
    let CartHandler = () => {

        navigate('/cart')

    }
    console.log(cartNo);
    return (
        <div> <div className=' flex justify-between p-10'>

            <h1 className=' text-white  ml-20 text-2xl font-serif'> <span className=' text-amber-500  '>M&M</span> perfumes</h1>
            <div className='  flex mr-3 sm:mr-10'> <MdOutlineAccountCircle className=' text-amber-500  w-8 h-8 font-light ' onClick={() => { navigate('/login') }} />
                <div className=' relative  '><CiShoppingCart className=' text-white w-8 h-8 ' onClick={CartHandler} /> <span className=' absolute top-[-0.5px] right-0 h-4 w-4 bg-amber-500 text-white rounded-full text-sm grid-cols-1 place-items-center '>{cartNo}</span></div>
            </div>
        </div>


        </div>
    )
}

export default Header