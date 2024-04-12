import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { images } from "../../modules/images"
import CustomSelect from "../select/CustomSelect";
import PriceRangeFilter from "../pricefilter/PriceRangeFilter";
import ProductList from "../productList/ProductList";
import { setIngridientFilter } from "../../redux/slices/filterSlice";

const Shop = () => {

  const dispatch = useDispatch()

  const handlePriceFilterChange = (value) => {
    console.log('Selected price range:', value);
    // Додайте свою логіку фільтрації тут
  };

  const handleToggleIngridientFilterChange = () => {
    dispatch(setIngridientFilter())
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
            <aside className="widget widget_shop widget_categories">
              <h3 className="widget-title">Categories</h3>
              <ul>
                <li><a href="shop-default.html">Bready</a></li>
                <li><a href="shop-default.html">Pinpool</a></li>
                <li><a href="shop-default.html">Deliciuex</a></li>
                <li><a href="shop-default.html">Cake</a></li>
                <li><a href="shop-default.html">Cupke</a></li>
              </ul>
            </aside>
            <aside className="widget widget_shop widget_shop-filter">
              <h3 className="widget-title">Filter price</h3>
              <PriceRangeFilter onChange={handlePriceFilterChange} />
            </aside>
            <aside className="widget widget_shop widget_shop-ingredients">
              <h3 className="widget-title">Ingredient</h3>
              <div className="ps-checkbox ps-checkbox--circle">
                <input className="form-control" type="checkbox" id="ingredient-1" name="ingredient"/>
                <label htmlFor="ingredient-1" onClick={handleToggleIngridientFilterChange}>Sugar</label>
              </div>
              <div className="ps-checkbox ps-checkbox--circle">
                <input className="form-control" type="checkbox" id="ingredient-2" name="ingredient"/>
                <label htmlFor="ingredient-2">Chocolate</label>
              </div>
              <div className="ps-checkbox ps-checkbox--circle">
                <input className="form-control" type="checkbox" id="ingredient-3" name="ingredient"/>
                <label htmlFor="ingredient-3">White Flour</label>
              </div>
              <div className="ps-checkbox ps-checkbox--circle">
                <input className="form-control" type="checkbox" id="ingredient-4" name="ingredient"/>
                <label htmlFor="ingredient-4">Cream</label>
              </div>
            </aside>
            <aside className="widget widget_shop widget_recent-product">
              <h3 className="widget-title">Recent Products</h3>
              <div className="ps-product--sidebar">
                <div className="ps-product__thumbnail">
                  <img src={images.firstproduct} alt=""/>
                  <a className="ps-product__overlay" href="product-default.html"></a>
                </div>
                <div className="ps-product__content">
                  <a className="ps-product__title" href="product-default.html">Red sugar flower</a>
                  <p>
                    <span>350g</span><span>30 Min</span><span>120 <sup>o</sup>C</span></p>
                    <span className="ps-product__price">$12.00</span>
                </div>
              </div>
            </aside>
          </div>
          <div className="ps-shopping__right">
            <div className="ps-shopping__top">
              <p>Show 1-12 of 35 result</p>
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
