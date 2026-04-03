import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

function formatCurrency(value) {
	return new Intl.NumberFormat('en-NG', {
		style: 'currency',
		currency: 'NGN',
		maximumFractionDigits: 0,
	}).format(value)
}

export default function ProductCard({ product }) {
	const { addToCart } = useCart()
	const displayPrice = product.salePrice ?? product.price

	return (
		<article className='card product-card'>
			{product.salePrice ? <span className='pill sale-pill'>Sale</span> : null}
			<img className='product-image' src={product.image} alt={product.name} />
			<div className='product-content'>
				<h3>{product.name}</h3>
				<p>{product.description}</p>
				<div className='product-meta'>
					<strong>{formatCurrency(displayPrice)}</strong>
					<span className='pill'>{product.category.replace(/-/g, ' ')}</span>
				</div>
				<div className='product-actions'>
					<button className='btn btn-primary' onClick={() => addToCart({ ...product, price: displayPrice })}>
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

