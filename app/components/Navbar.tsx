import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router";
import { usePuterStore } from "~/lib/puter";

const Navbar: React.FC = () => {
    const { auth, isLoading } = usePuterStore();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = async () => {
        setDropdownOpen(false);
        await auth.signOut();
    };

    return (
        <nav className="navbar">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">RESUMIND</p>
            </Link>
            
            <div className="flex items-center gap-4">
                {auth.isAuthenticated ? (
                    <>
                        {/* Upload Resume Button */}
                        <Link to="/upload" className="primary-button w-fit max-sm:hidden">
                            Upload Resume
                        </Link>
                        
                        {/* User Dropdown */}
                        <div className="relative" ref={dropdownRef}>
                            <button 
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
                            >
                                {/* User Avatar/Icon */}
                                <div className="w-6 h-6 bg-gradient-to-r from-[#AB8C95] to-[#8E97C5] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                                    {auth.user?.username?.charAt(0).toUpperCase() || 'U'}
                                </div>
                                <span className="text-sm max-sm:hidden">{auth.user?.username}</span>
                                
                                {/* Dropdown Arrow */}
                                <svg 
                                    className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                    <div className="py-2">
                                        {/* User Info */}
                                        <div className="px-4 py-2 border-b border-gray-100">
                                            <p className="text-sm font-medium text-gray-900">
                                                {auth.user?.username}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                Signed in
                                            </p>
                                        </div>
                                        
                                        {/* Mobile Upload Button */}
                                        <Link 
                                            to="/upload" 
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 sm:hidden"
                                            onClick={() => setDropdownOpen(false)}
                                        >
                                            <div className="flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                </svg>
                                                Upload Resume
                                            </div>
                                        </Link>
                                        
                                        {/* Logout Button */}
                                        <button 
                                            onClick={handleLogout}
                                            disabled={isLoading}
                                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50 flex items-center gap-2"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round" 
                                                    strokeWidth={2} 
                                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
                                                />
                                            </svg>
                                            {isLoading ? 'Signing out...' : 'Logout'}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    /* Show login button if not authenticated */
                    <Link 
                        to="/auth" 
                        className="primary-button w-fit"
                    >
                        Login
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;