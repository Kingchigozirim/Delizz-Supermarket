import { Link } from 'react-router-dom'

export default function ForgotPassword() {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <form className='card auth-form' onSubmit={handleSubmit}>
      <h1>Forgot Password</h1>
      <p>Enter your email and we’ll send a password reset link.</p>

      <label htmlFor='forgot-email'>Email Address</label>
      <input id='forgot-email' type='email' placeholder='Your Email' required />

      <button type='submit' className='btn btn-primary'>
        Send Reset Link
      </button>

      <div className='auth-links'>
        <Link to='/login'>Back to login</Link>
      </div>
    </form>
  )
}
