import { useState } from "react";
import { categories } from "../../data/categories";

export default function ProductFilters({ onFilter }) {
  const [category, setCategory] = useState("tous");
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState([0, 500]);

  const applyFilters = () => {
    onFilter({ category, search, minPrice: priceRange[0], maxPrice: priceRange[1] });
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Rechercher..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded"
        >
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>{cat.label}</option>
          ))}
        </select>
        <div>
          <label>Prix max : {priceRange[1]} €</label>
          <input
            type="range"
            min="0"
            max="500"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="w-full"
          />
        </div>
      </div>
      <button onClick={applyFilters} className="mt-3 btn-primary">Filtrer</button>
    </div>
  );
}
