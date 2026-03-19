import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '../Component/layout/Layout'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import About from '../pages/About'
import Terms from '../pages/Terms'
import Login from '../pages/Login'
import Register from '../pages/Register'
import NotFound from '../pages/NotFound'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='cart' element={<Cart />} />
        <Route path='about' element={<About />} />
        <Route path='terms' element={<Terms />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
      <Route path='/404' element={<NotFound />} />
      <Route path='*' element={<Navigate replace to='/404' />} />
    </Routes>
  )
}
