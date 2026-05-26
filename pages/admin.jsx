import { useAuth } from "../contexts/AuthContext";
import { useProducts } from "../contexts/ProductContext";
import ProductForm from "../components/admin/ProductForm";
import { useState, useEffect } from "react";

export default function Admin() {
  const { user } = useAuth();
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const [editing, setEditing] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(JSON.parse(localStorage.getItem("orders") || "[]"));
  }, []);

  if (!user || user.role !== "admin") return <div className="text-center py-20">Accès refusé</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Administration</h1>
      <div className="mb-10">
        <h2 className="text-2xl mb-2">Gestion des produits</h2>
        <button onClick={() => setEditing({})} className="btn-primary mb-4">Ajouter un produit</button>
        {editing && (
          <ProductForm
            initialProduct={editing.id ? editing : null}
            onSubmit={(prod) => {
              if (editing.id) updateProduct(editing.id, prod);
              else addProduct(prod);
              setEditing(null);
            }}
            onCancel={() => setEditing(null)}
          />
        )}
        <div className="grid grid-cols-1 gap-2 mt-4">
          {products.map((p) => (
            <div key={p.id} className="flex justify-between items-center border p-2">
              <span>{p.name} - {p.price} €</span>
              <div>
                <button onClick={() => setEditing(p)} className="text-blue-600 mr-2">Modifier</button>
                <button onClick={() => deleteProduct(p.id)} className="text-red-600">Supprimer</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl mb-2">Commandes clients</h2>
        <table className="w-full border">
          <thead><tr><th>ID</th><th>Date</th><th>Total</th><th>Statut</th></tr></thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="border p-2">{order.id}</td>
                <td className="border p-2">{new Date(order.date).toLocaleDateString()}</td>
                <td className="border p-2">{order.total} €</td>
                <td className="border p-2">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
                  }
