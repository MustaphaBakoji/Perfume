import React from 'react'

function Footer() {
    return (
        <div className=' bg-zinc-950 grid grid-cols-2 sm:grid-cols-4 place-items-center mt-5 '>
            <div className=" company text-white ">
                <h2>
                    <p className=' text-amber-500 font-semibold text-lg '> M&M</p> Perfumes
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio unde ullam laboriosam in asperiores.
                </h2>
            </div>
            <div className="infomation text-white">
                <p className=' font-extralight '>information </p>
                <p className=' font-normal font-mono'>About us</p>
                <p className=' font-normal font-mono'>Contact Us</p>
                <p className=' font-normal font-mono'>Privacy Policy</p>
                <p className=' font-normal font-mono'>Terms and Conditions</p>

            </div>
            <div className="infomation text-white">
                <p className=' font-extralight '>Category </p>
                <p className=' font-bold font-mono'>Oils</p>
                <p className=' font-bold font-mono'>Body spray</p>
                <p className=' font-bold font-mono'>Deodarants</p>


            </div>
            <div className="ContactUS text-white">
                <p className=' font-extralight '>Contact us</p>
                <p className=' font-bold font-mono'>+234 8163093788</p>
                <p className=' font-bold font-mono'>+234 8163041138</p>
                <p className=' font-bold font-mono'>mustapafabakoji@gmail.com</p>


            </div>
        </div>
    )
}

export default Footer