import { RiCake3Line } from "react-icons/ri";
import { MdBakeryDining, MdCookie } from "react-icons/md";
import { LuCakeSlice } from "react-icons/lu";
import { GiPretzel } from "react-icons/gi";
import { images } from '../../modules/images';
import SimpleSlider from '../../utils/Slider'
import Product from "../product/Product";
import { Link } from "react-router-dom";


const Main = () => {
  return (
    <>
        <div id="homepage-2">
            <SimpleSlider></SimpleSlider>
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
                            <h4><a href="shop.html">Bread Cake</a></h4>
                            <p>Lorem ipsum dolor sit  Curabitur sed turpis feugiat mollis felis vel</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 ">
                        <div className="ps-block--special--cake">
                        <div className="ps-block__icon"><MdBakeryDining style={{color: "#ce873a", width: '80', height: '80'}}/></div>
                        <div className="ps-block__content">
                            <h4><a href="shop.html">Combo Bakery</a></h4>
                            <p>Lorem ipsum dolor sit  Curabitur sed turpis feugiat mollis felis vel</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 ">
                        <div className="ps-block--special--cake">
                        <div className="ps-block__icon"><RiCake3Line style={{color: "#ce873a", width: '80', height: '80'}}/></div>
                        <div className="ps-block__content">
                            <h4><a href="shop.html">CHIKERY Buchanan</a></h4>
                            <p>Lorem ipsum dolor sit  Curabitur sed turpis feugiat mollis felis vel</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 ">
                        <div className="ps-block--special--cake">
                        <div className="ps-block__icon"><MdCookie style={{color: "#ce873a", width: '80', height: '80'}}/></div>
                        <div className="ps-block__content">
                            <h4><a href="shop.html">COMBO Cookies</a></h4>
                            <p>Lorem ipsum dolor sit  Curabitur sed turpis feugiat mollis felis vel</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="ps-section__footer text-center"><Link to='shop' className="ps-btn ps-btn--outline">All Products</Link></div>
                </div>
            </div>
            <div className="ps-section ps-home-about bg--cover" data-background={images.homeabout}>
                <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                    <div className="ps-section__image"><img src={images.about} alt=''></img></div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                    <div className="ps-section__content">
                        <p>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed turpis feugiat, mollis felis vel, viverra metus. Sed vel nulla non neque dictum imperdiet hendrerit ”</p>
                        <div className="ps-section__image"><img src={images.sign} alt=''></img></div>
                        <h5><span>Marry Lulie</span> - Ceo Chikery</h5>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="ps-section ps-home-awards bg--cover" data-background={images.homeaward}>
                <div className="container">
                <div className="ps-section__header">
                    <p>CHIKER STORE</p>
                    <h3>Our Awards</h3><i className="chikery-tt3"></i>
                </div>
                <div className="ps-section__content">
                    <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                        <div className="ps-block--award">
                        <div className="ps-block__header"><img src={images.award1} alt=''></img>
                            <h4>BAKERY OF THE YEAR</h4>
                            <p>1990 - 2010</p>
                        </div>
                        <div className="ps-block__content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed turpis feugiat, mollis felis vel, viverra metus.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                        <div className="ps-block--award">
                        <div className="ps-block__header"><img src={images.award2} alt=''></img>
                            <h4>CUPCAKES SHOP OF THE YEAR</h4>
                            <p>2012 - 2018</p>
                        </div>
                        <div className="ps-block__content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed turpis feugiat, mollis felis vel, viverra metus.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                        <div className="ps-block--award">
                        <div className="ps-block__header"><img src={images.award3} alt=''></img>
                            <h4>Awards Bakery academy</h4>
                            <p>2012 - 2018</p>
                        </div>
                        <div className="ps-block__content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed turpis feugiat, mollis felis vel, viverra metus.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
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

export default Main
