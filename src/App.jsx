import './App.css';
import './index.css';
import { LoadingScreen } from './components/LoadingScreen';
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { MobileMenu } from './components/MobileMenu';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`transition-opcity min-h-screen duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
        <footer className="flex items-center justify-center py-10">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Enkhbayar. All rights reserved.
          </p>
          <div className="right-0 bottom-0 left-0 z-50 flex items-center justify-center bg-black p-4 text-gray-400">
            <p className="text-sm">
              Made with <span className="text-red-500">&hearts;</span> by
              Enkhbayar
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
