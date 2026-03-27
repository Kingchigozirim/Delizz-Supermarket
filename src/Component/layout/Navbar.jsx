import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../../context/CartContext'
<<<<<<< HEAD

const categories = [
	{ label: 'Cosmetics', value: 'cosmetics' },
	{ label: 'Toiletries', value: 'toiletries' },
	{ label: 'Wine and Bar', value: 'wine-and-bar' },
	{ label: 'Frozen Food', value: 'frozen-food' },
	{ label: 'Fruits', value: 'fruits' },
	{ label: 'Pastries', value: 'pastries' },
	{ label: 'Deodorants', value: 'deodorants' },
	{ label: 'Teddies', value: 'teddies' },
]
=======
import categories from '../../data/categories'
import products from '../../data/products'

const featuredProduct = products[0]
>>>>>>> a25fcbd6caddc34921f16fb43c9ce871bd7a1f43

export default function Navbar() {
	const navigate = useNavigate()
	const { totals } = useCart()
	const [searchText, setSearchText] = useState('')

	const handleSearch = (event) => {
		event.preventDefault()
		const term = searchText.trim()

		if (!term) {
			navigate('/shop')
			return
		}

		navigate(`/shop?search=${encodeURIComponent(term)}`)
	}

	const handleCategoryChange = (event) => {
		const selectedCategory = event.target.value
		if (selectedCategory) {
			navigate(`/category/${selectedCategory}`)
		}
	}

	return (
		<header className='layout-header'>
			<div className='navbar-top'>
				<Link className='logo' to='/' aria-label='Delizz homepage'>
					<span className='logo-mark'>🛒</span>
					<span>Delizz</span>
				</Link>

				<form className='search-form' onSubmit={handleSearch}>
					<input
						type='search'
						placeholder='Search products...'
						value={searchText}
						onChange={(event) => setSearchText(event.target.value)}
						aria-label='Search products'
					/>
					<button type='submit' className='btn btn-primary'>
						Search
					</button>
				</form>

				<div className='navbar-quick'>
					<NavLink to='/cart' className={({ isActive }) => (isActive ? 'active' : '')}>
						Cart ({totals.itemCount})
					</NavLink>
				</div>
			</div>

			<div className='navbar-bottom'>
				<nav className='layout-nav'>
					<NavLink to='/' end className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
					<NavLink to='/shop' className={({ isActive }) => (isActive ? 'active' : '')}>Shop</NavLink>
<<<<<<< HEAD
					<NavLink to='/product/apple-fuji' className={({ isActive }) => (isActive ? 'active' : '')}>
=======
					<NavLink to={`/product/${featuredProduct?.id ?? ''}`} className={({ isActive }) => (isActive ? 'active' : '')}>
>>>>>>> a25fcbd6caddc34921f16fb43c9ce871bd7a1f43
						Product
					</NavLink>
					<NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
					<NavLink to='/terms' className={({ isActive }) => (isActive ? 'active' : '')}>Terms</NavLink>
					<NavLink to='/login' className={({ isActive }) => (isActive ? 'active' : '')}>Login</NavLink>
					<NavLink to='/register' className={({ isActive }) => (isActive ? 'active' : '')}>Register</NavLink>
				</nav>

				<div className='category-picker'>
					<label htmlFor='category-select'>Categories</label>
					<select id='category-select' defaultValue='' onChange={handleCategoryChange}>
						<option value='' disabled>
							Select category
						</option>
						{categories.map((category) => (
<<<<<<< HEAD
							<option key={category.value} value={category.value}>
								{category.label}
=======
							<option key={category.id} value={category.id}>
								{category.name}
>>>>>>> a25fcbd6caddc34921f16fb43c9ce871bd7a1f43
							</option>
						))}
					</select>
				</div>
			</div>
		</header>
	)
}

