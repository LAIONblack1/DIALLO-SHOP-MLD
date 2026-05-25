import { useState } from "react";
import { useProducts } from "../contexts/ProductContext";
import ProductCard from "../components/shop/ProductCard";
import ProductFilters from "../components/shop/ProductFilters";

export default function Shop() {
  const { products } = useProducts();
  const [filtered, setFiltered] = useState(products);

  const handleFilter = ({ category, search, minPrice, maxPrice }) => {
    let results = products;
    if (category !== "tous") results = results.filter((p) => p.category === category);
    if (search) results = results.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
    results = results.filter((p) => p.price >= minPrice && p.price <= maxPrice);
    setFiltered(results);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nos produits</h1>
      <ProductFilters onFilter={handleFilter} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
      }
