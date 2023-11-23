import navLinksData from "/data/navLinks";
import NavLink from "/components/links/NavLink";

export default function Navbar() {
  return (
    <nav className="flex-col items-center hidden md:flex lg:items-end ">
      <div className="flex items-center p-4 my-auto duration-300 shadow-lg bg-white/90 rounded-xl gap-x-4 text-slate-700 max-w-max dark:bg-black/90">
        {navLinksData.map((item) => (
          <NavLink key={item.icon} item={item} />
        ))}
      </div>
    </nav>
  );
}
