import { Outlet } from "react-router-dom";
import "./Layout.css";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export default function Layout() {
  return (
    <div className="layout-container">
      {/* Sidebar fixa na esquerda */}
      <Sidebar />
      {/* Área à direita: navbar + conteúdo */}
      <div className="main-area">
        <Navbar />
        <main className="main-content">
          <Outlet />
        </main>
      <Footer />
      </div>
    </div>
  );
}
