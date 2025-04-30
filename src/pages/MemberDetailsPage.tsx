import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Mail,
  Phone,
  Calendar,
  Briefcase,
  Trash2,
  Edit,
  User as UserIcon
} from 'lucide-react';
import Button from '../components/Button';
import { getMemberById, deleteMember } from '../services/memberService';
import { Member } from '../types/Member';

const MemberDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [member, setMember] = useState<Member | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  
  useEffect(() => {
    const fetchMember = async () => {
      if (!id) return;
      
      try {
        const data = await getMemberById(id);
        setMember(data);
      } catch (err) {
        setError('Failed to load member details. Please try again later.');
        console.error('Error fetching member:', err);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchMember();
  }, [id]);

  const handleDelete = async () => {
    if (!id) return;
    
    try {
      await deleteMember(id);
      navigate('/members', { state: { message: 'Member deleted successfully' } });
    } catch (err) {
      setError('Failed to delete member. Please try again.');
      console.error('Error deleting member:', err);
    }
  };
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  
  if (error || !member) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-red-100 p-4 rounded-md text-red-700 mb-4">
          {error || 'Member not found'}
        </div>
        <Button 
          variant="outline" 
          onClick={() => navigate('/members')}
          icon={<ArrowLeft className="h-4 w-4" />}
        >
          Back to Members
        </Button>
      </div>
    );
  }

  // Format join date if exists
  const formattedJoinDate = member.joinDate 
    ? new Date(member.joinDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : 'Not specified';

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => navigate('/members')}
          icon={<ArrowLeft className="h-4 w-4" />}
          className="mb-4"
        >
          Back to Members
        </Button>
        
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-teal-400 p-6 text-white">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-white mb-6 border-4 border-white shadow-lg">
                {member.image ? (
                  <img 
                    src={`/uploads/${member.image.split('/').pop()}`}
                    alt={`${member.name}'s profile`}
                    className="w-full h-full object-cover" 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <UserIcon className="h-24 w-24 text-gray-400" />
                  </div>
                )}
              </div>
              
              <h1 className="text-2xl font-bold text-center mb-1">{member.name}</h1>
              <p className="text-blue-100 text-center mb-6">{member.role}</p>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-blue-100" />
                  <span>{member.email}</span>
                </div>
                
                {member.phone && (
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-blue-100" />
                    <span>{member.phone}</span>
                  </div>
                )}
                
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-3 text-blue-100" />
                  <span>Joined {formattedJoinDate}</span>
                </div>
                
                {member.specialization && (
                  <div className="flex items-center">
                    <Briefcase className="h-5 w-5 mr-3 text-blue-100" />
                    <span>{member.specialization}</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="md:w-2/3 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Profile Information</h2>
                
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    icon={<Edit className="h-4 w-4" />}
                    onClick={() => navigate(`/edit-member/${member._id}`)}
                  >
                    Edit
                  </Button>
                  
                  <Button 
                    variant="danger" 
                    size="sm"
                    icon={<Trash2 className="h-4 w-4" />}
                    onClick={() => setShowDeleteConfirm(true)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Bio</h3>
                <p className="text-gray-600">
                  {member.bio || 'No bio provided.'}
                </p>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Team Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-sm text-gray-500">Role</p>
                    <p className="font-medium">{member.role}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-sm text-gray-500">Join Date</p>
                    <p className="font-medium">{formattedJoinDate}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{member.email}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-sm text-gray-500">Specialization</p>
                    <p className="font-medium">{member.specialization || 'Not specified'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <Trash2 className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Delete Member
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to delete {member.name}? This action cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <Button 
                  variant="danger" 
                  className="w-full sm:w-auto sm:ml-3"
                  onClick={handleDelete}
                >
                  Delete
                </Button>
                <Button 
                  variant="outline" 
                  className="mt-3 w-full sm:mt-0 sm:w-auto"
                  onClick={() => setShowDeleteConfirm(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberDetailsPage;