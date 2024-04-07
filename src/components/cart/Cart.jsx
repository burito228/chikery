import BreadCrumbs from "../breadcrumbs/BreadCrumbs"
import { useSelector, useDispatch } from 'react-redux'
import { selectCart, setDeleteProduct } from "../../redux/slices/productSlice"
import { Link } from "react-router-dom"
import productSettings from "../../utils/productSettings"

const Cart = () => {

  const cart = useSelector(selectCart)
  const dispatch = useDispatch()

  const handleDeleteProduct = (id) => {
    dispatch(setDeleteProduct(id))
  }

   const handleChangeCountToHigher = (quantity) => {
      cart.filter((product) => product.id !== )
  }

  const handleChangeCountToLower = (quantity) => {
    return --quantity
  }

  return (
    <>
      <BreadCrumbs />
      <div class="ps-page">
        <div class="container">
          <div class="ps-shopping-cart">
            <div class="table-responsive">
              <table class="table ps-table ps-table--shopping-cart">
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
                {cart.length === 0 ? (<p style={{textAlign: 'center', marginBottom: '15px'}}>No products available</p>) : (
                  <>
                  {cart.map((product) => (
                    <tr>
                      <td>
                        <div class="ps-product--cart">
                          <div class="ps-product__thumbnail"><img src={product.img} alt=""/><a class="ps-product__overlay" href="product-detail.html"></a></div>
                          <div class="ps-product__content"><a class="ps-product__title" href="product-detail.html">{product.title}</a></div>
                        </div>
                      </td>
                      <td>${product.salesPrice}</td>
                      <td>
                        <div class="form-group--number">
                          <button class="up" onClick={() => handleChangeCountToHigher(product.quantity)}></button>
                          <button class="down" onClick={() => handleChangeCountToLower(product.quantity)}></button>
                          <input class="form-control" type="text" min={1} max={10} value={product.quantity} />
                        </div>
                      </td>
                      <td class="total">${product.quantity * product.salesPrice}</td>
                      <td class="ps-table__actions"><span onClick={()=> handleDeleteProduct(product.id)} class="ps-btn--close"></span></td>
                    </tr>
                  ))}
                  </>
                )}
                </tbody>
              </table>
            </div>
            <div class="ps-section__actions">
              <figure><a class="ps-btn ps-btn--outline" href="#">Clear Shopping Cart</a><a class="ps-btn ps-btn--outline" href="#">Update Shopping Cart</a></figure>
              <figure><Link class="ps-btn" to='/shop'>Continue Shopping</Link></figure>
            </div>
            <div class="ps-section__footer">
              <figure class="ps-shopping-cart__total">
                <figcaption>Cart Total</figcaption>
                <table class="table">
                  <tr>
                    <td>SubTotal</td>
                    <td><strong>$48.00</strong></td>
                  </tr>
                  <tr>
                    <td>Shipping</td>
                    <td>
                      <div class="ps-radio">
                        <input class="form-control" type="radio" id="shipping-1" name="shipping"/>
                        <label for="shipping-1">Flat Rate: $50.00 </label>
                      </div>
                      <div class="ps-radio">
                        <input class="form-control" type="radio" id="shipping-2" name="shipping"/>
                        <label for="shipping-2">Free Shipping Estimate for Vietnam. </label>
                      </div>
                    </td>
                  </tr>
                  <tr class="total">
                    <td>Total</td>
                    <td>$48.00</td>
                  </tr>
                </table><a class="ps-btn ps-btn--fullwidth" href="#">Proceed to checkout</a>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
