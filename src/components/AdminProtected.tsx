import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import AdminPanel from "./AdminPanel";
import Login from "./Login";

export default function AdminProtected() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <p className="text-center mt-20">Cargando...</p>;
  }

  if (!user) {
    return <Login onLogin={() => setUser(auth.currentUser)} />;
  }

  return (
    <div>
      {/* Barra superior de administración */}
      <div className="flex justify-between items-center px-6 py-4 bg-gray-800 text-white">
        <h1 className="text-lg font-semibold">Panel de Administración</h1>
        <button
          onClick={() => signOut(auth)}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
        >
          Cerrar sesión
        </button>
      </div>

      {/* Panel principal */}
      <AdminPanel />
    </div>
  );
}
