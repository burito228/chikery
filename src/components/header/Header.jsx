import { GoClockFill } from "react-icons/go";
import { MdOutlineFavoriteBorder} from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { images } from "../../modules/images";


function Header() {
    return (
      <>
        <header className="header header--default" data-sticky="true">
        <div className="header__left">
          <p><GoClockFill /> 08:00 am - 08:30 pm</p>
        </div>
        <div className="header__center">
          <nav className="header__navigation left">
            <ul className="menu">
              <li className="current-menu-item menu-item-has-children"><a href="index.html">Home</a><span className="sub-toggle"><i className="fa fa-angle-down"></i></span>
              </li>
              <li className="menu-item-has-children"><a href="shop.html">Shop</a><span className="sub-toggle"><i className="fa fa-angle-down"></i></span>
              </li>
            </ul>
          </nav>
          <div className="header__logo">
            <a className="ps-logo" href="index.html">
              <img src={images.logo} alt='logo'></img>
              </a>
          </div>
          <nav className="header__navigation right">
            <ul className="menu">
              <li className="current-menu-item menu-item-has-children"><a href="about-us.html">Pages</a><span className="sub-toggle"><i className="fa fa-angle-down"></i></span>
                <ul className="sub-menu">
                  <li><a href="about-us.html">About</a>
                  </li>
                  <li><a href="whishlist.html">Whishlist</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header__right">
          <div className="header__actions"><a href="whishlist.html"><MdOutlineFavoriteBorder /></a>
            <div className="ps-cart--mini"><a className="ps-cart__toggle" href="#"><TiShoppingCart /><span><i>2</i></span></a>
              <div className="ps-cart__content">
                <div className="ps-cart__items">
                  <div className="ps-product--mini-cart">
                    <div className="ps-product__thumbnail"><a href="#"><img src="" alt='' /></a></div>
                    <div className="ps-product__content"><span className="ps-btn--close"></span><a className="ps-product__title" href="product.html">Jean Woman Summer</a>
                      <p><strong>Quantity: 1</strong></p><small>$12.00</small>
                    </div>
                  </div>
                  <div className="ps-product--mini-cart">
                    <div className="ps-product__thumbnail"><a href="#"><img src="" alt='' /></a></div>
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
        </header>
        <header className="header header--mobile" data-sticky="false">
        <div className="header__content">
          <div className="header__left"><a className="ps-toggle--sidebar" href="#navigation-mobile"><i className="fa fa-bars"></i></a></div>
          <div className="header__center"><a className="ps-logo" href="index.html"><img src={images.logo} alt=''/></a></div>
          <div className="header__right">
            <div className="header__actions"><a href="whishlist.html"><i className="fa fa-heart-o"></i></a></div>
          </div>
        </div>
        </header>
      </>
    );
}

export default Header
  