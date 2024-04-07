
const productSettings = (product) => {
  return {
    ...product,
    isFavorite: false,
    salesPrice: `${Math.floor(product.price - product.price * (product.sales / 100))}`,
  }
}

export default productSettings
