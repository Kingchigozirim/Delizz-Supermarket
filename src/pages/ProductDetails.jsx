import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import products from '../data/product'

export default function ProductDetails() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const product = products.find((entry) => entry.id === id)

  if (!product) {
    return (
      <section className='page-wrap'>
        <h1>Product not found</h1>
        <p>We could not find the product you requested.</p>
        <Link className='btn btn-outline' to='/shop'>
          Back to Shop
        </Link>
      </section>
    )
  }

  return (
    <section className='page-wrap'>
      <article className='card details-card'>
        <img src={product.image} alt={product.name} className='details-image' />
        <div className='details-content'>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>
            <strong>${product.price.toFixed(2)}</strong>
          </p>
          <div className='product-actions'>
            <button className='btn btn-primary' onClick={() => addToCart(product)}>
              Add to Cart
            </button>
            <Link className='btn btn-outline' to='/cart'>
              Go to Cart
            </Link>
          </div>
        </div>
      </article>
    </section>
  )
}
