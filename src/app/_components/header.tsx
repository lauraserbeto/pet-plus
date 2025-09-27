import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLock } from '@fortawesome/free-solid-svg-icons';
import logo2 from '../../../public/logo2.png'
import Image from 'next/image';
import Button from '../../../public/ui/Button/button';

interface HeaderProps {
  setPage: (page: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const Header: React.FC<HeaderProps> = ({ setPage, isMenuOpen, setIsMenuOpen }) => {
  const primaryColor = "#F58B05";
  const navLinks = `cursor-pointer hover:text-[${primaryColor}] transition-colors duration-300`;

  return (
    <header className="bg-white backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div onClick={() => setPage("home")} className="flex items-center cursor-pointer">
          <Image src={logo2} alt="Logo Pet+" className="w-40 h-25" />
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-black font-semibold">
          <a href="#sobre" className={navLinks}>Sobre</a>
          <a href="#contato" className={navLinks}>Contato</a>
          
          <Button onClick={() => setPage("login")} children="Acesso Fornecedor" icon={faLock} />

        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FontAwesomeIcon icon={faBars} className="text-2xl text-[#F58B05]" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="block text-center py-2 text-gray-700 hover:bg-gray-100">Sobre</a>
          <a href="#contato" onClick={() => setIsMenuOpen(false)} className="block text-center py-2 text-gray-700 hover:bg-gray-100">Contato</a>
          <div className="px-6 mt-4 justify-center flex">
             <Button onClick={() => setPage("login")} children="Acesso Fornecedor" icon={faLock} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;