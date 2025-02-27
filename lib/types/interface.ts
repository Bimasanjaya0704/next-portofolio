// src/lib/types/interface.ts

export interface User {
  id: number;
  username: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile {
  id: number;
  username: string;
  createdAt: string;
}

export interface UserUpdate {
  username?: string;
  oldPassword?: string;
  newPassword?: string;
}

export interface Blog {
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  status?: string;
}

export interface Portfolio {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  liveUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
}
