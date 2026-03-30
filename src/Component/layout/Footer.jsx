import { Link } from 'react-router-dom'

export default function Footer() {
	return (
		<footer className='layout-footer'>
			<div className='footer-grid'>
				<div>
					<strong>About us</strong>
					<p>
						Delizz Supermarket Limited was inspired by the successful Cash and Carry operations in the UK, South Africa, and USA. We bring that convenience to Nigeria.
					</p>
					<div className='social-icons'>
						<a href='' target='_blank' rel='noreferrer'>Facebook</a>
						<a href='' target='_blank' rel='noreferrer'>Instagram</a>
						<a href=''>Email</a>
					</div>
				</div>

				<div>
					<strong>Help & Info</strong>
					<div className='footer-links'>
						<Link to='/about'>About</Link>
						<a href='#'>Our Stores</a>
						<a href='#'>FAQ</a>
						<a href='#'>Contact</a>
					</div>
				</div>

				<div>
					<strong>Coorperate</strong>
					<div className='footer-links'>
						<a href='#'>Track your order</a>
						<a href='#'>Privacy Policy</a>
						<a href='#'>Term and Condition</a>
					</div>
				</div>

				<div>
					<strong>Signup for Newsletter</strong>
					<p>Subscribe to our newsletter and never miss out on our great deals.</p>
					<form className='footer-newsletter-form'>
						<input type='email' placeholder='Your Email' aria-label='Email for newsletter' />
						<button type='submit'>Sign Up</button>
					</form>
				</div>
			</div>

			<div className='footer-bottom-row'>
				
			<p className='footer-bottom'>© {new Date().getFullYear()} Delizz Grocery. All rights reserved.</p>
		</div>
		</footer>
	)
}


