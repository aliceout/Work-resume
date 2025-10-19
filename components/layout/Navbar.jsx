import NavLink from "/components/links/NavLink";
import navLinksData from "../../public/shared/nav-links.json";

export default function Navbar() {
  const navLinks = navLinksData.items || [];

  return (
    <nav className="flex-col items-center hidden md:flex lg:items-end ">
      <div className="flex items-center p-4 my-auto duration-300 shadow-lg bg-white/90 rounded-xl gap-x-4 text-slate-700 max-w-max dark:bg-black/90">
        {navLinks.map((item) => (
          <NavLink key={item.icon} item={item} />
        ))}
      </div>
    </nav>
  );
}
