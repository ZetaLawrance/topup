import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Logic login di sini
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Login
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;