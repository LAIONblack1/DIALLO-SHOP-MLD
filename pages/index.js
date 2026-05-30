import Link from "next/link";

export default function Home() {
  return (
    <div style={styles.container}>
      <h1>🔥 Shopify Africa</h1>

      <p>Marketplace mondiale moderne</p>

      <Link href="/shop">
        <button style={styles.btn}>
          Entrer dans la boutique 🛍
        </button>
      </Link>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial",
  },

  btn: {
    padding: 14,
    border: "none",
    background: "black",
    color: "white",
    borderRadius: 8,
    cursor: "pointer",
  },
};
