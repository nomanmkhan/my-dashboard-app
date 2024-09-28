import React, { useState } from 'react';
import { auth } from '../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email);
            setMessage('Password reset email sent!');
            setTimeout(() => navigate('/login'), 2000); // Redirect after 2 seconds
        } catch (error) {
            console.error(error);
            setMessage('Failed to send reset email.');
        }
    };

    return (
        <div className='wrapper'>
            <div className="auth-container">
                <h2>Reset Password</h2>
                <form onSubmit={handleResetPassword}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit">Send Reset Email</button>
                </form>
                {message && <p>{message}</p>}
                <p>
                    Remembered your password? <a href="/login">Login</a>
                </p>
            </div>
        </div>
    );
};

export default ResetPassword;
