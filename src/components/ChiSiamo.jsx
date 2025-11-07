export default function ChiSiamo() {
  return (
    <section id="chi-siamo" className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Chi siamo</h2>
          <p className="mt-4 text-gray-600">
            Siamo un team appassionato che unisce design e tecnologia per creare prodotti affidabili e belli da usare. Crediamo nella qualità, nella trasparenza e nel supporto continuo ai nostri clienti.
          </p>
          <ul className="mt-6 space-y-2 text-gray-700 list-disc pl-5">
            <li>Oltre 10 anni di esperienza nel settore</li>
            <li>Assistenza rapida e dedicata</li>
            <li>Materiali e fornitori certificati</li>
          </ul>
        </div>
        <div className="relative">
          <div className="h-64 rounded-xl bg-gradient-to-tr from-blue-200 via-white to-emerald-100 border border-blue-100" />
          <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-blue-600/10 rounded-lg" />
        </div>
      </div>
    </section>
  );
}
