import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Diallo Shop MLD</h1>
        <p className="text-xl mt-4">Les meilleurs produits au meilleur prix</p>
        <Link href="/shop" className="inline-block mt-6 bg-secondary px-6 py-3 rounded-lg text-lg">
          Explorer
        </Link>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Nouveautés</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Ici tu peux afficher quelques produits depuis ProductContext */}
          <div className="border rounded p-4 text-center">
            <Image src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab" width={200} height={150} alt="produit" />
            <p className="font-bold mt-2">T-Shirt Premium</p>
            <p>29.99 €</p>
          </div>
          {/* Ajoute d'autres cards si voulu */}
        </div>
      </section>
    </div>
  );
    }
