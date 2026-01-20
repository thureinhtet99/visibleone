import { Layers } from "lucide-react";
import { navLinks } from "../data/nav-links";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#F8F5F0] pt-8 pb-4 text-[#1F392C] border">
      <nav className="max-w-10/12 mx-auto flex justify-between items-center">
        <div className="flex items-center gap-x-2">
          <Layers className="text-[#FF60E6]" />
          <h4 className="font-bold text-2xl">The Creator</h4>
        </div>
        <ul className="flex justify-center items-center gap-x-8 gap-y-4">
          {navLinks.map((link) => (
            <li key={link.id} className="text-xl font-medium text-[#1F392C]">
              {link.name}
            </li>
          ))}
        </ul>
        <button className="bg-[#FF60E6] px-8 py-3 font-semibold rounded-3xl">
          Join the creator
        </button>
      </nav>
    </header>
  );
}

export default Header;
