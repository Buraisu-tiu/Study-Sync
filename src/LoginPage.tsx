import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const loginData = { username, password };

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        alert('Login successful');
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error connecting to the server');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#121212] text-[#e0e0e0]">
      <div className="p-4 text-center text-lg font-bold border-b border-[#1f1f1f]">
        Welcome to Study Sync
      </div>
      <div className="flex flex-col items-center justify-center flex-grow px-4">
        <div className="bg-[#1f1f1f] p-8 rounded-xl shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-8 text-[#f2af29]">Login</h1>
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
          </div>
          <div className="mt-8 space-y-4">
            <button
              className="w-full py-3 bg-[#f2af29] text-[#121212] font-semibold rounded-full hover:bg-[#e3a020] transition-colors"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;