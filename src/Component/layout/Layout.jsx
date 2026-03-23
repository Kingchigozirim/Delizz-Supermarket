import { NavLink, Outlet } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import './Layout.css'

export default function Layout() {
  const { totals } = useCart()

  return (
    <div className='app-layout'>
      <header className='layout-header'>
        <div className='logo'>Delizz</div>
        <nav className='layout-nav'>
          <NavLink to='/' end className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
          <NavLink to='/shop' className={({ isActive }) => (isActive ? 'active' : '')}>Shop</NavLink>
          <NavLink to='/cart' className={({ isActive }) => (isActive ? 'active' : '')}>
            Cart ({totals.itemCount})
          </NavLink>
          <NavLink to='/login' className={({ isActive }) => (isActive ? 'active' : '')}>Login</NavLink>
          <NavLink to='/register' className={({ isActive }) => (isActive ? 'active' : '')}>Register</NavLink>
          <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
          <NavLink to='/terms' className={({ isActive }) => (isActive ? 'active' : '')}>Terms</NavLink>
        </nav>
      </header>
      <main className='layout-main'><Outlet /></main>
      <footer className='layout-footer'> {new Date().getFullYear()} Delizz Grocery</footer>
    </div>
  )
}
