import { Link } from 'react-router-dom'
import CartItem from '../Component/cart/CartItem'
import CartSummary from '../Component/cart/CartSummary'
import { useCart } from '../context/CartContext'

export default function Cart() {
	const { cartItems, removeFromCart, updateQuantity, clearCart, totals } = useCart()

	return (
		<section className='page-wrap'>
			<div className='page-head'>
				<h1>Your Cart</h1>
				<p>Review your selected items before checkout.</p>
			</div>

			{cartItems.length === 0 ? (
				<article className='card empty-state'>
					<h2>Your shopping cart is empty</h2>
					<p>Add products from the shop to see them here.</p>
					<Link className='btn btn-primary' to='/shop'>
						Continue Shopping
					</Link>
				</article>
			) : (
				<div className='cart-layout'>
					<div className='cart-list'>
						{cartItems.map((item) => (
							<CartItem
								key={item.id}
								item={item}
								onRemove={removeFromCart}
								onQuantityChange={updateQuantity}
							/>
						))}
					</div>
					<CartSummary totals={totals} onClear={clearCart} />
				</div>
			)}
		</section>
	)
}
