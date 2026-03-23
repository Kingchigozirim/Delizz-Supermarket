import { Link } from 'react-router-dom'

export default function LoginForm() {
	const handleSubmit = (event) => {
		event.preventDefault()
	}

	return (
		<form className='card auth-form' onSubmit={handleSubmit}>
			<h1>Login</h1>
			<p>Welcome back. Sign in to continue shopping.</p>

			<label htmlFor='login-email'>Email Address</label>
			<input id='login-email' type='email' placeholder='Enter your Email' required />

			<label htmlFor='login-password'>Password</label>
			<input id='login-password' type='password' placeholder='Enter your password' required />

			<button type='submit' className='btn btn-primary'>
				Login
			</button>

			<div className='auth-links'>
				<Link to='/forgot-password'>Forgot password?</Link>
				<Link to='/register'>Create account</Link>
			</div>
		</form>
	)
}

