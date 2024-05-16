import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";



function Navigation(){

  const [activeMobileBtn, setActiveMobileBtn] = useState(0)

  const handleActiveChanger = (i) => {
    setActiveMobileBtn(activeMobileBtn === i ? null : i)
  }

    return(
        <>  
            <div className={`ps-site-overlay ${activeMobileBtn === 1 || activeMobileBtn === 2 ? 'active' : ''}`} onClick={() => handleActiveChanger(0)}></div>
            <div className={`ps-panel--sidebar ${activeMobileBtn === 2 ? 'active' : ''}`} id="cart-mobile">
              <div className="ps-panel__header">
                <h3>Shopping Cart</h3>
              </div>
              <div className="navigation__content">
                <div className="ps-cart--mobile">
                  <div className="ps-cart__content">
                    <div className="ps-cart__items">
                      <div className="ps-product--mini-cart">
                        <div className="ps-product__thumbnail"><a href="#"><img src="" alt=''/></a></div>
                        <div className="ps-product__content"><span className="ps-btn--close"></span><a className="ps-product__title" href="product.html">Jean Woman Summer</a>
                          <p><strong>Quantity: 1</strong></p><small>$12.00</small>
                        </div>
                      </div>
                      <div className="ps-product--mini-cart">
                        <div className="ps-product__thumbnail"><a href="#"><img src="" alt=''/></a></div>
                        <div className="ps-product__content"><span className="ps-btn--close"></span><a className="ps-product__title" href="product.html">Jean Woman Summer</a>
                          <p><strong>Quantity: 1</strong></p><small>$12.00</small>
                        </div>
                      </div>
                    </div>
                    <div className="ps-cart__footer">
                      <h3>Sub Total:<strong>$48.00</strong></h3>
                      <figure><a className="ps-btn" href="cart.html">View Cart</a><a className="ps-btn ps-btn--dark" href="checkout.html">Checkout</a></figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`ps-panel--sidebar ${activeMobileBtn === 1 ? 'active' : ''}`} id="navigation-mobile">
                <div className="ps-panel__header">
                <h3>Menu</h3>
                </div>
                <div className="ps-panel__content">
                <ul className="menu--mobile">
                    <li className="current-menu-item"><a href="index.html">Home</a></li>
                    <li><a href="shop.html">Shop</a></li>
                    <li><a href="about-us.html">About</a></li>
                    <li className="current-menu-item menu-item-has-children"><a href="about-us.html">Pages</a><span className="sub-toggle"></span>
                    <ul className="sub-menu">
                        <li><a href="about-us.html">About</a>
                        </li>
                        <li><a href="whishlist.html">Whishlist</a>
                        </li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
            <div className="navigation--list">
                <div className="navigation__content"><Link className={`navigation__item ${activeMobileBtn === 0 ? 'active' : ''}`} onClick={() => handleActiveChanger(0)} to='/'><FaHome /></Link><button type="button" className={`navigation__item ps-toggle--sidebar ${activeMobileBtn === 1 ? 'active' : ''}`} onClick={() => handleActiveChanger(1)}><RxHamburgerMenu style={{color:'white'}}/></button><button type="button" className={`navigation__item ps-toggle--sidebar ${activeMobileBtn === 2 ? 'active' : ''}`} onClick={() => handleActiveChanger(2)}><TiShoppingCart style={{color:'white'}}/></button></div>
            </div>
        </>
    )
}

export default Navigation