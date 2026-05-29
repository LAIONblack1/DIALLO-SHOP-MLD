import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Checkout() {
  const router = useRouter();

  useEffect(() => {
    // Redirection vers l'accueil
    router.push("/");
  }, [router]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "24px",
        fontWeight: "bold",
      }}
    >
      Chargement...
    </div>
  );
}
