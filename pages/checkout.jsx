import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Checkout() {
  const router = useRouter();

  useEffect(() => {
    // Redirection vers l'accueil
    router.push("/");
  }, [router]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "24px",
        fontWeight: "bold",
      }}
    >
      Chargement...
    </div>
  );
}
    // Sauvegarde commande fictive
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    const newOrder = {
      id: Date.now(),
      userId: user?.id,
      items: cartItems,
      total: totalPrice,
      date: new Date().toISOString(),
      status: "Payée",
      ...form,
    };
    orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));
    clearCart();
    showSuccess("Commande validée !");
    router.push("/dashboard");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Validation de commande</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        <input type="text" placeholder="Adresse" required onChange={(e) => setForm({ ...form, address: e.target.value })} className="w-full border p-2" />
        <input type="text" placeholder="Ville" required onChange={(e) => setForm({ ...form, city: e.target.value })} className="w-full border p-2" />
        <input type="text" placeholder="Code postal" required onChange={(e) => setForm({ ...form, postal: e.target.value })} className="w-full border p-2" />
        <div className="text-right text-xl font-bold">Total : {totalPrice.toFixed(2)} €</div>
        <button type="submit" className="btn-primary w-full">Confirmer la commande</button>
      </form>
    </div>
  
