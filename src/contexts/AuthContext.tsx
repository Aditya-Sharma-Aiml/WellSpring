import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  role: 'student' | 'counsellor';
  email?: string;
  name?: string;
  anonymousId?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: 'student' | 'counsellor') => Promise<void>;
  register: (email: string, password: string, name: string, role: 'student' | 'counsellor') => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const generateAnonymousId = () => {
    return `anonymous_${Math.random().toString(36).substr(2, 9)}`;
  };

  const login = async (email: string, password: string, role: 'student' | 'counsellor') => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const userData: User = {
      id: Math.random().toString(36).substr(2, 9),
      role,
      email,
      name: email.split('@')[0],
      ...(role === 'student' && { anonymousId: generateAnonymousId() })
    };
    
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const register = async (email: string, password: string, name: string, role: 'student' | 'counsellor') => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const userData: User = {
      id: Math.random().toString(36).substr(2, 9),
      role,
      email,
      name,
      ...(role === 'student' && { anonymousId: generateAnonymousId() })
    };
    
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  React.useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const value = {
    user,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};