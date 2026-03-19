import { Routes, Route, Navigate } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import Layout from './Component/layout/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import './App.css'

export default function App() {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  )
}
