import { NavLink } from "react-router-dom";
import { navLinks } from "../data/nav-links";
import EmailSubscription from "./email-subscription";
import { Copyright, Facebook, Instagram, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center max-w-10/12 mx-auto py-12 gap-y-6">
      <h2 className="font-bold text-6xl text-[#1F392C]">
        We are waiting for you to contact us
      </h2>
      <p className="text-xl text-[#1F392C]">
        You can write to us at anytime and get an instant response
      </p>
      <div className="my-8">
        <EmailSubscription />
      </div>
      <nav className="w-full flex justify-between items-center px-30">
        <h4 className="font-medium text-2xl flex items-center gap-x-2">
          <Copyright size={30} />
          Copywriting
        </h4>
        <ul className="flex justify-center items-center gap-x-8 gap-y-4">
          {navLinks.map((link) => (
            <li key={link.id} className="text-xl font-medium text-[#1F392C]">
              {link.name}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center gap-x-4">
          <NavLink to="https://www.google.com/" className="cursor-pointer">
            <Facebook size={38} />
          </NavLink>
          <NavLink to="https://www.google.com/" className="cursor-pointer">
            <Instagram size={38} />
          </NavLink>
          <NavLink to="https://www.google.com/" className="cursor-pointer">
            <Linkedin size={38} />
          </NavLink>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
