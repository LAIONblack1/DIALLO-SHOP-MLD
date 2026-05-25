import { useRouter } from "next/router";
import { useProducts } from "../../contexts/ProductContext";
import { useCart } from "../../contexts/CartContext";
import Image from "next/image";
import { useState } from "react";

export default function ProductDetail() {
  const { query } = useRouter();
  const { products } = useProducts();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const product = products.find((p) => p.id === parseInt(query.id));

  if (!product) return <div className="text-center py-20">Chargement...</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
      <Image src={product.image} width={500} height={400} className="rounded-lg" alt={product.name} />
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-2xl text-primary mt-2">{product.price} €</p>
        <p className="text-gray-600 mt-4">{product.description}</p>
        <p className="mt-2">Stock : {product.stock}</p>
        <div className="mt-6 flex gap-4">
          <input type="number" min="1" max={product.stock} value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} className="border w-20 p-2 rounded" />
          <button onClick={() => addToCart(product, quantity)} className="btn-primary">Ajouter au panier</button>
        </div>
      </div>
    </div>
  );
}
