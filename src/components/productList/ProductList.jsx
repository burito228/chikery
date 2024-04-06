import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProduct, selectProducts } from "../../redux/slices/productSlice"
import Product from "../product/Product"


const ProductList = () => {

    const products = useSelector(selectProducts)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(fetchProduct('https://660efcb9356b87a55c50a062.mockapi.io/chikery/Product'))
    }, [])

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
