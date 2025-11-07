import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Catalogo from "./components/Catalogo";
import ChiSiamo from "./components/ChiSiamo";
import DettaglioProdotto from "./components/DettaglioProdotto";
import Footer from "./components/Footer";

export default function App() {
  const [view, setView] = useState("home");
  const [selezionato, setSelezionato] = useState(null);

  useEffect(() => {
    if (view.startsWith("info#dove")) {
      // scroll a sezione mappa
      const el = document.getElementById("mappa");
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setView("info");
    }
  }, [view]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar current={view} onNavigate={setView} />

      {view === "home" && (
        <>
          <Hero onShop={() => setView("catalogo")} />
          <Catalogo onApriDettaglio={(p) => setSelezionato(p)} />
          <ChiSiamo />
          <section id="mappa" className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-gray-900">Dove ci troviamo</h2>
            <p className="text-gray-600 mt-2">Vieni a trovarci nel nostro showroom.</p>
            <div className="mt-6 rounded-xl overflow-hidden border">
              <iframe
                title="mappa"
                src="https://www.google.com/maps?q=Milano&output=embed"
                className="w-full h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
        </>
      )}

      {view === "catalogo" && (
        <>
          <Catalogo onApriDettaglio={(p) => setSelezionato(p)} />
        </>
      )}

      {view === "info" && (
        <>
          <ChiSiamo />
          <section id="mappa" className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-gray-900">Dove ci troviamo</h2>
            <p className="text-gray-600 mt-2">Vieni a trovarci nel nostro showroom.</p>
            <div className="mt-6 rounded-xl overflow-hidden border">
              <iframe
                title="mappa"
                src="https://www.google.com/maps?q=Milano&output=embed"
                className="w-full h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
        </>
      )}

      <Footer />

      <DettaglioProdotto prodotto={selezionato} onClose={() => setSelezionato(null)} />
    </div>
  );
}
