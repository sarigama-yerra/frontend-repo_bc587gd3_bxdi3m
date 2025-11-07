import { useMemo, useState } from "react";

const prodottiBase = [
  { id: 1, nome: "Pro Line A1", categoria: "Premium", prezzo: 1299, descrizione: "Prestazioni al top per professionisti.", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop" },
  { id: 2, nome: "Smart Kit S2", categoria: "Accessori", prezzo: 149, descrizione: "Il set essenziale per iniziare.", img: "https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?q=80&w=1200&auto=format&fit=crop" },
  { id: 3, nome: "Eco Home E3", categoria: "Eco", prezzo: 399, descrizione: "Sostenibilità e design.", img: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=1200&auto=format&fit=crop" },
  { id: 4, nome: "Compact C4", categoria: "Standard", prezzo: 249, descrizione: "Compatto, pratico, affidabile.", img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop" },
];

export default function Catalogo({ onApriDettaglio }) {
  const [query, setQuery] = useState("");
  const [categoria, setCategoria] = useState("Tutte");

  const prodotti = useMemo(() => {
    let list = prodottiBase;
    if (categoria !== "Tutte") list = list.filter(p => p.categoria === categoria);
    if (query) list = list.filter(p => p.nome.toLowerCase().includes(query.toLowerCase()));
    return list;
  }, [query, categoria]);

  const categorie = ["Tutte", ...Array.from(new Set(prodottiBase.map(p => p.categoria)))];

  return (
    <section id="catalogo" className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Catalogo</h2>
          <p className="text-gray-600">Esplora i nostri prodotti più richiesti.</p>
        </div>
        <div className="flex gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cerca prodotti..."
            className="px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded-md bg-white"
          >
            {categorie.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {prodotti.map((p) => (
          <article key={p.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
            <img src={p.img} alt={p.nome} className="h-40 w-full object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{p.nome}</h3>
                <span className="text-blue-700 font-bold">€{p.prezzo}</span>
              </div>
              <p className="text-gray-600 text-sm mt-1">{p.descrizione}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-gray-500 bg-gray-100 rounded px-2 py-1">{p.categoria}</span>
                <button onClick={() => onApriDettaglio(p)} className="text-blue-700 hover:text-blue-900 font-medium text-sm">Dettagli</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
