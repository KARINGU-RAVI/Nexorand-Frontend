import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Authentication state
  const navigate = useNavigate();

  // Function to handle login
  const login = async (credentials) => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (data.success) {
        setUser(data.user); // Set the user state after login
        return data;
      } else {
        return { error: data.message || 'Login failed' };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { error: 'Failed to log in' };
    }
  };

  // Function to handle registration
  const register = async (credentials) => {
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (data.success) {
        return data;
      } else {
        return { error: data.message || 'Registration failed' };
      }
    } catch (error) {
      console.error('Registration error:', error);
      return { error: 'Failed to register' };
    }
  };

  // Function to handle logout
  const logout = () => {
    setUser(null);
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <AuthContext.Provider value={({ user, login, register, logout })}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
