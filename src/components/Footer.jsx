import { Github, Mail, Twitter, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-zinc-300 py-8 px-4 animate-fade-in">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left Side - Logo and Tagline */}
        <div className="flex items-center gap-3 text-xl font-bold text-white">
          <Shield className="text-[#F4A261] w-6 h-6" />
          SheriVerse
        </div>

        {/* Center - Links */}
        <div className="flex space-x-6 text-sm font-medium">
          <a
            href="/about"
            className="hover:text-white transition-colors duration-300"
          >
            About
          </a>
          <a
            href="/contact"
            className="hover:text-white transition-colors duration-300"
          >
            Contact
          </a>
          <a
            href="/terms"
            className="hover:text-white transition-colors duration-300"
          >
            Terms
          </a>
        </div>

        {/* Right Side - Icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:support@sheriverse.com"
            className="hover:text-white transition duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-6 text-xs text-center text-zinc-500">
        &copy; {new Date().getFullYear()} SheriVerse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
