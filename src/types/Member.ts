export interface Member {
  _id: string;
  name: string;
  role: string;
  email: string;
  phone?: string;
  specialization?: string;
  joinDate?: string;
  bio?: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
}