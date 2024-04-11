import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './pages/Menu';
import { Route, Routes, NavLink } from 'react-router-dom';
import Auth from './pages/Auth';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import NewOrder from './pages/NewOrder';
import Fetch from './pages/Fetch';

function App() {
    return (
        <div className="wrapper">
            <Header text="Pizza Day"></Header>
            <nav className="nav">
                <NavLink to="/" className="nav_link">
                    Home
                </NavLink>
                <NavLink to="/auth" className="nav_link">
                    Login
                </NavLink>
                <NavLink to="/menu" className="nav_link">
                    Menu
                </NavLink>
                <NavLink to="/order/new" className="nav_link">
                    New Order
                </NavLink>
                <NavLink to="/fetch" className="nav_link">
                    Fetch
                </NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/order/new" element={<NewOrder />} />
                <Route path="/fetch" element={<Fetch />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
