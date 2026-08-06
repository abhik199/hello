import Navbar from "./navbar";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/message/EC3JTTQFZ63RA1"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 left-5 z-50"
      >
        <div className="bg-green-500 hover:bg-green-600 rounded-full p-3 shadow-lg transition">
          <FaWhatsapp className="text-white text-4xl" />
        </div>
      </a>
    </div>
  );
};

export default Layout;