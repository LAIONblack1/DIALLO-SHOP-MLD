import Link from "next/link";
import Image from "next/image";
import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishlistContext";
import { useNotification } from "../../contexts/NotificationContext";
import { FiHeart, FiShoppingCart } from "react-icons/fi";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { showSuccess } = useNotification();
  const liked = isInWishlist(product.id);

  const handleWishlist = () => {
    if (liked) removeFromWishlist(product.id);
    else addToWishlist(product);
    showSuccess(liked ? "Retiré des favoris" : "Ajouté aux favoris");
  };

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white">
      <Link href={`/product/${product.id}`}>
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded-md"
        />
        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
        <p className="text-primary font-bold">{product.price} €</p>
      </Link>
      <div className="flex justify-between mt-3">
        <button
          onClick={() => addToCart(product)}
          className="flex items-center gap-1 bg-primary text-white px-3 py-1 rounded"
        >
          <FiShoppingCart /> Ajouter
        </button>
        <button onClick={handleWishlist} className={`text-2xl ${liked ? "text-red-500" : "text-gray-400"}`}>
          <FiHeart />
        </button>
      </div>
    </div>
  );
}
