import { useSelector } from "react-redux"
import { selectProducts } from "../../redux/slices/productSlice"
import Product from "../product/Product"


const ProductList = () => {

    const products = useSelector(selectProducts)

  return (
    <div className="ps-product-box">
        {products.length === 0 ? (<p style={{textAlign: 'center', marginBottom: '15px'}}>No products available</p>) : (
            <div className="row">
                <Product />
            </div>
        )}
    </div>
  )
}

export default ProductList
