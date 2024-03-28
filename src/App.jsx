import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Menu from './pages/Menu'
import { Route, Routes, NavLink } from 'react-router-dom'
import Auth from './pages/Auth'
import NotFound from './pages/NotFound'
import Home from './pages/Home'

function App() {

  return (
    <div className='wrapper'>
      <Header text="Pizza Day"></Header>
      <nav className='nav'>
        <NavLink to='/' className='nav_link'>Home</NavLink>
        <NavLink to='/auth' className='nav_link'>Login</NavLink>
        <NavLink to='/menu' className='nav_link'>Menu</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
