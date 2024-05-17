import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Sticky from 'react-stickynode';
import { setActiveMobileBtn, selectActiveMobileBtn } from "../../redux/slices/productSlice";
import { GoClockFill } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { images } from "../../modules/images";
import MiniCart from "../miniCart/MiniCart";


function Header() {

  const menuActive = useSelector(selectActiveMobileBtn)
  const dispatch = useDispatch()

  const handleActiveChanger = (i) => {
    dispatch(setActiveMobileBtn(menuActive === i ? null : i))
  }

    return (
      <>
      <header className="header header--default" data-sticky="true">
        <div className="header__left">
          <p><GoClockFill /> 08:00 am - 08:30 pm</p>
        </div>
        <div className="header__center">
          <nav className="header__navigation left">
            <ul className="menu">
              <li className="current-menu-item menu-item-has-children">
                <Link to='/'>Home</Link>
              </li>
              <li className="menu-item-has-children">
                <Link to='menu'>Special Category</Link>
              </li>
            </ul>
          </nav>
          <div className="header__logo">
            <Link to='/' className="ps-logo">
              <img src={images.logo} alt='logo'></img>
            </Link>
          </div>
          <nav className="header__navigation right">
            <ul className="menu">
              <li className="current-menu-item menu-item-has-children">
                <Link to={'shop'}>Shop</Link>
              </li>
              <li className="current-menu-item menu-item-has-children">
                <Link to={'about'}>About</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header__right">
          <div className="header__actions">
            <MiniCart />
          </div>
        </div>
      </header>
      <header className="header header--mobile" data-sticky="false">
        <div className="header__content">
          <div className="header__left">
            <button type="button" style={{border: 'none'}} className="ps-toggle--sidebar" onClick={() => handleActiveChanger(1)}><RxHamburgerMenu style={{ width: '30px', height: '30px'}} /></button>
          </div>
          <div className="header__center"><Link className="ps-logo" to='/'><img src={images.logo} alt=''/></Link></div>
          <div className="header__right">
            <div className="header__actions"><MiniCart /></div>
          </div>
        </div>
      </header>
      <Sticky enabled={true} activeClass="sticky__active">
        <header className="header header--default header--sticky" data-sticky="true">
          <div className="header__left">
            <p><GoClockFill /> 08:00 am - 08:30 pm</p>
          </div>
          <div className="header__center">
            <nav className="header__navigation left">
              <ul className="menu">
                <li className="current-menu-item menu-item-has-children">
                  <Link to='/'>Home</Link>
                </li>
                <li className="menu-item-has-children">
                  <Link to='menu'>Special Category</Link>
                </li>
              </ul>
            </nav>
            <div className="header__logo">
              <Link to='/' className="ps-logo">
                <img src={images.logo} alt='logo'></img>
              </Link>
            </div>
            <nav className="header__navigation right">
              <ul className="menu">
                <li className="current-menu-item menu-item-has-children">
                  <Link to='shop'>Shop</Link>
                </li>
                <li className="current-menu-item menu-item-has-children">
                  <Link to='about'>About</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__right">
            <div className="header__actions">
              <MiniCart />
            </div>
          </div>
        </header>
      </Sticky>
      </>
    );
}

export default Header
  