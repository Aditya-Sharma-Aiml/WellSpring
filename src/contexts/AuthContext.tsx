import React, { createContext, useContext, useState, ReactNode } from "react";

interface User {
  id: string;
  role: "student" | "counsellor";
  email?: string;
  name?: string;
  anonymousId?: string;
  [key: string]: any; // for extra fields like age, degree, experience
}

interface AuthContextType {
  user: User | null;
  login: (
    email: string,
    password: string,
    role: "student" | "counsellor"
  ) => Promise<void>;
  register: (
    email: string,
    password: string,
    name: string,
    role: "student" | "counsellor",
    extraData?: Record<string, any>
  ) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const generateAnonymousId = () =>
    `anonymous_${Math.random().toString(36).substr(2, 9)}`;

  const login = async (
    email: string,
    password: string,
    role: "student" | "counsellor"
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const userData: User = {
      id: Math.random().toString(36).substr(2, 9),
      role,
      email,
      name: email.split("@")[0],
      ...(role === "student" && { anonymousId: generateAnonymousId() }),
    };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const register = async (
    email: string,
    password: string,
    name: string,
    role: "student" | "counsellor",
    extraData?: Record<string, any>
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const userData: User = {
      id: Math.random().toString(36).substr(2, 9),
      role,
      email,
      name,
      ...(role === "student" && { anonymousId: generateAnonymousId() }),
      ...extraData,
    };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  React.useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
};
