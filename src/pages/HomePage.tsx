import React from 'react';
import { Link } from 'react-router-dom';
import { Users, UserPlus, UserSearch } from 'lucide-react';
import Button from '../components/Button';

const HomePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          <span className="text-blue-600">Team</span>Sync
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A powerful platform for managing student team members with ease. Create, organize, 
          and collaborate with your team seamlessly.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500 transition-transform duration-300 hover:-translate-y-1">
          <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <UserPlus className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Add Members</h2>
          <p className="text-gray-600 mb-4">
            Easily add new team members with detailed information and profile images.
          </p>
          <Link to="/add-member">
            <Button variant="primary" size="sm">
              Add a Member
            </Button>
          </Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-teal-500 transition-transform duration-300 hover:-translate-y-1">
          <div className="bg-teal-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <UserSearch className="h-6 w-6 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">View Members</h2>
          <p className="text-gray-600 mb-4">
            Browse through all team members and access their detailed profiles.
          </p>
          <Link to="/members">
            <Button variant="secondary" size="sm">
              View Members
            </Button>
          </Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500 transition-transform duration-300 hover:-translate-y-1">
          <div className="bg-orange-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Users className="h-6 w-6 text-orange-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Manage Team</h2>
          <p className="text-gray-600 mb-4">
            Update information, assign roles, and organize your team effectively.
          </p>
          <Link to="/members">
            <Button variant="outline" size="sm">
              Manage Team
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Get Started Today</h2>
        <p className="mb-6">
          TeamSync provides all the tools you need to effectively manage your student team members.
          Start adding members and organizing your team in minutes.
        </p>
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <Link to="/add-member">
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 font-medium"
            >
              Add Member
            </Button>
          </Link>
          <Link to="/members">
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 font-medium"
            >
              View Members
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;