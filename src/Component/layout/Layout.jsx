import { NavLink, Outlet } from 'react-router-dom'
import './Layout.css'

export default function Layout() {
  return (
    <div className='app-layout'>
      <header className='layout-header'>
        <div className='logo'>Delizz</div>
        <nav className='layout-nav'>
          <NavLink to='/' end className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
          <NavLink to='/shop' className={({ isActive }) => (isActive ? 'active' : '')}>Shop</NavLink>
          <NavLink to='/cart' className={({ isActive }) => (isActive ? 'active' : '')}>Cart</NavLink>
          <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
          <NavLink to='/terms' className={({ isActive }) => (isActive ? 'active' : '')}>Terms</NavLink>
        </nav>
      </header>
      <main className='layout-main'><Outlet /></main>
      <footer className='layout-footer'> {new Date().getFullYear()} Delizz Grocery</footer>
    </div>
  )
}
