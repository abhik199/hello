import logo from "../assets/logo1.png";
import { NavLink } from "react-router-dom";
import {
  FaTelegramPlane,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black max-w-6xl mx-auto text-gray-300 pt-16 pb-8 px-6 border-t border-gray-700 shadow-[0_-4px_10px_rgba(0,0,0,0.6)]">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        {/* Left Section */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img src={logo} alt="logo" className="w-50 h-20" />
          </div>

          <p className="text-sm leading-7 text-gray-400 text-left">
            India's most trusted sports insights platform. Providing
            data-driven analysis, prediction models, and educational
            resources to sports enthusiasts nationwide.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">

            {/* Telegram */}
            <a
              href="https://t.me/Radhexchangeindia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 hover:bg-yellow-400 hover:text-black transition duration-300"
            >
              <FaTelegramPlane size={18} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/message/EC3JTTQFZ63RA1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 hover:bg-yellow-400 hover:text-black transition duration-300"
            >
              <FaWhatsapp size={18} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/radhe_ep/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 hover:bg-yellow-400 hover:text-black transition duration-300"
            >
              <FaInstagram size={18} />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61590615096163"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 hover:bg-yellow-400 hover:text-black transition duration-300"
            >
              <FaFacebookF size={18} />
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 relative inline-block">
            Quick Links
            <span className="block w-10 h-[3px] bg-yellow-400 mt-1"></span>
          </h3>

          <ul className="space-y-3 text-sm mt-6">

            <li>
              <NavLink
                to="/"
                className="hover:text-yellow-400 transition"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className="hover:text-yellow-400 transition"
              >
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/blog"
                className="hover:text-yellow-400 transition"
              >
                Blog
              </NavLink>
            </li>

            <li className="hover:text-yellow-400 cursor-pointer transition">
              Radhe Exchange Betting App
            </li>

            <li className="hover:text-yellow-400 cursor-pointer transition">
              Radhe Exchange ID
            </li>

            <li className="hover:text-yellow-400 cursor-pointer transition">
              FAQ
            </li>

          </ul>
        </div>

        {/* Betting Platforms */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 relative inline-block">
            Betting Platforms
            <span className="block w-10 h-[3px] bg-yellow-400 mt-1"></span>
          </h3>

          <ul className="space-y-3 text-sm mt-6">
            {[
              "Radhe Exchange Book",
              "Radhe Exchange",
              "IPL Betting ID",
              "Online Betting ID",
            ].map((item, i) => (
              <li
                key={i}
                className="hover:text-yellow-400 cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-400">

        <p className="mb-3">
          © 2026 Radhe Exchange. All rights reserved.
        </p>

        <p className="max-w-7xl leading-7 text-center">
          Radhe Exchange is an educational sports insights platform. All content
          is for informational purposes only. Users must be 18+ to access
          certain features.
        </p>

        <p className="mt-4">
          <span className="hover:text-yellow-400 cursor-pointer">
            Terms & Conditions
          </span>{" "}
          |{" "}
          <span className="hover:text-yellow-400 cursor-pointer">
            Privacy Policy
          </span>
        </p>

      </div>
    </footer>
  );
};

export default Footer;