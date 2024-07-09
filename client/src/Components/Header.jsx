import React from 'react'
import { MdOutlineAccountCircle } from "react-icons/md"
import { CiShoppingCart } from "react-icons/ci"


function Header() {
    return (
        <div className=' flex justify-between '>

            <h1 className=' text-white  ml-20 text-2xl font-serif'> <span className=' text-amber-500  '>M&M</span> perfumes</h1>
            <div className='  flex mr-3 sm:mr-10'> <MdOutlineAccountCircle className=' text-amber-500  w-8 h-8 font-light ' />
                <div className=' relative  '><CiShoppingCart className=' text-white w-8 h-8 ' /> <span className=' absolute top-[-0.5px] right-0 h-4 w-4 bg-amber-500 text-white rounded-full text-sm grid-cols-1 place-items-center '>0</span></div>
            </div>
        </div>
    )
}

export default Header