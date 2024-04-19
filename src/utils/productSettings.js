import { v4 as uuidv4 } from "uuid"

const productSettings = (product) => {
  return {
    ...product,
    isFavorite: false,
    salesPrice: `${Math.floor(product.price - product.price * (product.sales / 100))}`,
    id: uuidv4()
  }
}

export default productSettings
