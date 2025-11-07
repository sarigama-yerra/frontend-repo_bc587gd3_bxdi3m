export default function Hero({ onShop }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center relative">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Vetrina aziendale elegante e moderna
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Presenta i tuoi prodotti, racconta la tua storia e aiuta i clienti a trovarti. Tutto in un'unica pagina fluida e responsive.
          </p>
          <div className="mt-8 flex gap-3">
            <button onClick={onShop} className="px-5 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition">
              Guarda il catalogo
            </button>
            <a href="#chi-siamo" className="px-5 py-3 bg-white border border-gray-200 text-gray-800 rounded-md font-medium hover:bg-gray-50 transition">
              Scopri chi siamo
            </a>
          </div>
        </div>
        <div className="relative aspect-square md:aspect-auto">
          <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-blue-200 via-blue-100 to-emerald-100" />
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-white/70 rounded-xl backdrop-blur shadow" />
          <div className="absolute -top-6 -left-6 w-20 h-20 bg-blue-600 rounded-full opacity-20" />
        </div>
      </div>
    </section>
  );
}
