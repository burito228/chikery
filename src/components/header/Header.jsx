import { Link } from "react-router-dom";
import { GoClockFill } from "react-icons/go";
import { MdOutlineFavoriteBorder} from "react-icons/md";
import { images } from "../../modules/images";
import Sticky from 'react-stickynode';
import MiniCart from "../miniCart/MiniCart";


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
              <li className="current-menu-item menu-item-has-children">
                <Link to='/'>Home</Link>
              </li>
              <li className="menu-item-has-children">
                <Link to='shop'>Shop</Link>
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
                <Link to={'about'}>About</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header__right">
          <div className="header__actions">
            <a href="whishlist.html"><MdOutlineFavoriteBorder /></a>
            <MiniCart />
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
                <Link to='shop'>Shop</Link>
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
                <Link to={'about'}>About</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header__right">
          <div className="header__actions">
            <a href="whishlist.html"><MdOutlineFavoriteBorder /></a>
            <MiniCart />
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
      </Sticky>
      </>
    );
}

export default Header
  