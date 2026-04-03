import { Link } from 'react-router-dom'

export default function Footer() {
	return (
		<footer className='layout-footer'>
			<div className='footer-grid'>
				<div>
					<strong>About Delizz</strong>
					<p>
						Delizz Grocery delivers fresh produce, pantry staples, and household essentials across the city.
						Shop today for trusted brands, great prices, and fast local delivery.
					</p>
					<div className='social-icons'>
						<a href='' target='_blank' rel='noreferrer'>Facebook</a>
						<a href='' target='_blank' rel='noreferrer'>Instagram</a>
						<a href='mailto:hello@delizz.com'>Email</a>
					</div>
				</div>

				<div>
					<strong>Customer care</strong>
					<div className='footer-links'>
						<Link to='/about'>About</Link>
						<a href='#'>Our Stores</a>
						<a href='#'>FAQ</a>
						<a href='#'>Contact</a>
					</div>
				</div>

				<div>
					<strong>Policies</strong>
					<div className='footer-links'>
						<a href='#'>Track Your Order</a>
						<a href='#'>Privacy Policy</a>
						<a href='#'>Terms & Conditions</a>
					</div>
				</div>

				<div>
					<strong>Newsletter</strong>
					<p>Get weekly savings, fresh deals, and new arrivals delivered to your inbox.</p>
					<form className='footer-newsletter-form'>
						<input type='email' placeholder='Your email address' aria-label='Email for newsletter' />
						<button type='submit'>Subscribe</button>
					</form>
				</div>
			</div>

			<div className='footer-bottom-row'>
				<p className='footer-bottom'>© {new Date().getFullYear()} Delizz Grocery. All rights reserved.</p>
			</div>
		</footer>
	)
}


