import React from 'react'
import Image from './Image'
import { MdArrowRightAlt } from 'react-icons/md'

function Body() {
    let a = [1, 1, 1, 1, 1, 1, 1, 1,]


    return (
        <div className=' grid grid-cols-1 sm:grid-cols-4 ml-10 mt-10 gap-y-5 '>
            {a.map((image) => <Image />)}
            <div className=' w-[100vw]   h-10 grid grid-cols-1 place-items-center'>  <button className=' bg-primary w-[300px] h-10 rounded-full text-white relative  '>View All products
                <MdArrowRightAlt className='bg-white text-primary absolute right-1 top-[0.35rem] rounded-full h-7 w-7 font-extralight' /></button>
            </div>
        </div>
    )
}

export default Body
