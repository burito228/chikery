import { MdOutlineFavoriteBorder} from "react-icons/md";
import { images } from "../../modules/images"

const Product = () => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 ">
        <div className="ps-product">
            <div className="ps-product__thumbnail">
                <img src={images.firstproduct} alt='product' />
                <a className="ps-product__overlay" href="product.html"></a>
                <span className="ps-badge ps-badge--sale">
                    <i>30%</i>
                </span>
            </div>
            <div className="ps-product__content">
                <div className="ps-product__desc">
                    <a className="ps-product__title" href="product.html">Red sugar flower</a>
                    <p>
                        <span>350g</span>
                        <span>30 Min</span>
                        <span>120 <sup>o</sup>C</span>
                    </p>
                    <span className="ps-product__price sale"><del>$16.00</del> $12.00</span>
                </div>
                <div className="ps-product__shopping"><a className="ps-btn ps-product__add-to-cart" href="#">Add to cart</a>
                    <div className="ps-product__actions">
                        <a href="#"><MdOutlineFavoriteBorder className="wish-btn"/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product
