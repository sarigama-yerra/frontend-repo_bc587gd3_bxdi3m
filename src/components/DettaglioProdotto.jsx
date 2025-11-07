import { X } from "lucide-react";

export default function DettaglioProdotto({ prodotto, onClose }) {
  if (!prodotto) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-xl font-semibold text-gray-900">{prodotto.nome}</h3>
          <button onClick={onClose} className="p-2 rounded hover:bg-gray-100"><X size={20} /></button>
        </div>
        <div className="grid md:grid-cols-2 gap-0">
          <img src={prodotto.img} alt={prodotto.nome} className="w-full h-64 object-cover" />
          <div className="p-5">
            <span className="text-xs text-gray-500 bg-gray-100 rounded px-2 py-1">{prodotto.categoria}</span>
            <p className="mt-3 text-gray-700">{prodotto.descrizione} Approfondimento sulle caratteristiche, materiali e garanzia del prodotto.</p>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-2xl font-bold text-blue-700">€{prodotto.prezzo}</span>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Richiedi info</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
