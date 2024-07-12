
import { useState } from 'react'
import { MdUpdate } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { erroActions } from '../Redux/ErrrorSlice'

function AdminPerfume({ name, price, url }) {
    const [editable, seteditable] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [updatedPrice, setupdatedPrice] = useState(''),
        dispatch = useDispatch(),
        navigate = useNavigate()

    return (
        <div className={` mb-2  rounded-md w-[90vw] h-20 grid ${!editable || isLoading ? 'grid-cols-4 ' : 'grid-cols-3'} border-[1px] border-slate-600 place-items-center ml-auto mr-auto `}
        >

            <img src={`${url}`} alt="somthing" className=' rounded-md w-16 h-16 ' />
            <p className=' text-amber-600' >{name}</p>
            <input className='' readOnly={editable} onDoubleClick={() => {
                seteditable(prev => (!prev))
            }}
                onChange={(e) => {
                    setupdatedPrice(e.target.value); console.log(updatedPrice);

                }

                }
                placeholder={price}

            />
            {
                !editable && <MdUpdate className=' w-7 h-7 text-amber-600 ' onClick={() => {

                    seteditable(true)
                    setIsLoading(true)
                    fetch('http://localhost:4000/api/perfumes/update', {
                        method: "PUT",
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ price: updatedPrice, name })
                    }).then(res => res.json()).then(data => {
                        if (data.status === 'success') {

                            setIsLoading(false)
                            console.log(data);
                        }
                        else {

                            setIsLoading(false)
                            dispatch(erroActions.setError({
                                code: 400, message: data.message
                            }))
                            navigate('/Error')
                        }
                    })

                }

                } />
            }
            {isLoading && <span className='loading loading-ring loading-lg text-amber-500'></span>}

        </div >
    )
}

export default AdminPerfume