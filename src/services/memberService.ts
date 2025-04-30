import axios from 'axios';
import { Member } from '../types/Member';

// Get all members
export const getMembers = async (): Promise<Member[]> => {
  try {
    const response = await axios.get('/api/members');
    return response.data;
  } catch (error) {
    console.error('Error fetching members:', error);
    throw error;
  }
};

// Get a single member by ID
export const getMemberById = async (id: string): Promise<Member> => {
  try {
    const response = await axios.get(`/api/members/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching member with ID ${id}:`, error);
    throw error;
  }
};

// Add a new member
export const addMember = async (memberData: FormData): Promise<Member> => {
  try {
    const response = await axios.post('/api/members', memberData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding member:', error);
    throw error;
  }
};

// Update a member
export const updateMember = async (id: string, memberData: FormData): Promise<Member> => {
  try {
    const response = await axios.put(`/api/members/${id}`, memberData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error updating member with ID ${id}:`, error);
    throw error;
  }
};

// Delete a member
export const deleteMember = async (id: string): Promise<void> => {
  try {
    await axios.delete(`/api/members/${id}`);
  } catch (error) {
    console.error(`Error deleting member with ID ${id}:`, error);
    throw error;
  }
};