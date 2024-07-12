import React from 'react'

function Loading() {
    return (
        <div className=' bg-black opacity-60 w-[100vw] h-[100vh] grid grid-cols-1 place-items-center'> <div className=' grid grid-cols-4 place-items-center w-40 h-40'>

            <span className=' loading loading-ring loading-lg text-amber-500'></span>
            <span className=' loading loading-ring loading-sm text-amber-500'></span>
            <span className=' loading loading-ring loading-md text-amber-500'></span>
            <span className=' loading loading-ring loading-lg text-amber-500'></span>
            <span className=' loading loading-ring loading-sm text-amber-500'></span>

            <span>loading</span><span>..</span>
            <span className=' loading loading-ring loading-sm text-amber-500'></span>
            <span className=' loading loading-ring loading-lg text-amber-500'></span>
            <span className=' loading loading-ring loading-sm text-amber-500'></span>
            <span className=' loading loading-ring loading-md text-amber-500'></span>
            <span className=' loading loading-ring loading-lg text-amber-500'></span>

        </div></div>
    )
}

export default Loading
