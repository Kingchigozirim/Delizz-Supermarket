import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

export default function ProductCard({ product }) {
	const { addToCart } = useCart()

	return (
		<article className='card product-card'>
			<img className='product-image' src={product.image} alt={product.name} />
			<div className='product-content'>
				<h3>{product.name}</h3>
				<p>{product.description}</p>
				<div className='product-meta'>
					<strong>${product.price.toFixed(2)}</strong>
					<span className='pill'>{product.category}</span>
				</div>
				<div className='product-actions'>
					<button className='btn btn-primary' onClick={() => addToCart(product)}>
						Add to Cart
					</button>
					<Link className='btn btn-outline' to={`/product/${product.id}`}>
						View Details
					</Link>
				</div>
			</div>
		</article>
	)
}

