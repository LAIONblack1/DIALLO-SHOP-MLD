import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Mock API call
    if (email === "admin@shop.com" && password === "admin123") {
      const userData = { id: 1, name: "Admin", email, role: "admin" };
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("token", "fake-jwt-token");
      setUser(userData);
      router.push("/dashboard");
      return true;
    } else if (email === "user@shop.com" && password === "user123") {
      const userData = { id: 2, name: "John Doe", email, role: "user" };
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("token", "fake-jwt-token");
      setUser(userData);
      router.push("/dashboard");
      return true;
    }
    return false;
  };

  const register = async (name, email, password) => {
    const userData = { id: Date.now(), name, email, role: "user" };
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", "fake-jwt-token");
    setUser(userData);
    router.push("/dashboard");
    return true;
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
