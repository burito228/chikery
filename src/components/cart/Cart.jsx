import { useSelector, useDispatch } from 'react-redux'
import { selectCart, setDecrementQuantity, setDeleteProduct, setIncrementQuantity, setClearCart } from "../../redux/slices/productSlice"
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import {images} from '../../modules/images'
import { IoIosArrowForward } from "react-icons/io";


const Cart = () => {

  const cart = useSelector(selectCart)
  const subTotal = cart.reduce((sum, product) => sum + product.quantity * product.salesPrice, 0);
  const dispatch = useDispatch()

  const handleDeleteProduct = (id) => {
    dispatch(setDeleteProduct(id))
  }

  const handleChangeCountToHigher = (id) => {
    dispatch(setIncrementQuantity(id))
  }
  const handleChangeCountToLower = (id) => {
    dispatch(setDecrementQuantity(id))
  }

  const handleClearCart = () => {
      dispatch(setClearCart())
  }

  const [total, setTotal] = useState(subTotal)
  const [shippingAdded, setShippingAdded] = useState(false)

  const handleShippingRate = () => {
    if(!shippingAdded){
      if(total !== 0){
        setTotal(prevTotal => prevTotal + 50);
      }
      setShippingAdded(true);
    }
  }
  
  const handleShippingFreeCountry = () => {
    if(shippingAdded){
      if(total !== 0){
        setTotal(prevTotal => prevTotal - 50);
      }
      setShippingAdded(false);
    }
  }

  useEffect(() => {
    if (shippingAdded) {
      setTotal(subTotal + 50);
    } else {
      setTotal(subTotal);
    }
  }, [subTotal, shippingAdded]);
  


  return (
    <>
      <div className="ps-hero bg--cover" data-background={images.hero}>
        <div className="ps-hero__container">
          <div className="ps-breadcrumb">
            <ul className="breadcrumb">
              <li><Link to='/'>Home</Link></li>
              <IoIosArrowForward />
              <li>Cart</li>
            </ul>
          </div>
          <h1 className="ps-hero__heading">Cart</h1>
        </div>
      </div>
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
                {cart.length === 0 ? (<tr><td><span style={
                  {textAlign: 'center', marginBottom: '15px', fontSize: '12px', lineHeight: '1.6em', color: '#555'}}>No products available</span></td></tr>) : (
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
                          <button className="down" onClick={() => handleChangeCountToLower(product.id)}></button>
                          <input className="form-control" type="text" readOnly value={product.quantity} />
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
              <figure>
                <button type="button" onClick={handleClearCart} className="ps-btn ps-btn--outline">Clear Shopping Cart</button>
              </figure>
              <figure><Link className="ps-btn" to='/shop'>Continue Shopping</Link></figure>
            </div>
            <div className="ps-section__footer">
              <form className="ps-form--checkout" method="post" data-select2-id="11">
                <div className="ps-checkout__left">
                  <h4>Billing Detail</h4>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                      <div className="form-group">
                        <label>First Name</label>
                        <input className="form-control" type="text" placeholder="" required/>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                      <div className="form-group">
                        <label>Last Name</label>
                        <input className="form-control" type="text" placeholder="" required/>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <input className="form-control" type="text" placeholder="" required/>
                  </div>
                  <div className="form-group">
                    <label>Country/States</label>
                    <input className="form-control" type="text" placeholder="" required/>
                  </div>
                  <div className="form-group">
                    <label>City/Town</label>
                    <input className="form-control" type="text" placeholder="" required />
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                      <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" type="text" placeholder="" required/>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                      <div className="form-group">
                        <label>Phone</label>
                        <input className="form-control" type="text" placeholder="" required/>
                      </div>
                    </div>
                  </div>
                </div>
                <figure className="ps-shopping-cart__total">
                  <figcaption>Cart Total</figcaption>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>SubTotal</td>
                        <td><strong>${subTotal.toFixed(2)}</strong></td>
                      </tr>
                      <tr>
                        <td>Shipping</td>
                        <td>
                          <div className="ps-radio">
                            <input className="form-control" type="radio" id="shipping-1" name="shipping" required/>
                            <label htmlFor="shipping-1" onClick={handleShippingRate}>Flat Rate: $50.00 </label>
                          </div>
                          <div className="ps-radio">
                            <input className="form-control" type="radio" id="shipping-2" name="shipping" required/>
                            <label htmlFor="shipping-2" onClick={handleShippingFreeCountry}>Free Shipping Estimate for Vietnam. </label>
                          </div>
                        </td>
                      </tr>
                      <tr className="total">
                        <td>Total</td>
                        <td>${total === 0 ? (0).toFixed(2) : parseInt(total).toFixed(2)}</td>
                      </tr>
                    </tbody>
                  </table><button type='submit' className="ps-btn ps-btn--fullwidth">Proceed to checkout</button>
                </figure>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
