import { Layers } from "lucide-react";
import { navLinks } from "../data/nav-links";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#F8F5F0] pt-4 sm:pt-8 pb-2 sm:pb-4 text-[#1F392C]">
      <nav className="max-w-10/12 mx-auto flex flex-col sm:flex-row justify-between items-center gap-y-4 px-2 sm:px-0">
        <div className="flex items-center gap-x-2 mb-2 sm:mb-0">
          <Layers className="text-[#FF60E6] w-7 h-7 sm:w-8 sm:h-8" />
          <h4 className="font-bold text-xl sm:text-2xl">The Creator</h4>
        </div>
        <ul className="flex flex-wrap justify-center items-center gap-x-4 sm:gap-x-8 gap-y-2 sm:gap-y-4 mb-2 sm:mb-0">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="text-base sm:text-xl font-medium text-[#1F392C]"
            >
              {link.name}
            </li>
          ))}
        </ul>
        <button className="bg-[#FF60E6] px-6 sm:px-8 py-2 sm:py-3 font-semibold rounded-3xl w-full sm:w-auto text-base sm:text-lg">
          Join the creator
        </button>
      </nav>
    </header>
  );
}

export default Header;
