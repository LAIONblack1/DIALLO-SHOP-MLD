import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const allOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    if (user) setOrders(allOrders.filter((o) => o.userId === user.id));
  }, [user]);

  if (!user) return <div className="py-20 text-center">Veuillez vous connecter</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Bonjour, {user.name}</h1>
      <h2 className="text-2xl mb-4">Mes commandes</h2>
      {orders.length === 0 ? (
        <p>Aucune commande passée.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="border p-4 rounded">
              <p>Commande #{order.id} - {new Date(order.date).toLocaleDateString()} - Total : {order.total} € - Statut : {order.status}</p>
              <ul className="ml-4">
                {order.items.map((item) => (
                  <li key={item.id}>{item.name} x {item.quantity}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
