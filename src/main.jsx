import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './contexts/AuthContext.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <AuthContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AuthContextProvider>
    </Provider>
);
