import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo2.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const navLinkClass = ({ isActive }) =>
    `text-base font-semibold transition-all duration-300 ${
      isActive
        ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
        : "text-white hover:text-yellow-400"
    }`;

  const goHome = () => {
    setOpen(false);
    navigate("/");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black border-b border-yellow-500">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          onClick={goHome}
          className="h-16 w-auto object-contain select-none cursor-pointer"
        />

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/blog" className={navLinkClass}>
            Blog
          </NavLink>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() =>
              window.open(
                "https://wa.me/message/EC3JTTQFZ63RA1",
                "_blank"
              )
            }
            className="px-5 py-2 rounded-md bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
          >
            Login
          </button>

          <button
            onClick={() =>
              window.open(
                "https://wa.me/message/EC3JTTQFZ63RA1",
                "_blank"
              )
            }
            className="px-5 py-2 rounded-md bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
          >
            Registration
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-yellow-500">
          <nav className="flex flex-col gap-5 p-5">

            <NavLink
              to="/"
              className={navLinkClass}
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={navLinkClass}
              onClick={() => setOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/blog"
              className={navLinkClass}
              onClick={() => setOpen(false)}
            >
              Blog
            </NavLink>

            <button
              onClick={() =>
                window.open(
                  "https://wa.me/message/EC3JTTQFZ63RA1",
                  "_blank"
                )
              }
              className="bg-yellow-400 text-black py-2 rounded-md font-semibold w-full"
            >
              Login
            </button>

            <button
              onClick={() =>
                window.open(
                  "https://wa.me/message/EC3JTTQFZ63RA1",
                  "_blank"
                )
              }
              className="bg-yellow-400 text-black py-2 rounded-md font-semibold w-full"
            >
              Registration
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;