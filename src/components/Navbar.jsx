import { ShoppingBag, Home as HomeIcon, Info, MapPin } from "lucide-react";

export default function Navbar({ current, onNavigate }) {
  const linkClass = (view) =>
    `inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
      current === view
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div onClick={() => onNavigate("home")} className="cursor-pointer">
          <span className="text-xl font-semibold text-blue-700">Azienda</span>
          <span className="text-xl font-semibold text-gray-800">Vetrina</span>
        </div>
        <nav className="flex items-center gap-2">
          <button className={linkClass("home")} onClick={() => onNavigate("home")}> 
            <HomeIcon size={18} /> Home
          </button>
          <button className={linkClass("catalogo")} onClick={() => onNavigate("catalogo")}>
            <ShoppingBag size={18} /> Catalogo
          </button>
          <button className={linkClass("info")} onClick={() => onNavigate("info")}>
            <Info size={18} /> Chi siamo
          </button>
          <button className={linkClass("info")} onClick={() => onNavigate("info#dove")}>
            <MapPin size={18} /> Dove ci troviamo
          </button>
        </nav>
      </div>
    </header>
  );
}
