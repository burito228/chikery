import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectIsLoading, selectProducts, setAddProduct, setLoadingWithDelay, setLoadingWithoutDelay } from "../redux/slices/productSlice";
import { FaSpinner } from 'react-icons/fa'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SimpleSlider() {

  const products = useSelector(selectProducts)
  let IsLoading = useSelector(selectIsLoading)
  const dispatch = useDispatch()

  const [randomProducts, setRandomProducts] = useState([]);

  const handleAddProduct = (id) => {
    dispatch(setLoadingWithoutDelay(true))
    setTimeout(()=> {
        dispatch(setAddProduct(id))
    }, 2000)
    setTimeout(()=> {
        dispatch(setLoadingWithDelay(false))
    }, 2000)
}


  useEffect(() => {
    const shuffledProducts = [...products].sort(() => 0.5 - Math.random());
    setRandomProducts(shuffledProducts.slice(0, 3));
}, [products]);

  var settings = {
    Infinity: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="ps-home-banner bg--cover">
      <Slider {...settings}>
        {randomProducts.map((product) => (
              <div className="ps-product--banner" key={product.id}>
                <div className="ps-product__thumbnail"><Link to='shop'><img src={product.img} alt=''/></Link></div>
                <div className="ps-product__content">
                  <h4>FEATURED PRODUCT</h4>
                  <Link to='shop' className="ps-product__title">{product.title}</Link>
                  <p>Bakery - Sweet - Bio</p>
                  {product.sales ? (
                                <span className="ps-product__price sale">
                                    <del>${product.price}</del>
                                    ${product.salesPrice}
                                </span>
                            ) : <span className="ps-product__price">
                                    ${product.price}
                                </span>
                  }
                  <button type="button" onClick={() => handleAddProduct(product.id)} disabled={IsLoading} className="ps-btn">
                    {IsLoading ? (<>
                      <span>Adding a product...</span>
                      <FaSpinner className="spinner" />
                    </>) : 'Order now'}
                  </button>
                </div>
              </div>
        ))}
      </Slider>
    </div>
  );
}