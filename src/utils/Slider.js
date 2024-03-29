import Slider from "react-slick";
import { images } from '../modules/images';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SimpleSlider() {
  var settings = {
    Infinity: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="ps-home-banner bg--cover" data-background={images.homebanner}>
      <Slider {...settings}>
        <div className="ps-product--banner">
                <div className="ps-product__thumbnail"><a href="product.html"><img src={images.banner1} alt=''/></a></div>
                <div className="ps-product__content">
                  <h4>FEATURED PRODUCT</h4><a className="ps-product__title" href="product.html"> Chikery Chocolate  Black flower</a>
                  <p>Bakery - Sweet - Bio</p><a className="ps-btn" href="product.html"> Order Now</a>
                </div>
              </div>
              <div className="ps-product--banner">
                <div className="ps-product__thumbnail"><a href="product.html"><img src={images.banner2} alt=''/></a></div>
                <div className="ps-product__content">
                  <h4>FEATURED PRODUCT</h4><a className="ps-product__title" href="product.html"> Chikery Chocolate  Black flower</a>
                  <p>Bakery - Sweet - Bio</p><a className="ps-btn" href="product.html"> Order Now</a>
                </div>
              </div>
              <div className="ps-product--banner">
                <div className="ps-product__thumbnail"><a href="product.html"><img src={images.banner2} alt=''></img></a></div>
                <div className="ps-product__content">
                  <h4>FEATURED PRODUCT</h4><a className="ps-product__title" href="product.html"> Chikery Chocolate  Black flower</a>
                  <p>Bakery - Sweet - Bio</p><a className="ps-btn" href="product.html"> Order Now</a>
                </div>
              </div>
      </Slider>
    </div>
  );
}