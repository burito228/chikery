import { selectCart, setDeleteProduct } from "../../redux/slices/productSlice"
import { useSelector, useDispatch } from 'react-redux'

const CartProduct = () => {

    const cart = useSelector(selectCart)
    const dispatch = useDispatch()

    const handleDeleteProduct = (id) => {
        dispatch(setDeleteProduct(id))
    }

  return (
    <>
        {cart.map((product) => (
            <div className="ps-product--mini-cart" key={product.id}>
                <div className="ps-product__thumbnail">
                    <a href="#"><img src={product.img} alt='product' /></a>
                </div>
                <div className="ps-product__content">
                    <span onClick={()=> handleDeleteProduct(product.id)} className="ps-btn--close"></span><a className="ps-product__title" href="product.html">{product.title}</a>
                    <p><strong>Quantity: {product.quantity}</strong></p>
                        <small>${product.salesPrice}</small>
                </div>
            </div>
        ))}
    </>
  )
}

export default CartProduct
