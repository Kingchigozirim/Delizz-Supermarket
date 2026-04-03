import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import categories from '../../data/categories'

export default function Navbar() {
	const navigate = useNavigate()
	const { totals } = useCart()
	const [searchText, setSearchText] = useState('')

	const handleSearch = (event) => {
		event.preventDefault()
		const term = searchText.trim()

		navigate(term ? `/shop?search=${encodeURIComponent(term)}` : '/shop')
	}

	const handleCategoryChange = (event) => {
		const selectedCategory = event.target.value
		if (selectedCategory) {
			navigate(`/category/${selectedCategory}`)
		}
	}

	return (
		<header className='layout-header'>
			<div className='navbar-topbar'>
				<p>Fresh groceries, daily essentials, and fast delivery across town.</p>
				<div className='topbar-actions'>
					<Link to='/shop'>Shop now</Link>
					<Link to='/about'>About us</Link>
				</div>
			</div>

			<div className='navbar-main'>
				<Link className='logo' to='/' aria-label='Delizz homepage'>
					<span className='logo-mark'>🛒</span>
					<span>Delizz Grocery</span>
				</Link>

				<form className='search-form' onSubmit={handleSearch}>
					<input
						type='search'
						placeholder='Search groceries, fruits, snacks...'
						value={searchText}
						onChange={(event) => setSearchText(event.target.value)}
						aria-label='Search products'
					/>
					<button type='submit' className='btn btn-primary'>
						Search
					</button>
				</form>

				<div className='navbar-icons'>
					<Link to='/login' className='icon-link'>
						<span>Account</span>
					</Link>
					<Link to='/cart' className='icon-link cart-link' aria-label={`Cart with ${totals.itemCount} items`}>
						<span className='cart-icon' aria-hidden='true'>🛒</span>
						{totals.itemCount > 0 ? (
							<span className='cart-badge'>{totals.itemCount}</span>
						) : null}
					</Link>
				</div>
			</div>

			<div className='navbar-bottom'>
				<nav className='layout-nav'>
					<NavLink to='/' end className={({ isActive }) => (isActive ? 'active' : '')}>
						Home
					</NavLink>
					<NavLink to='/shop' className={({ isActive }) => (isActive ? 'active' : '')}>
						Shop
					</NavLink>
					
				</nav>

				<div className='category-picker'>
					<label htmlFor='category-select'>Shop by category</label>
					<select id='category-select' defaultValue='' onChange={handleCategoryChange}>
						<option value='' disabled>
							Select category
						</option>
						{categories.map((category) => (
							<option key={category.id} value={category.id}>
								{category.name}
							</option>
						))}
					</select>
				</div>
			</div>
		</header>
	)
}

