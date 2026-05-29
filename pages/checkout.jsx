import Link from "next/link";

export default function Checkout() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "50px",
        }}
      >
        <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
          Diallo Shop MLD
        </h1>

        <Link href="/">
          <button
            style={{
              padding: "10px 18px",
              backgroundColor: "black",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Retour
          </button>
        </Link>
      </header>

      {/* Checkout Box */}
      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            fontSize: "30px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Checkout 🚀
        </h2>

        <p
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#555",
          }}
        >
          Finalisez votre commande facilement.
        </p>

        {/* Formulaire */}
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <input
            type="text"
            placeholder="Nom complet"
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Adresse email"
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Adresse de livraison"
            style={inputStyle}
          />

          <input
            type="tel"
            placeholder="Numéro de téléphone"
            style={inputStyle}
          />

          <button
            type="submit"
            style={{
              padding: "14px",
              backgroundColor: "black",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "16px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Confirmer la commande
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "14px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  fontSize: "16px",
  outline: "none",
};
