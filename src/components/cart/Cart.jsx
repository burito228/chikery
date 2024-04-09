import BreadCrumbs from "../breadcrumbs/BreadCrumbs"
import { useSelector, useDispatch } from 'react-redux'
import { selectCart, setDecrementQuantity, setDeleteProduct, setIncrementQuantity } from "../../redux/slices/productSlice"
import { Link } from "react-router-dom"

const Cart = () => {

  const cart = useSelector(selectCart)
  const dispatch = useDispatch()

  const handleDeleteProduct = (id) => {
    dispatch(setDeleteProduct(id))
  }

  
  const handleChangeCountToHigher = (id) => {
    dispatch(setIncrementQuantity(id))
  }
  const handleChangeCountToLower = (id, quantity) => {
    dispatch(setDecrementQuantity(id))
  }

  return (
    <>
      <BreadCrumbs />
      <div className="ps-page">
        <div className="container">
          <div className="ps-shopping-cart">
            <div className="table-responsive">
              <table className="table ps-table ps-table--shopping-cart">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                {cart.length === 0 ? (<span style={
                  {textAlign: 'center', marginBottom: '15px', fontSize: '16px', lineHeight: '1.6em', color: '#555'}}>No products available</span>) : (
                  <>
                  {cart.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <div className="ps-product--cart">
                          <div className="ps-product__thumbnail"><img src={product.img} alt=""/><a className="ps-product__overlay" href="product-detail.html"></a></div>
                          <div className="ps-product__content"><a className="ps-product__title" href="product-detail.html">{product.title}</a></div>
                        </div>
                      </td>
                      <td>${product.salesPrice}</td>
                      <td>
                        <div className="form-group--number">
                          <button className="up" onClick={() => handleChangeCountToHigher(product.id)}></button>
                          <button className="down" onClick={() => handleChangeCountToLower(product.id, product.quantity)}></button>
                          <input className="form-control" type="text" value={product.quantity} />
                        </div>
                      </td>
                      <td className="total">${product.quantity * product.salesPrice}</td>
                      <td className="ps-table__actions"><span onClick={()=> handleDeleteProduct(product.id)} className="ps-btn--close"></span></td>
                    </tr>
                  ))}
                  </>
                )}
                </tbody>
              </table>
            </div>
            <div className="ps-section__actions">
              <figure><a className="ps-btn ps-btn--outline" href="#">Clear Shopping Cart</a><a className="ps-btn ps-btn--outline" href="#">Update Shopping Cart</a></figure>
              <figure><Link className="ps-btn" to='/shop'>Continue Shopping</Link></figure>
            </div>
            <div className="ps-section__footer">
              <figure className="ps-shopping-cart__total">
                <figcaption>Cart Total</figcaption>
                <table className="table">
                  <tr>
                    <td>SubTotal</td>
                    <td><strong>$48.00</strong></td>
                  </tr>
                  <tr>
                    <td>Shipping</td>
                    <td>
                      <div className="ps-radio">
                        <input className="form-control" type="radio" id="shipping-1" name="shipping"/>
                        <label htmlFor="shipping-1">Flat Rate: $50.00 </label>
                      </div>
                      <div className="ps-radio">
                        <input className="form-control" type="radio" id="shipping-2" name="shipping"/>
                        <label htmlFor="shipping-2">Free Shipping Estimate for Vietnam. </label>
                      </div>
                    </td>
                  </tr>
                  <tr className="total">
                    <td>Total</td>
                    <td>$48.00</td>
                  </tr>
                </table><a className="ps-btn ps-btn--fullwidth" href="#">Proceed to checkout</a>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
