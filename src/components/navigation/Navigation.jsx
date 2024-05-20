import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartProduct from "../cartProduct/CartProduct";
import { setActiveMobileBtn, selectActiveMobileBtn, selectCart } from "../../redux/slices/productSlice";
import { FaHome } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { RxHamburgerMenu } from "react-icons/rx";



function Navigation(){

  const menuActive = useSelector(selectActiveMobileBtn)
  const dispatch = useDispatch()
  const cart = useSelector(selectCart)

  const handleActiveChanger = (i) => {
    dispatch(setActiveMobileBtn(menuActive === i ? null : i))
  }

    return(
        <>  
            <div className={`ps-site-overlay ${menuActive === 1 || menuActive === 2 ? 'active' : ''}`} onClick={() => handleActiveChanger(0)}></div>
            <div className={`ps-panel--sidebar ${menuActive === 2 ? 'active' : ''}`} id="cart-mobile">
              <div className="ps-panel__header">
                <h3>Shopping Cart</h3>
              </div>
              <div className="navigation__content">
                <div className="ps-cart--mobile">
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
                        return total + product.quantity * parseInt(`${product.sales ? product.salesPrice : product.price}`)}, 0).toFixed(2)}</strong></h3>
                      <figure><Link className="ps-btn" to='cart' onClick={() => handleActiveChanger(0)}>View Cart</Link></figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`ps-panel--sidebar ${menuActive === 1 ? 'active' : ''}`} id="navigation-mobile">
                <div className="ps-panel__header">
                <h3>Menu</h3>
                </div>
                <div className="ps-panel__content">
                <ul className="menu--mobile">
                    <li className="current-menu-item"><Link to='/' onClick={() => handleActiveChanger(0)}>Home</Link></li>
                    <li><Link to='menu' onClick={() => handleActiveChanger(0)}>Special Category</Link></li>
                    <li><Link to='shop' onClick={() => handleActiveChanger(0)}>Shop</Link></li>
                    <li className="current-menu-item menu-item-has-children"><Link to='about' onClick={() => handleActiveChanger(0)}>About</Link></li>
                </ul>
                </div>
            </div>
            <div className="navigation--list">
                <div className="navigation__content"><Link className={`navigation__item ${menuActive === 0 ? 'active' : ''}`} onClick={() => handleActiveChanger(0)} to='/'><FaHome /></Link><button type="button" className={`navigation__item ps-toggle--sidebar ${menuActive === 1 ? 'active' : ''}`} onClick={() => handleActiveChanger(1)}><RxHamburgerMenu style={{color:'white'}}/></button><button type="button" className={`navigation__item ps-toggle--sidebar ${menuActive === 2 ? 'active' : ''}`} onClick={() => handleActiveChanger(2)}><TiShoppingCart style={{color:'white'}}/></button></div>
            </div>
        </>
    )
}

export default Navigation