// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isLoggedIn = false;
  const username = 'Richmond';

  const navLinkStyle = (path) =>
    `block px-4 py-2 rounded-md font-medium transition duration-200 ${
      location.pathname === path
        ? 'bg-primary text-white'
        : 'text-textSecondary hover:text-primary hover:bg-secondary/20'
    }`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <h1 className="text-2xl font-bold text-primary tracking-tight">
            Crypto Tracker
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link to="/" className={navLinkStyle('/')}>
              Dashboard
            </Link>
            <Link to="/login" className={navLinkStyle('/login')}>
              Login
            </Link>

            {isLoggedIn && (
              <>
                <span className="text-textSecondary">Hello, {username}</span>
                <button className="bg-accent/10 hover:bg-accent text-accent px-3 py-1 rounded-md text-sm font-medium">
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none text-textSecondary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <Link to="/" className={navLinkStyle('/')} onClick={() => setIsOpen(false)}>
              Dashboard
            </Link>
            <Link to="/login" className={navLinkStyle('/login')} onClick={() => setIsOpen(false)}>
              Login
            </Link>

            {isLoggedIn && (
              <div className="flex flex-col space-y-2 px-4">
                <span className="text-textSecondary">Hello, {username}</span>
                <button className="bg-accent/10 hover:bg-accent text-accent px-3 py-1 rounded-md text-sm font-medium">
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
