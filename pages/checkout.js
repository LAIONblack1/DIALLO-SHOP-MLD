export default function Checkout() {
  const payNow = async () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const response = await fetch(
      "/api/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cart }),
      }
    );

    const data = await response.json();

    window.location.href = data.url;
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>💳 Paiement</h1>

      <button onClick={payNow} style={styles.btn}>
        Payer maintenant 💳
      </button>
    </div>
  );
}

const styles = {
  btn: {
    background: "black",
    color: "white",
    border: "none",
    padding: 14,
    borderRadius: 8,
    cursor: "pointer",
  },
};
