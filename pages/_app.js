import { AuthProvider } from "../contexts/AuthContext";
import { CartProvider } from "../contexts/CartContext";
import { WishlistProvider } from "../contexts/WishlistContext";
import { ProductProvider } from "../contexts/ProductContext";
import { NotificationProvider } from "../contexts/NotificationContext";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <NotificationProvider>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <ProductProvider>
              <Layout>
                <Component {...pageProps} />
                <Toaster position="top-right" />
              </Layout>
            </ProductProvider>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </NotificationProvider>
  );
}
