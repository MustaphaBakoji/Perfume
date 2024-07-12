import React, { useEffect, useState } from 'react'
import { MdOutlineAccountCircle } from "react-icons/md"
import { CiShoppingCart } from "react-icons/ci"
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '../Redux/UserSlice'
import ShoppingCart from '../Cart/CartBody'


function Header() {
    let { id } = useSelector(state => state.userSlice)
    let dispatch = useDispatch()

    const [cart, setcart] = useState(false)
    useEffect(() => {

        id && fetch(`http://localhost:4000/api/cart/${id}`).then(res => res.json()).then((data) => {
            console.log(data.perfumes.length);
            dispatch(loginActions.setCartno({ cartNo: data.perfumes.length }))
        })

    }, [id])
    let { cartNo } = useSelector(state => state.userSlice)
    let CartHandler = () => {
        setcart(prev => !prev)
    }
    console.log(cartNo);
    return (
        <div> <div className=' flex justify-between '>

            <h1 className=' text-white  ml-20 text-2xl font-serif'> <span className=' text-amber-500  '>M&M</span> perfumes</h1>
            <div className='  flex mr-3 sm:mr-10'> <MdOutlineAccountCircle className=' text-amber-500  w-8 h-8 font-light ' />
                <div className=' relative  '><CiShoppingCart className=' text-white w-8 h-8 ' onClick={CartHandler} /> <span className=' absolute top-[-0.5px] right-0 h-4 w-4 bg-amber-500 text-white rounded-full text-sm grid-cols-1 place-items-center '>{cartNo}</span></div>
            </div>
        </div>

            {cart && <ShoppingCart />}
        </div>
    )
}

export default Header