import { useWishlist } from "../contexts/WishlistContext";
import ProductCard from "../components/shop/ProductCard";

export default function Wishlist() {
  const { wishlist } = useWishlist();
  if (wishlist.length === 0) return <div className="text-center py-20">Aucun favori.</div>;
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Mes favoris</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlist.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
