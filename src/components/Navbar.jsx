import { useEffect } from 'react';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);
  return (
    <nav className="bg-[rgba(10, 10, 10, 0.8)] fixed top-0 z-40 w-full border-b border-white/10 shadow-lg backdrop-blur-lg">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#Home" className="font-mono text-xl font-bold text-white">
            Enkhe<span className="text-blue-500">.Tech</span>
          </a>

          <div
            className="relative z-40 h-5 w-7 cursor-pointer md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden items-center space-x-8 md:flex">
            <a
              href="#Home"
              className="text-white transition-colors hover:text-blue-500"
            >
              Home
            </a>
            <a
              href="#About"
              className="text-white transition-colors hover:text-blue-500"
            >
              About
            </a>
            <a
              href="#Projects"
              className="text-white transition-colors hover:text-blue-500"
            >
              Projects
            </a>
            <a
              href="#Contact"
              className="text-white transition-colors hover:text-blue-500"
            >
              Contact
            </a>
            <a
              href="#Resume"
              className="text-white transition-colors hover:text-blue-500"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
