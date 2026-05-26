import Link from "next/link";
import { useAuth } from "../../contexts/AuthContext";
import { FiX } from "react-icons/fi";

export default function MobileMenu({ isOpen, onClose }) {
  const { user, logout } = useAuth();
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-white z-50 p-4">
      <button onClick={onClose} className="absolute top-4 right-4 text-2xl">
        <FiX />
      </button>
      <div className="flex flex-col mt-16 space-y-4 text-lg">
        <Link href="/shop" onClick={onClose}>Boutique</Link>
        <Link href="/wishlist" onClick={onClose}>Wishlist</Link>
        <Link href="/cart" onClick={onClose}>Panier</Link>
        {user ? (
          <>
            <Link href="/dashboard" onClick={onClose}>Dashboard</Link>
            {user.role === "admin" && <Link href="/admin" onClick={onClose}>Admin</Link>}
            <button onClick={() => { logout(); onClose(); }}>Déconnexion</button>
          </>
        ) : (
          <Link href="/login" onClick={onClose}>Connexion</Link>
        )}
      </div>
    </div>
  );
        }
