import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import './Layout.css'

export default function Layout() {
  return (
    <div className='app-layout'>
      <Navbar />
      <main className='layout-main'>
        <Outlet />
      </main>
      <Footer />
      <div className='support-chat-floating' aria-label='Live support chat'>
        <button type='button' className='chat-button' aria-label='Open live support chat'>
          <span aria-hidden='true'>💬</span>
        </button>
        <span className='chat-tooltip'>Live Support</span>
      </div>
    </div>
  )
}
