import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    const accountData = { username, password };
  
    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(accountData),
      });
  
      if (response.ok) {
        alert('Account registered successfully');
        navigate('/');
      } else {
        alert('Error registering account');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error connecting to the server');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#121212] text-[#e0e0e0]">
      <div className="p-4 text-center text-lg font-bold border-b border-[#1f1f1f]">
        Create Your Account
      </div>
      <div className="flex flex-col items-center justify-center flex-grow px-4">
        <div className="bg-[#1f1f1f] p-8 rounded-xl shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-8 text-[#f2af29]">Register</h1>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#a1a1a1] mb-2">
                Username
              </label>
              <input
                className="w-full px-4 py-3 bg-[#2c2c2e] text-[#e0e0e0] rounded-lg border border-[#3a3a3c] focus:outline-none focus:ring-2 focus:ring-[#f2af29]"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#a1a1a1] mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-[#2c2c2e] text-[#e0e0e0] rounded-lg border border-[#3a3a3c] focus:outline-none focus:ring-2 focus:ring-[#f2af29]"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#a1a1a1] mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-[#2c2c2e] text-[#e0e0e0] rounded-lg border border-[#3a3a3c] focus:outline-none focus:ring-2 focus:ring-[#f2af29]"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-8 space-y-4">
            <button
              className="w-full py-3 bg-[#f2af29] text-[#121212] font-semibold rounded-full hover:bg-[#e3a020] transition-colors"
              onClick={handleRegister}
            >
              Register
            </button>
            <button
              className="w-full py-3 bg-[#2c2c2e] text-[#e0e0e0] font-semibold rounded-full hover:bg-[#3a3a3c] transition-colors"
              onClick={() => navigate('/')}
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
      <div className="p-4 text-center text-sm text-[#a1a1a1] border-t border-[#1f1f1f]">
        © 2025 Study Sync. All rights reserved.
      </div>
    </div>
  );
};

export default RegisterPage;