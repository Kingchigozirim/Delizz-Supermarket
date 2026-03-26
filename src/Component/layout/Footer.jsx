import { Link } from 'react-router-dom'

export default function Footer() {
	return (
		<footer className='layout-footer'>
			<div className='footer-grid'>
				<div>
					<h3>Delizz Supermarket</h3>
					<p>
						Delizz brings fresh groceries, daily essentials, and lifestyle picks to your doorstep.
					</p>
				</div>

				<div>
					<h4>Quick Navigation</h4>
					<div className='footer-links'>
						<Link to='/'>Home</Link>
						<Link to='/shop'>Shop</Link>
						<Link to='/cart'>Cart</Link>
						<Link to='/login'>Login</Link>
						<Link to='/register'>Register</Link>
						<Link to='/about'>About</Link>
						<Link to='/terms'>Terms</Link>
					</div>
				</div>

				<div>
					<h4>Follow Us</h4>
					<div className='footer-links'>
						<a href='https://instagram.com' target='_blank' rel='noreferrer'>
							Instagram
						</a>
						<a href='https://facebook.com' target='_blank' rel='noreferrer'>
							Facebook
						</a>
						<a href='https://twitter.com' target='_blank' rel='noreferrer'>
							Twitter
						</a>
					</div>
				</div>
			</div>

			<p className='footer-bottom'>© {new Date().getFullYear()} Delizz Grocery. All rights reserved.</p>
		</footer>
	)
}

