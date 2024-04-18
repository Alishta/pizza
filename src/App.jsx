import { Suspense, lazy } from 'react';
import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import Header from './components/Header/Header';

const Menu = lazy(() => import('./pages/Menu'));
const Auth = lazy(() => import('./pages/Auth'));
const Home = lazy(() => import('./pages/Home'));
const NewOrder = lazy(() => import('./pages/NewOrder'));
const Fetch = lazy(() => import('./pages/Fetch'));
const NotFound = lazy(() => import('./pages/NotFound'));

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
            <Suspense fallback={<h1>Loading...</h1>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/order/new" element={<NewOrder />} />
                    <Route path="/fetch" element={<Fetch />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
