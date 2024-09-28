import React from 'react';
import { useAuth } from '../hooks/useAuth'; // Import your auth context
import { auth } from '../firebase'; // Import your firebase auth
import { signOut } from 'firebase/auth'; // Import signOut function
import "./Navbar.css"

const Navbar = () => {
    const { user } = useAuth(); // Access the user from auth context

    const handleLogout = async () => {
        try {
            await signOut(auth); // Sign out the user
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <h1>Your Logo</h1>
            </div>
            <div className="navbar-actions">
                {user ? (
                    <button className="logout-button" onClick={handleLogout}>
                        Logout
                    </button>
                ) : (
                    <a href="/login">Login</a>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
