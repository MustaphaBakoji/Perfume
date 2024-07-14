import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";

import { loginActions } from "../Redux/UserSlice";
import { erroActions } from "../Redux/ErrrorSlice";
import { useNavigate } from "react-router";

const ShoppingCart = () => {
    let { id } = useSelector(state => state.userSlice)
    let dispatch = useDispatch()
    const [products, setProducts] = useState(null)
    let navigate = useNavigate()
    useEffect(() => {

        id && fetch(`https://perfume-vfig.onrender.com/api/cart/${id}`).then(res => res.json()).then((data) => {
            setProducts(data.perfumes)
            dispatch(loginActions.setCartno({ cartNo: data.perfumes.length }))
        }).catch((err) => {
            dispatch(erroActions.setError({ code: 500, message: "Server error! check your connection" }))
            navigate('/Error')
        })

    }, [id])

    return (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
            {products?.map((product) => (
                <CartItem key={product.id} product={product} />
            ))}
        </div>
    );
};
export default ShoppingCart
