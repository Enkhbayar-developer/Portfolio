import { useEffect } from 'react';

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 z-40 flex w-full flex-col items-center justify-center bg-gray-900 transition-all duration-300 ease-in-out ${
        menuOpen
          ? 'pointer-events-auto h-screen opacity-100'
          : 'pointer-events-none h-0 opacity-0'
      }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 cursor-pointer text-3xl text-white focus:outline-none"
        aria-label="Close menu"
      >
        &times;
      </button>
      <a
        href="#Home"
        onClick={() => setMenuOpen(false)}
        className={`my-4 transform text-2xl font-semibold text-white transition-transform duration-300 ${
          menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
        }`}
      >
        Home
      </a>
      <a
        href="#About"
        onClick={() => setMenuOpen(false)}
        className={`my-4 transform text-2xl font-semibold text-white transition-transform duration-300 ${
          menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
        }`}
      >
        About
      </a>
      <a
        href="#Projects"
        onClick={() => setMenuOpen(false)}
        className={`my-4 transform text-2xl font-semibold text-white transition-transform duration-300 ${
          menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
        }`}
      >
        Projects
      </a>
      <a
        href="#Contact"
        onClick={() => setMenuOpen(false)}
        className={`my-4 transform text-2xl font-semibold text-white transition-transform duration-300 ${
          menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
        }`}
      >
        Contact
      </a>
      <a
        href="#Resume"
        onClick={() => setMenuOpen(false)}
        className={`my-4 transform text-2xl font-semibold text-white transition-transform duration-300 ${
          menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
        }`}
      >
        Resume
      </a>
    </div>
  );
};
