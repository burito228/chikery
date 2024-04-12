import { MdOutlineFavoriteBorder} from "react-icons/md";
import { FaSpinner } from 'react-icons/fa'
import { selectIsLoading, selectProducts, setAddProduct, setLoadingWithDelay, setLoadingWithoutDelay, setToggleFavorite } from "../../redux/slices/productSlice";
import { selectPriceFilter ,selectIngridientFilter } from "../../redux/slices/filterSlice";
import { useSelector, useDispatch } from "react-redux";

const Product = () => {

    const products = useSelector(selectProducts)
    const priceFilter = useSelector(selectPriceFilter)
    const ingredientFilter = useSelector(selectIngridientFilter)
    let IsLoading = useSelector(selectIsLoading)
    const dispatch = useDispatch()

    const handleAddProduct = (id) => {
        dispatch(setLoadingWithoutDelay(true))
        setTimeout(()=> {
            dispatch(setAddProduct(id))
        }, 2000)
        setTimeout(()=> {
            dispatch(setLoadingWithDelay(false))
        }, 2000)
    }

    const filteredProducts = products.filter((product) => {
        const matchesIngridient = product.ingridient.includes(ingredientFilter)
        return matchesIngridient
    }) 

    

  return (
    <>
        {filteredProducts.map((product) => (
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6" key={product.id}>
                <div className="ps-product">
                    <div className="ps-product__thumbnail">
                        <img src={product.img} alt='product' />
                        <a className="ps-product__overlay" href="product.html"></a>
                        {product.sales ? (
                            <span className="ps-badge ps-badge--sale">
                                <i>{product.sales}%</i>
                            </span>
                        ): <></>}
                    </div>
                    <div className="ps-product__content">
                        <div className="ps-product__desc">
                            <h3 className="ps-product__title">{product.title}</h3>
                            <p>
                                <span>350g</span>
                                <span>30 Min</span>
                                <span>120 <sup>o</sup>C</span>
                            </p>
                            {product.sales ? (
                                <span className="ps-product__price sale">
                                    <del>${product.price}</del>
                                    ${product.salesPrice}
                                </span>
                            ) : <span className="ps-product__price">
                                    ${product.price}
                                </span>
                            }
                        </div>
                        <div className="ps-product__shopping">
                            <button type="button" className="ps-btn ps-product__add-to-cart" onClick={() => handleAddProduct(product.id)} disabled={IsLoading}>
                                {IsLoading ? (<>
                                    <span>Adding a product...</span>
                                    <FaSpinner className="spinner" />
                                </>) : 'Add to cart'}
                            </button>
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
