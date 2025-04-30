import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Users, HomeIcon } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const NavLink = ({ to, children }: { to: string, children: React.ReactNode }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
          isActive 
            ? 'bg-blue-700 text-white' 
            : 'text-gray-700 hover:bg-blue-500 hover:text-white'
        }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Users className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">TeamSync</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <NavLink to="/">
              <div className="flex items-center space-x-1">
                <HomeIcon className="h-4 w-4" />
                <span>Home</span>
              </div>
            </NavLink>
            <NavLink to="/add-member">Add Member</NavLink>
            <NavLink to="/members">View Members</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;