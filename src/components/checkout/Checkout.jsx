import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Modal from 'react-modal'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from "react-router-dom"
import { images } from "../../modules/images"
import { IoIosArrowForward } from "react-icons/io";
import { selectCart, setClearCart } from "../../redux/slices/productSlice"
import { selectFirstName, setFirstName } from '../../redux/slices/dataSlice';

Modal.setAppElement('#root')

const schema = yup.object().shape({
  firstName: yup.string().required('Це поле є обов’язковим'),
  lastName: yup.string().required('Це поле є обов’язковим'),
  email: yup.string().email('Неправильний формат електронної пошти').required('Це поле є обов’язковим'),
  phone: yup.string().matches(/^(\+?38)?0\d{9}$/, 'Неправильний формат телефону').required('Це поле є обов’язковим'),
  country: yup.string().required('Це поле є обов’язковим'),
  city: yup.string().required('Це поле є обов’язковим'),
  address: yup.string().required('Це поле є обов’язковим'),
  shipping: yup.string().required('Будь ласка, виберіть спосіб доставки'),
  payment: yup.string().required('Будь ласка, виберіть спосіб оплати'),
});

const Checkout = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [shippingAdded, setShippingAdded] = useState(false)
  const [payment, setPayment] = useState(false)


  const cart = useSelector(selectCart)
  const firstName = useSelector(selectFirstName)
  const dispatch = useDispatch()

  const subTotal = cart.reduce((sum, product) => sum + product.quantity * product.salesPrice || sum + product.quantity * product.price, 0);

  const [total, setTotal] = useState(subTotal)
  
  const handleChangeFirstName = (e) => {
    dispatch(setFirstName(e.target.value))
  }

  const handleChangePayment = () => {
    setPayment(true)
  }

  // const handleOpenModal = () => {
  //   if(cart.length !== 0 && total !== 0 && firstName !== '' && payment === true){
  //     setModalIsOpen(true);
  //   }else{
  //     return setModalIsOpen(false)
  //   }
  // }

  const handleShippingRate = () => {
    if(!shippingAdded){
      if(total !== 0){
        setTotal(prevTotal => prevTotal + 50);
      }else{
        return total
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

  const handleClearCart = () => {
    dispatch(setClearCart())
  }

  useEffect(() => {
    if (shippingAdded) {
      setTotal(subTotal + 50);
    } else {
      setTotal(subTotal);
    }
  }, [subTotal, shippingAdded]);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    setModalIsOpen(true)
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
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
              <li><Link to='/cart'>Cart</Link></li>
              <IoIosArrowForward />
              <li>Checkout</li>
            </ul>
          </div>
          <h1 className="ps-hero__heading">Checkout</h1>
        </div>
        </div>
        <div className="ps-page">
          <div className="container">
            <div className="ps-shopping-cart">
              <div className="ps-section__footer">
                <form onSubmit={handleSubmit(onSubmit)} className="ps-form--checkout" method="post" data-select2-id="11">
                  <div className="ps-checkout__left">
                    <h4>Billing Detail</h4>
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <label>Email</label>
                          <input {...register('email')} className="form-control" type="text" placeholder="Email..." />
                          <p>{errors.email?.message}</p>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <label>Phone</label>
                          <input {...register('phone')} className="form-control" type="text" placeholder="Phone..."/>
                          <p>{errors.phone?.message}</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <label>First Name</label>
                          <input {...register('firstName')} value={firstName} onChange={handleChangeFirstName} className="form-control" type="text" placeholder="First Name..."/>
                          <p>{errors.firstName?.message}</p>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input {...register('lastName')} className="form-control" type="text" placeholder="Last Name..."/>
                          <p>{errors.lastName?.message}</p>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Address</label>
                      <input {...register('address')} className="form-control" type="text" placeholder="Address..."/>
                      <p>{errors.address?.message}</p>
                    </div>
                    <div className="form-group">
                      <label>Country</label>
                      <input {...register('country')} className="form-control" type="text" placeholder="Country..."/>
                      <p>{errors.country?.message}</p>
                    </div>
                    <div className="form-group">
                      <label>City</label>
                      <input {...register('city')} className="form-control" type="text" placeholder="City..." />
                      <p>{errors.city?.message}</p>
                    </div>
                  </div>
                  <figure className="ps-shopping-cart__total">
                    <figcaption>Cart Total</figcaption>
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Products</td>
                          <td>
                            {cart.map((product) => (
                              <div style={{display: 'flex', gap: '15px'}} key={product.id}>
                                <h3>{product.title}</h3>
                                <p>${product.quantity * `${product.sales ? parseInt(product.salesPrice) : product.price}`}.00</p>
                              </div>
                            ))}
                          </td>
                        </tr>
                        <tr>
                          <td>SubTotal</td>
                          <td><strong>${subTotal.toFixed(2)}</strong></td>
                        </tr>
                        <tr>
                          <td>Shipping</td>
                          <td>
                            <div className="ps-radio">
                              <input {...register('shipping')} className="form-control" type="radio" id="shipping-1" name="shipping"/>
                              <label htmlFor="shipping-1" onClick={handleShippingRate}>Flat Rate: $50.00 </label>
                            </div>
                            <div className="ps-radio">
                              <input {...register('shipping')} className="form-control" type="radio" id="shipping-2" name="shipping"/>
                              <label htmlFor="shipping-2" onClick={handleShippingFreeCountry}>Free Shipping Estimate for Vietnam. </label>
                            </div>
                            <p>{errors.shipping?.message}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>Payment</td>
                          <td>
                            <div className="ps-radio">
                                <input {...register('payment')} className="form-control" type="radio" id="payment-1" name="payment"/>
                                <label htmlFor="payment-1" onClick={handleChangePayment}>С.O.D.</label>
                              </div>
                              <div className="ps-radio">
                                <input {...register('payment')} className="form-control" type="radio" id="payment-2" name="payment"/>
                                <label htmlFor="payment-2" onClick={handleChangePayment}>PayPal</label>
                              </div>
                              <p>{errors.payment?.message}</p>
                          </td>
                        </tr>
                        <tr className="total">
                          <td>Total</td>
                          <td>${total === 0 ? (0).toFixed(2) : parseInt(total).toFixed(2)}</td>
                        </tr>
                      </tbody>
                    </table><button type='submit' className="ps-btn ps-btn--fullwidth">Place to order</button>
                  </figure>
                </form>
              </div>
            </div>
          </div>
        </div>
        {modalIsOpen && (
          <div>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={handleCloseModal}
              contentLabel="Example Modal"
            >
              <div className="ps-popup__content bg--cover">
                <button className="ps-popup__close ps-btn--close" onClick={handleCloseModal}></button>
                <div className="ps-form__content">
                  <h2>Thank you for your order!</h2>
                  <p>Your order has been successfully placed and is currently being processed. You will receive the details of the order in your email.</p>
                  <p>We really appreciate you choosing our store. If you have any questions or need assistance, please contact us.</p>
                  <div className="form-group">
                    <Link to='/shop' className="ps-btn" onClick={handleClearCart}>CONTINUE SHOPPING</Link>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        )}
    </>
  )
}

export default Checkout
