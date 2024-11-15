import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log('Email:', email, 'Password:', password);
    } else {
      alert("Passwords don't match");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#1c1c1c]">
      <div className="w-full max-w-lg p-8 bg-white rounded-tl-[1rem] rounded-tr-[5rem] rounded-br-[1rem] rounded-bl-[5rem] shadow-lg border border-gray-300">
        <h2 className="text-gray-800 text-4xl font-bold mb-8 text-center">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <div className="flex items-center border-b-2 border-gray-300 py-2 transition duration-200 focus-within:border-[#ff3131]">
              <AiOutlineMail className="text-gray-500 mr-3" />
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-gray-800 outline-none transition duration-150"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <div className="flex items-center border-b-2 border-gray-300 py-2 transition duration-200 focus-within:border-[#ff3131]">
              <AiOutlineLock className="text-gray-500 mr-3" />
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 text-gray-800 outline-none transition duration-150"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <div className="flex items-center border-b-2 border-gray-300 py-2 transition duration-200 focus-within:border-[#ff3131]">
              <AiOutlineLock className="text-gray-500 mr-3" />
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                className="w-full px-4 py-2 text-gray-800 outline-none transition duration-150"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-between mb-6">
            <button
              type="submit"
              className="w-full py-2 rounded-lg font-bold text-white bg-[#ff3131] transition-all duration-300 hover:bg-[#ff4d4d] focus:outline-none focus:ring-2 focus:ring-[#ff4d4d] focus:ring-opacity-50"
            >
              Register
            </button>
          </div>
          <p className="font-semibold text-sm text-gray-600 mt-4 text-center">
            Already have an account?{' '}
            <Link to="/topup/login" className="text-[#ff3131] font-bold hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
