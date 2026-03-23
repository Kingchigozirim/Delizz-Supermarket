export default function CartItem({ item, onRemove, onQuantityChange }) {
	const itemTotal = item.price * item.quantity

	return (
		<article className='card cart-item'>
			<img className='cart-item-image' src={item.image} alt={item.name} />
			<div className='cart-item-content'>
				<h3>{item.name}</h3>
				<p>${item.price.toFixed(2)} each</p>
			</div>
			<div className='cart-item-controls'>
				<label htmlFor={`qty-${item.id}`}>Qty</label>
				<input
					id={`qty-${item.id}`}
					type='number'
					min='1'
					value={item.quantity}
					onChange={(event) => onQuantityChange(item.id, Number(event.target.value))}
				/>
			</div>
			<div className='cart-item-total'>${itemTotal.toFixed(2)}</div>
			<button className='btn btn-danger' onClick={() => onRemove(item.id)}>
				Remove
			</button>
		</article>
	)
}

