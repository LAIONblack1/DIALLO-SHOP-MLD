import { useCart } from "../contexts/CartContext";
import Link from "next/link";
import Image from "next/image";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (cartItems.length === 0)
    return (
      <div className="text-center py-20">
        <p>Votre panier est vide.</p>
        <Link href="/shop" className="btn-primary inline-block mt-4">Continuer vos achats</Link>
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Panier</h1>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex flex-wrap items-center gap-4 border-b pb-4">
            <Image src={item.image} width={80} height={80} className="rounded" alt={item.name} />
            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p>{item.price} €</p>
            </div>
            <input type="number" min="1" value={item.quantity} onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))} className="border w-20 p-1 rounded" />
            <button onClick={() => removeFromCart(item.id)} className="text-red-500">Supprimer</button>
          </div>
        ))}
      </div>
      <div className="text-right mt-6 text-2xl font-bold">Total : {totalPrice.toFixed(2)} €</div>
      <Link href="/checkout" className="btn-primary inline-block mt-4">Commander</Link>
    </div>
  );
}
