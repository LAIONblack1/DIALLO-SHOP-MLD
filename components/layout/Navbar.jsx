import Link from "next/link";
import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { FiShoppingCart, FiHeart, FiUser } from "react-icons/fi";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            Diallo Shop
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/shop">Boutique</Link>
            <Link href="/wishlist">
              <FiHeart className="inline mr-1" /> Wishlist
            </Link>
            <Link href="/cart" className="relative">
              <FiShoppingCart className="inline mr-1" />
              <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-full px-1">
                {totalItems}
              </span>
              Panier
            </Link>
            {user ? (
              <div className="relative group">
                <button className="flex items-center">
                  <FiUser className="mr-1" /> {user.name}
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block">
                  <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100">
                    Dashboard
                  </Link>
                  {user.role === "admin" && (
                    <Link href="/admin" className="block px-4 py-2 hover:bg-gray-100">
                      Admin
                    </Link>
                  )}
                  <button onClick={logout} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    Déconnexion
                  </button>
                </div>
              </div>
            ) : (
              <Link href="/login">Connexion</Link>
            )}
          </div>
          <button className="md:hidden" onClick={() => setMobileOpen(true)}>
            ☰
          </button>
        </div>
      </div>
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </nav>
  );
}
