import { MdOutlineFavoriteBorder} from "react-icons/md";
import { FaSpinner } from 'react-icons/fa'
import { selectIsLoading, selectProducts, setAddProduct, setCountShow, setLoadingWithDelay, setLoadingWithoutDelay } from "../../redux/slices/productSlice";
import { selectPriceFilter ,selectIngridientFilter, selectCategoryFilter, selectDisplayOrder } from "../../redux/slices/filterSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo } from "react";

const Product = () => {

    
    const products = useSelector(selectProducts)
    let IsLoading = useSelector(selectIsLoading)

    const priceFilter = useSelector(selectPriceFilter)
    const categoryFilter = useSelector(selectCategoryFilter)
    const ingredientFilter = useSelector(selectIngridientFilter)
    const displayOrder = useSelector(selectDisplayOrder)

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
    

    const sortedProducts = useMemo(() => {
        let sorted = [...products];
    
        if(displayOrder.value === 'lower'){
            sorted.sort((a,b) => a.price - b.price)
        }
        if(displayOrder.value === 'higher'){
            sorted.sort((a,b) => b.price - a.price)
        }
    
        return sorted;
    }, [products, displayOrder]);
    
    
    const matchPriceRange = (product, priceFilter) => {
        const price = product.salesPrice ? product.salesPrice : product.price;
        const regularPrice = product.price;
        return (price >= priceFilter[0] && price <= priceFilter[1]) || (regularPrice >= priceFilter[0] && regularPrice <= priceFilter[1]);
    };
    
    const matchIngredient = (product, ingredientFilter) => {
        return product.ingridient.some((i) => ingredientFilter.includes(i));
    };
    
    const matchCategory = (product, categoryFilter) => {
        return product.category.some((c) => categoryFilter.includes(c))
    };

    const filteredProducts = sortedProducts.filter((product) => {
        let matchesPrice = true;
        let matchesIngredient = true;
        let matchesCategory = true;
        let matchesDisplayOrder = true;
        
        
        if(priceFilter.length > 0){
            matchesPrice = matchPriceRange(product, priceFilter);
        }
        
        if (ingredientFilter.length > 0) {
            matchesIngredient = matchIngredient(product, ingredientFilter);
        } 
        
        if(categoryFilter.length > 0) {
            matchesCategory = matchCategory(product, categoryFilter)
        }
        
        return matchesPrice && matchesIngredient && matchesCategory && matchesDisplayOrder;
    });

    
    
    useEffect(() => {

        const productLenght = filteredProducts.length
        dispatch(setCountShow(productLenght))

    }, [filteredProducts, dispatch])

    
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
