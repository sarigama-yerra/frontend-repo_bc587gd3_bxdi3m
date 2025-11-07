export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="font-semibold text-gray-900">AziendaVetrina</h4>
          <p className="mt-2 text-gray-600">Soluzioni di qualità per la tua attività. Siamo qui per aiutarti a crescere.</p>
        </div>
        <div>
          <h5 className="font-medium text-gray-900">Contatti</h5>
          <ul className="mt-2 text-gray-600 space-y-1">
            <li>Tel: +39 02 1234 5678</li>
            <li>Email: info@aziendavetrina.it</li>
            <li>P.IVA: IT01234567890</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-gray-900">Orari</h5>
          <ul className="mt-2 text-gray-600 space-y-1">
            <li>Lun-Ven: 9:00 - 18:00</li>
            <li>Sab: 9:00 - 13:00</li>
            <li>Dom: Chiuso</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-gray-900">Dove siamo</h5>
          <p className="mt-2 text-gray-600">Via Esempio 123, Milano</p>
          <a href="#mappa" className="text-blue-700 hover:text-blue-900">Apri mappa</a>
        </div>
      </div>
      <div className="border-t text-center text-xs text-gray-500 py-4">© {new Date().getFullYear()} AziendaVetrina. Tutti i diritti riservati.</div>
    </footer>
  );
}
