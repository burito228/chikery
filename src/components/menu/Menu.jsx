import { Link } from "react-router-dom";
import { RiCake3Line } from "react-icons/ri";
import { MdBakeryDining, MdCookie } from "react-icons/md";
import { LuCakeSlice } from "react-icons/lu";
import { GiPretzel } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import Product from "../product/Product";
import { images } from "../../modules/images";

const Menu = () => {


  return (
    <>
        <div className="ps-page--about">
            <div className="ps-hero bg--cover" data-background={images.hero}>
                <div className="ps-hero__container">
                <div className="ps-breadcrumb">
                    <ul className="breadcrumb">
                    <li><Link to='/'>Home</Link></li>
                    <IoIosArrowForward />
                    <li>Special Category</li>
                    </ul>
                </div>
                <h1 className="ps-hero__heading">Special Category</h1>
                </div>
            </div>
            <div className="ps-section ps-home-special-categories bg--cover" data-background={images.specialcake}>
                        <div className="container">
                        <div className="ps-section__header">
                            <p>Main products</p>
                            <h3>Our Special Categories</h3>
                            <GiPretzel style={{color: "#ce873a", width: '46px', height: '36px'}}/>
                            <small>Consectetur adipiscing elit. Curabitur sed turpis feugiat,  sed vel nulla non neque dictum imperdiet.</small>
                        </div>
                        <div className="ps-section__content">
                            <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 ">
                                <div className="ps-block--special--cake">
                                <div className="ps-block__icon"><LuCakeSlice style={{color: "#ce873a", width: '60', height: '60'}}/></div>
                                <div className="ps-block__content">
                                    <h4><Link to='shop'>Bread Cake</Link></h4>
                                    <p>Indulge in the rich flavors of our Bread Cake, crafted with care using the finest ingredients. Each bite is a symphony of moist texture and delightful sweetness.</p>
                                </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 ">
                                <div className="ps-block--special--cake">
                                <div className="ps-block__icon"><MdBakeryDining style={{color: "#ce873a", width: '80', height: '80'}}/></div>
                                <div className="ps-block__content">
                                    <h4><Link to='shop'>Combo Bakery</Link></h4>
                                    <p>Experience the ultimate treat with our Combo Bakery selection. From fluffy pastries to savory delights, this assortment promises to satisfy every craving.</p>
                                </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 ">
                                <div className="ps-block--special--cake">
                                <div className="ps-block__icon"><RiCake3Line style={{color: "#ce873a", width: '80', height: '80'}}/></div>
                                <div className="ps-block__content">
                                    <h4><Link to='shop'>CHIKERY Buchanan</Link></h4>
                                    <p>Introducing Chikery Buchanan, where tradition meets innovation. Our signature recipe blends classic flavors with a modern twist.</p>
                                </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 ">
                                <div className="ps-block--special--cake">
                                <div className="ps-block__icon"><MdCookie style={{color: "#ce873a", width: '80', height: '80'}}/></div>
                                <div className="ps-block__content">
                                    <h4><Link to='shop'>COMBO Cookies</Link></h4>
                                    <p>Dive into the world of temptation with our Combo Cookies. Made with love and baked to perfection, each cookie is a masterpiece of flavor and texture.</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="ps-section__footer text-center"><Link to='shop' className="ps-btn ps-btn--outline">All Products</Link></div>
                        </div>
            </div>
            <div className="ps-section ps-home-product">
                        <div className="container">
                        <div className="ps-section__header">
                            <p>Our Special Menu</p>
                            <h3>Bread of the day</h3><GiPretzel style={{color: "#ce873a", width: '46px', height: '36px'}}/>
                        </div>
                        <div className="ps-section__content">
                            <div className="row">
                                <Product />
                            </div>
                        </div>
                        </div>
            </div>
        </div>
    </>
  )
}

export default Menu
