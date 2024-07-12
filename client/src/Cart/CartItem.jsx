const CartItem = ({ product }) => {
    return (
        <div className="flex items-center p-4 border-b border-gray-200 dark:border-gray-700">
            <img src={product.image_url} alt={product.name} className="w-16 h-16 rounded-md mr-4" />
            <div className="flex-grow">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{product.price}</p>
            </div>
        </div>
    );
};
export default CartItem