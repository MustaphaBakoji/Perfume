import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { useSelector } from 'react-redux'

function Image({ name, url, category, price, perfume_id }) {
    let { id } = useSelector(state => state.userSlice)
    let CartHandler = () => {
        id && fetch("http://localhost:4000/api/cart/carts", {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user_id: id,
                perfume_id
            })
        }).then(res => res.json()).then(data => {
            console.log(data);
        })
    }
    return (
        <div className=' w-[220px] h-[280px] rounded border-slate-200 border-[1px] grid grid-cols-1  '>
            <div className=' relative'><img src={`${url}`} alt="" className=' w-[170px] h-[180px] ml-auto mr-auto mt-5 rounded' />
                <CiHeart className='absolute top-1 right-1 text-amber-500 w-5 h-5 hover:h-6 hover:w-6 hover:text-amber-700' onClick={CartHandler} />
            </div>
            <h3 className=' text-primary'>{category}</h3>
            <h4>{name}</h4>
            <h4 className=' text-amber-500'>{price}</h4>

        </div>
    )
}

export default Image