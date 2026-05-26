import { useState } from "react";

export default function ProductForm({ initialProduct, onSubmit, onCancel }) {
  const [form, setForm] = useState(
    initialProduct || { name: "", price: "", category: "", image: "", stock: "", description: "" }
  );

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...form, price: parseFloat(form.price), stock: parseInt(form.stock) });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
      <input name="name" placeholder="Nom" value={form.name} onChange={handleChange} required className="w-full border p-2" />
      <input name="price" type="number" placeholder="Prix" value={form.price} onChange={handleChange} required className="w-full border p-2" />
      <input name="category" placeholder="Catégorie" value={form.category} onChange={handleChange} required className="w-full border p-2" />
      <input name="image" placeholder="URL image" value={form.image} onChange={handleChange} required className="w-full border p-2" />
      <input name="stock" type="number" placeholder="Stock" value={form.stock} onChange={handleChange} required className="w-full border p-2" />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="w-full border p-2" />
      <div className="flex gap-2">
        <button type="submit" className="btn-primary">Enregistrer</button>
        <button type="button" onClick={onCancel} className="bg-gray-300 px-4 py-2 rounded">Annuler</button>
      </div>
    </form>
  );
}
