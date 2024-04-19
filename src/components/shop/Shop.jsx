import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { images } from "../../modules/images"
import CustomSelect from "../select/CustomSelect";
import PriceRangeFilter from "../pricefilter/PriceRangeFilter";
import ProductList from "../productList/ProductList";
import { setCategoryFilter, setIngridientFilter, setPriceFilter } from "../../redux/slices/filterSlice";
import { selectCountShow, selectProducts } from "../../redux/slices/productSlice";

const Shop = () => {

  const [ingredients, setIngredients] = useState([])
  const [categories, setCategory] = useState([])
  const [randomProducts, setRandomProducts] = useState([]);

  const products = useSelector(selectProducts)
  const countShow = useSelector(selectCountShow)
  const dispatch = useDispatch()
  
  useEffect(() => {
      const shuffledProducts = [...products].sort(() => 0.5 - Math.random());
      setRandomProducts(shuffledProducts.slice(0, 3));
  }, [products]);

  const handlePriceFilterChange = (value) => {
    dispatch(setPriceFilter(value))
  };

  useEffect(() => {
    dispatch(setIngridientFilter(ingredients));
    dispatch(setCategoryFilter(categories))
  }, [ingredients, categories, dispatch]);

  const handleToggleIngridientFilterChange = (ingredient) => {
    if(ingredients.includes(ingredient)){
      setIngredients(ingredients.filter((i) => i !== ingredient))
    }else{
      setIngredients([...ingredients, ingredient]);
    }
  }

  const handleToggleCategoryFilterChange = (category) => {
    if(categories.includes(category)){
      setCategory(categories.filter((i) => i !== category))
    }else{
      setCategory([...categories, category]);
    }
  }

  return (
    <>
    <div className="ps-hero bg--cover" data-background={images.hero}>
        <div className="ps-hero__container">
          <div className="ps-breadcrumb">
            <ul className="breadcrumb">
              <li><Link to='/'>Home</Link></li>
              <IoIosArrowForward />
              <li>Shop</li>
            </ul>
          </div>
          <h1 className="ps-hero__heading">Shop</h1>
        </div>
    </div>
    <div className="ps-page--shop">
      <div className="container">
        <div className="ps-shopping">
          <div className="ps-shopping__left">
            <aside className="widget widget_shop widget_shop-ingredients">
              <h3 className="widget-title">Categories</h3>
              <div className="ps-checkbox ps-checkbox--circle">
                <input className="form-control" type="checkbox" id="categories-1" name="categories" onChange={() => handleToggleCategoryFilterChange('bready')}/>
                <label htmlFor="categories-1">Bready</label>
              </div>
              <div className="ps-checkbox ps-checkbox--circle">
                <input className="form-control" type="checkbox" id="categories-2" name="categories" onChange={() => handleToggleCategoryFilterChange('pinpool')}/>
                <label htmlFor="categories-2">Pinpool</label>
              </div>
              <div className="ps-checkbox ps-checkbox--circle">
                <input className="form-control" type="checkbox" id="categories-3" name="categories" onChange={() => handleToggleCategoryFilterChange('delicieux')}/>
                <label htmlFor="categories-3">Delicieux</label>
              </div>
              <div className="ps-checkbox ps-checkbox--circle">
                <input className="form-control" type="checkbox" id="categories-4" name="categories" onChange={() => handleToggleCategoryFilterChange('cake')}/>
                <label htmlFor="categories-4">Cake</label>
              </div>
              <div className="ps-checkbox ps-checkbox--circle">
                <input className="form-control" type="checkbox" id="categories-5" name="categories" onChange={() => handleToggleIngridientFilterChange('cupke')}/>
                <label htmlFor="categories-5">Cupke</label>
              </div>
            </aside>
            <aside className="widget widget_shop widget_shop-filter">
              <h3 className="widget-title">Filter price</h3>
              <PriceRangeFilter onChange={handlePriceFilterChange} />
            </aside>
            <aside className="widget widget_shop widget_shop-ingredients">
              <h3 className="widget-title">Ingredient</h3>
              <div className="ps-checkbox ps-checkbox--circle">
                <input className="form-control" type="checkbox" id="ingredient-1" name="ingredient" onChange={() => handleToggleIngridientFilterChange('sugar')}/>
                <label htmlFor="ingredient-1">Sugar</label>
              </div>
              <div className="ps-checkbox ps-checkbox--circle">
                <input className="form-control" type="checkbox" id="ingredient-2" name="ingredient" onChange={() => handleToggleIngridientFilterChange('chocolate')}/>
                <label htmlFor="ingredient-2">Chocolate</label>
              </div>
              <div className="ps-checkbox ps-checkbox--circle">
                <input className="form-control" type="checkbox" id="ingredient-3" name="ingredient" onChange={() => handleToggleIngridientFilterChange('whiteFlour')}/>
                <label htmlFor="ingredient-3">White Flour</label>
              </div>
              <div className="ps-checkbox ps-checkbox--circle">
                <input className="form-control" type="checkbox" id="ingredient-4" name="ingredient" onChange={() => handleToggleIngridientFilterChange('cream')}/>
                <label htmlFor="ingredient-4">Cream</label>
              </div>
            </aside>
            <aside className="widget widget_shop widget_recent-product">
              <h3 className="widget-title">Recent Products</h3>
              {randomProducts.map((product) => (
                <div className="ps-product--sidebar" key={product.id}>
                  <div className="ps-product__thumbnail">
                    <img src={product.img} alt="product"/>
                    <a className="ps-product__overlay" href="#"></a>
                    {product.sales ? (
                            <span className="ps-badge ps-badge--sale">
                                <i>{product.sales}%</i>
                            </span>
                    ): <></>}
                  </div>
                  <div className="ps-product__content">
                    <a className="ps-product__title" href="#">{product.title}</a>
                    <p>
                      <span>350g</span><span>30 Min</span><span>120 <sup>o</sup>C</span></p>
                      {product.sales ? (
                        <span className="ps-product__price sale">
                          <del>${product.price}</del>
                          ${product.salesPrice}
                        </span>
                      ):<span className="ps-product__price">
                          ${product.price}
                        </span>
                      }
                  </div>
                </div>
              ))}
            </aside>
          </div>
          <div className="ps-shopping__right">
            <div className="ps-shopping__top">
              <p>Show {countShow} of 35 result</p>
              <CustomSelect />
            </div>
            <ProductList />
            <div className="ps-pagination">
              <ul className="pagination">
                <li><a href="#"><IoIosArrowBack /></a></li>
                <li className="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#"><IoIosArrowForward /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Shop
