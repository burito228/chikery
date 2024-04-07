import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import CartProduct from "../cartProduct/CartProduct";
import { selectCart } from "../../redux/slices/productSlice";



const MiniCart = () => {

    const cart = useSelector(selectCart)

  return (
    <div className="ps-cart--mini">
              <Link to='cart' className="ps-cart__toggle"><TiShoppingCart /><span><i>{cart.length}</i></span></Link>
              <div className="ps-cart__content">
                <div className="ps-cart__items">
                {cart.length === 0 ? (<p style={{textAlign: 'center', marginBottom: '15px'}}>No products available</p>) : (
                    <div className="row">
                        <CartProduct />
                    </div>
                )}
                </div>
                <div className="ps-cart__footer">
                  <h3>Sub Total:<strong>${cart.reduce((total, product) => {
                    return total + product.quantity * parseInt(product.salesPrice)
                  }, 0)}</strong></h3>
                  <figure><Link className="ps-btn" to='cart'>View Cart</Link></figure>
                </div>
              </div>
            </div>
  )
}

export default MiniCart
