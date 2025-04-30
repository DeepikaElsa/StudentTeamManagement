import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, User } from 'lucide-react';
import Button from './Button';
import { Member } from '../types/Member';

interface MemberCardProps {
  member: Member;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden bg-gray-200">
        {member.image ? (
          <img 
            src={`/uploads/${member.image.split('/').pop()}`}
            alt={`${member.name}'s profile`}
            className="w-full h-full object-cover" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <User className="h-24 w-24 text-gray-400" />
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
        <p className="text-blue-600 font-medium mb-2">{member.role}</p>
        
        <div className="flex items-center text-gray-600 mb-4">
          <Mail className="h-4 w-4 mr-2" />
          <span className="text-sm truncate">{member.email}</span>
        </div>
        
        <Link to={`/members/${member._id}`}>
          <Button variant="outline" fullWidth>
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MemberCard;