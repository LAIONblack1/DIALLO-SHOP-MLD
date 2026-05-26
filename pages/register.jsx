import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNotification } from "../contexts/NotificationContext";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();
  const { showSuccess } = useNotification();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(name, email, password);
    showSuccess("Inscription réussie !");
  };

  return (
    <div className="max-w-md mx-auto px-4 py-20">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Inscription</h2>
        <input type="text" placeholder="Nom" value={name} onChange={(e) => setName(e.target.value)} className="w-full border p-2 mb-3" required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border p-2 mb-3" required />
        <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border p-2 mb-4" required />
        <button type="submit" className="btn-primary w-full">S'inscrire</button>
      </form>
    </div>
  );
}
