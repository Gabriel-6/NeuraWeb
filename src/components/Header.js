import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md text-gray-900 px-8 py-4 z-50 w-full transition-all duration-300">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Neura Web</h1>

        <button
          className="md:hidden text-gray-900 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden md:flex">
          <ul className="flex space-x-4">
            <li>
              <a
                href="#planos"
                className="inline-flex items-center px-4 py-2 border border-gray-900 rounded-lg hover:bg-gray-200 transition"
              >
                Planos
              </a>
            </li>
            <li>
              <a
                href="#atendimentos"
                className="inline-flex items-center px-4 py-2 border border-gray-900 rounded-lg hover:bg-gray-200 transition"
              >
                Atendimentos
              </a>
            </li>
            <li>
              <a
                href="#beneficios"
                className="inline-flex items-center px-4 py-2 border border-gray-900 rounded-lg hover:bg-gray-200 transition"
              >
                Benefícios
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5535997109563"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-100 transition"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <nav
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        } md:hidden`}
      >
        <ul className="flex flex-col text-center mt-4">
          <li>
            <a
              href="#planos"
              className="block px-6 py-3 border-b border-gray-300 hover:bg-gray-200 rounded-lg transition"
            >
              Planos
            </a>
          </li>
          <li>
            <a
              href="#atendimentos"
              className="block px-6 py-3 border-b border-gray-300 hover:bg-gray-200 rounded-lg transition"
            >
              Atendimentos
            </a>
          </li>
          <li>
            <a
              href="#beneficios"
              className="block px-6 py-3 border-b border-gray-300 hover:bg-gray-200 rounded-lg transition"
            >
              Benefícios
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/5535997109563"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-6 py-3 text-green-600 border border-green-600 rounded-lg hover:bg-green-100 transition"
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;