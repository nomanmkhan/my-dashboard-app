import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ResetPassword from './pages/ResetPassword';
import PrivateRoute from './components/PrivateRoute';
import { useAuth } from './hooks/useAuth';
import { AppProvider } from './context/AppContext'; // Import the AppProvider
import Loading from './components/Loading';
import './App.css';

const App = () => {
    const { user, loading } = useAuth();
    if (loading) {
        return <Loading />;
    }

    return (
        <AppProvider>
            <Router>
                <Routes>
                    <Route path='/' element={<Navigate to={'/login'} />} />
                    <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
                    <Route path="/register" element={user ? <Navigate to="/dashboard" /> : <Register />} />
                    <Route path="/reset-password" element={user ? <Navigate to="/dashboard" /> : <ResetPassword />} />
                    <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                    <Route path='*' element={<Navigate to={'/login'} />} />
                </Routes>
            </Router>
        </AppProvider>
    );
};

export default App;
