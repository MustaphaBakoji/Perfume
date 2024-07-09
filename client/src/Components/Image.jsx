import React from 'react'
import { CiHeart } from 'react-icons/ci'

function Image() {
    return (
        <div className=' w-[220px] h-[280px] rounded border-slate-200 border-[1px] grid grid-cols-1  '>
            <div className=' relative'><img src={require('../statics/arabian-oud.png')} alt="" className=' w-[170px] h-[180px] ml-auto mr-auto mt-5 rounded' />
                <CiHeart className='absolute top-1 right-1 text-amber-500 w-5 h-5 hover:h-6 hover:w-6 hover:text-amber-700' />
            </div>
            <h3 className=' text-primary'>oil</h3>
            <h4>Arabian oud</h4>
            <h4 className=' text-amber-500'>N1300</h4>

        </div>
    )
}

export default Image