import { MdOutlineFavoriteBorder} from "react-icons/md";
import { selectProducts, setAddProduct, setDeleteProduct, setToggleFavorite } from "../../redux/slices/productSlice";
import { useSelector } from "react-redux";

const Product = () => {

    const products = useSelector(selectProducts)

  return (
    <>
        {products.map((product) => (
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6" key={product.id}>
                <div className="ps-product">
                    <div className="ps-product__thumbnail">
                        <img src={product.img} alt='product' />
                        <a className="ps-product__overlay" href="product.html"></a>
                        {product.sales ? (
                            <span className="ps-badge ps-badge--sale">
                                <i>{product.sales}</i>
                            </span>
                        ): <></>}
                    </div>
                    <div className="ps-product__content">
                        <div className="ps-product__desc">
                            <a className="ps-product__title">{product.title}</a>
                            <p>
                                <span>350g</span>
                                <span>30 Min</span>
                                <span>120 <sup>o</sup>C</span>
                            </p>
                            {product.sales ? (
                                <span className="ps-product__price sale">
                                    <del>${Math.floor(product.price - product.price * (product.sales / 100))}</del>
                                    ${product.price}
                                </span>
                            ) : <span className="ps-product__price">
                                    ${product.price}
                                </span>
                            }
                        </div>
                        <div className="ps-product__shopping"><button type="button" className="ps-btn ps-product__add-to-cart">Add to cart</button>
                            <div className="ps-product__actions">
                                <button type="button"><MdOutlineFavoriteBorder className="wish-btn"/></button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        ))}
    </>
  )
}

export default Product
