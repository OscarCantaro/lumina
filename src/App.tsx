import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicPage from "./PublicPage";
import AdminPage from "./AdminPage";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Router>
      {/* Vercel Web Analytics */}
      <Analytics />

      <Routes>
        {/* Página pública */}
        <Route path="/" element={<PublicPage />} />

        {/* Página de administración */}
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
