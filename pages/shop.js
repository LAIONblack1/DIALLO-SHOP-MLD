import { useEffect, useState } from "react";
import Link from "next/link";

const PRODUCTS = [
  {
    id: 1,
    name: "iPhone Pro Max",
    price: 1000,
  },
  {
    id: 2,
    name: "Sneakers Viral",
    price: 250,
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 180,
  },
];

export default function Shop() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("cart");

    if (saved) {
      setCart(JSON.parse(saved));
    }
  }, []);

  const addToCart = (product) => {
    const updated = [...cart, product];

    setCart(updated);

    localStorage.setItem("cart", JSON.stringify(updated));
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>🛍 Boutique</h1>

      <p>🛒 Panier: {cart.length}</p>

      <div style={styles.grid}>
        {PRODUCTS.map((product) => (
          <div key={product.id} style={styles.card}>
            <h3>{product.name}</h3>

            <p>${product.price}</p>

            <button
              style={styles.btn}
              onClick={() => addToCart(product)}
            >
              Ajouter 🛒
            </button>
          </div>
        ))}
      </div>

      <Link href="/checkout">
        <button style={styles.checkout}>
          Checkout 💳
        </button>
      </Link>
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: 20,
  },

  card: {
    border: "1px solid #ddd",
    padding: 20,
    borderRadius: 10,
  },

  btn: {
    background: "black",
    color: "white",
    border: "none",
    padding: 10,
    borderRadius: 6,
    cursor: "pointer",
  },

  checkout: {
    marginTop: 20,
    background: "green",
    color: "white",
    border: "none",
    padding: 14,
    borderRadius: 8,
    cursor: "pointer",
  },
};
