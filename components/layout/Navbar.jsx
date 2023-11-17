import navLinksData from "/data/navLinks";
import NavLink from "/components/links/NavLink";

export default function Navbar() {
  return (
    <nav className="flex flex-col items-end ">
      <div className="flex bg-white items-center p-4 my-auto rounded-xl shadow-lg gap-x-4 text-slate-700 max-w-max">
        {navLinksData.map((item) => (
          <NavLink key={item.name} item={item} />
        ))}
      </div>
    </nav>
  );
}
