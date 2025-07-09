// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <h1 className="text-xl font-bold">Crypto Tracker</h1>
      <div>
        <Link to="/" className="mr-4 text-blue-600">Dashboard</Link>
        <Link to="/login" className="text-blue-600">Login</Link>
      </div>
    </nav>
  );
}
