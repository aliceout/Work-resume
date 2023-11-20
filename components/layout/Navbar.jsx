import navLinksData from "/data/navLinks";
import NavLink from "/components/links/NavLink";

export default function Navbar() {
  return (
    <nav className="flex flex-col items-end ">
      <div className="flex items-center p-4 my-auto bg-white shadow-lg rounded-xl gap-x-4 text-slate-700 max-w-max dark:bg-slate-900/90">
        {navLinksData.map((item) => (
          <NavLink key={item.name} item={item} />
        ))}
      </div>
    </nav>
  );
}
