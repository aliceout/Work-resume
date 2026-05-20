import Sidebar from "./Sidebar";
import UtilCorner from "./UtilCorner";

export default function AppShell({ children }) {
  return (
    <div className="proto-shell relative min-h-screen text-ink bg-surface font-sans">
      <div aria-hidden className="proto-blob proto-blob-azur" />
      <div aria-hidden className="proto-blob proto-blob-corail" />

      <div className="relative z-10 flex flex-col lg:flex-row">
        <Sidebar />
        <main className="flex-1 lg:ml-[268px] min-h-screen">{children}</main>
      </div>

      <UtilCorner />
    </div>
  );
}
