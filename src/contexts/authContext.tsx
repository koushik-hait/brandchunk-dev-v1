"use client";

import Loader from "@/components/loaders/Loader";
import { LocalStorage } from "@/lib/utils";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

// Create a context to manage authentication-related data and functions
const AuthContext = createContext<{
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}>({
  user: null,
  login: () => {},
  logout: () => {},
});

// Create a hook to access the AuthContext
const useAuth = () => useContext(AuthContext);

// Create a component that provides authentication-related data and functions
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  // Function to handle user login
  const login = (user: User) => {
    setUser(user);
    LocalStorage.set("user", user);
    
  };

  // Function to handle user logout
  const logout = () => {
    setUser(null);
    LocalStorage.clear(); // Clear local storage on logout
    router.push("/"); // Redirect to the login page after successful logout
  };

  // Check for saved user and token in local storage during component initialization
  useEffect(() => {
    setIsLoading(true);
    const _user = LocalStorage.get("user");
    if (_user?.id) {
      setUser(_user);
    }
    setIsLoading(false);
  }, []);

  // Provide authentication-related data and functions through the context
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {isLoading ? <Loader /> : children} {/* Display a loader while loading */}
    </AuthContext.Provider>
  );
};

// Export the context, provider component, and custom hook
export { AuthContext, AuthProvider, useAuth };
