import { Link } from 'react-router-dom'

export default function RegisterForm() {
	const handleSubmit = (event) => {
		event.preventDefault()
	}

	return (
		<form className='card auth-form' onSubmit={handleSubmit}>
			<h1>Register</h1>
			<p>Create an account to save your cart and checkout faster.</p>

			<label htmlFor='register-name'>Full Name</label>
			<input id='register-name' type='text' placeholder='Your Name' required />

			<label htmlFor='register-email'>Email Address</label>
			<input id='register-email' type='email' placeholder='Your Email' required />

			<label htmlFor='register-password'>Password</label>
			<input id='register-password' type='password' placeholder='Create a password' required />

			<button type='submit' className='btn btn-primary'>
				Create Account
			</button>

			<div className='auth-links'>
				<Link to='/login'>Already have an account? Login</Link>
			</div>
		</form>
	)
}

