import { createContext, useContext, useState, useEffect } from "react";
import { initialProducts } from "../data/products";

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("products");
    if (stored) {
      setProducts(JSON.parse(stored));
    } else {
      setProducts(initialProducts);
      localStorage.setItem("products", JSON.stringify(initialProducts));
    }
  }, []);

  const addProduct = (product) => {
    const newProduct = { ...product, id: Date.now() };
    const updated = [...products, newProduct];
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  const updateProduct = (id, updatedData) => {
    const updated = products.map((p) =>
      p.id === id ? { ...p, ...updatedData } : p
    );
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  const deleteProduct = (id) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, updateProduct, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};
