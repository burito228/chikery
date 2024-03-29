
function Navigation(){
    return(
        <>
            <div className="ps-panel--sidebar" id="cart-mobile">
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
            <div className="ps-panel--sidebar" id="navigation-mobile">
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
                <div className="navigation__content"><a className="navigation__item active" href="index.html"><i className="fa fa-home"></i></a><a className="navigation__item ps-toggle--sidebar" href="#navigation-mobile"><i className="fa fa-bars"></i></a><a className="navigation__item ps-toggle--sidebar" href="#cart-mobile"><i className="fa fa-shopping-basket"></i></a></div>
            </div>
        </>
    )
}

export default Navigation