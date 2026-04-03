function formatCurrency(value) {
	return new Intl.NumberFormat('en-NG', {
		style: 'currency',
		currency: 'NGN',
		maximumFractionDigits: 0,
	}).format(value)
}

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
				<span>{formatCurrency(totals.subtotal)}</span>
			</div>
			<div className='summary-row'>
				<span>Shipping</span>
				<span>{formatCurrency(totals.shipping)}</span>
			</div>
			<div className='summary-row summary-total'>
				<span>Total</span>
				<span>{formatCurrency(totals.total)}</span>
			</div>
			<button className='btn btn-primary'>Proceed to Checkout</button>
			<button className='btn btn-outline' onClick={onClear}>
				Clear Cart
			</button>
		</aside>
	)
}

