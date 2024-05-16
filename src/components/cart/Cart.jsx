import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom"
import { selectCart, setDecrementQuantity, setDeleteProduct, setIncrementQuantity, setClearCart } from "../../redux/slices/productSlice"
import {images} from '../../modules/images'
import { IoIosArrowForward } from "react-icons/io";
import { useState } from 'react';


const Cart = () => {

  const cart = useSelector(selectCart)
  const dispatch = useDispatch()

  const subTotal = cart.reduce((sum, product) => sum + product.quantity * product.salesPrice || sum + product.quantity * product.price, 0);


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
                      <td>${product.sales ? parseInt(product.salesPrice).toFixed(2) : product.price.toFixed(2)}</td>
                      <td>
                        <div className="form-group--number">
                          <button className="up" onClick={() => handleChangeCountToHigher(product.id)}></button>
                          <button className="down" onClick={() => handleChangeCountToLower(product.id)}></button>
                          <input className="form-control" type="text" readOnly value={product.quantity} />
                        </div>
                      </td>
                      <td className="total">${product.quantity * `${product.sales ? parseInt(product.salesPrice) : product.price}`}.00</td>
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
                <figure className="ps-shopping-cart__total">
                  <figcaption>Cart Total</figcaption>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>SubTotal</td>
                        <td><strong>${subTotal.toFixed(2)}</strong></td>
                      </tr>
                    </tbody>
                  </table>
                  <Link to='/checkout' className="ps-btn ps-btn--fullwidth" onClick={e => cart.length === 0 && e.preventDefault()}>Proceed to checkout</Link>
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
