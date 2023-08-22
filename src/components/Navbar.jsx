import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/" className="flex-1">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-between items-center gap-8 max-lg:hidden text-lg text-slate-gray">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="font-montserrat leading-normal">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Menu" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
