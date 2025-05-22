import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center gap-3">
        <p className="text-sm sm:text-base">
          © {new Date().getFullYear()} StarBev's Coffee Co. ☕ All rights
          reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-6 mt-2 text-xl">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>
        </div>

        {/* Links */}
        <div className="mt-2 flex flex-wrap justify-center gap-4 text-sm">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </div>

        {/* Signature 😎 */}
        <p className="text-xs mt-2 opacity-70">Made with ❤️ by Gurunada Rao</p>
      </div>
    </footer>
  );
};

export default Footer;
