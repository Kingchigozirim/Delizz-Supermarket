export default function CartSummary({ totals, onClear }) {
	return (
		<aside className='card cart-summary'>
			<h2>Cart Summary</h2>
			<div className='summary-row'>
				<span>Items</span>
				<span>{totals.itemCount}</span>
			</div>
			<div className='summary-row'>
				<span>Subtotal</span>
				<span>${totals.subtotal.toFixed(2)}</span>
			</div>
			<div className='summary-row'>
				<span>Shipping</span>
				<span>${totals.shipping.toFixed(2)}</span>
			</div>
			<div className='summary-row summary-total'>
				<span>Total</span>
				<span>${totals.total.toFixed(2)}</span>
			</div>
			<button className='btn btn-primary'>Proceed to Checkout</button>
			<button className='btn btn-outline' onClick={onClear}>
				Clear Cart
			</button>
		</aside>
	)
}

