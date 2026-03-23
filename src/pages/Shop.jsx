import ProductGrid from '../Component/product/ProductGrid'
import products from '../data/product'

export default function Shop() {
	return (
		<section className='page-wrap'>
			<div className='page-head'>
				<h1>Shop Fresh Groceries</h1>
				<p>Pick your essentials and add them straight to your cart.</p>
			</div>
			<ProductGrid products={products} />
		</section>
	)
}
