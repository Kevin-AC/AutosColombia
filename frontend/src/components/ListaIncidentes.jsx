import { useState } from 'react';

export default function ListaIncidentes() {
  const [filtro, setFiltro] = useState('All');
  const records = [
    {
      id: 'INC-489',
      placa: 'ABC',
      vehicle: 'Mazda CX-5',
      type: 'Damage',
      icon:'car-sport-outline',
      status: 'PENDING'
    },
    {
      id: 'INC-488',
      placa: 'LMP',
      vehicle: 'Toyota Hilux',
      type: 'Blockage',
      icon: 'ban-outline',
      status: 'IN PROGRESS'
    },
    {
      id: 'INC-487',
      placa: 'K01',
      vehicle: 'Tesla Model 3',
      type: 'Other',
      icon:'warning-outline',
      status: 'RESOLVED'
    }
  ];

  const statusColors = {
    PENDING: 'bg-orange-100 text-orange-800 border-orange-200',
    'IN PROGRESS': 'bg-blue-100 text-blue-800 border-blue-200',
    RESOLVED: 'bg-green-100 text-green-800 border-green-200'
  };


  return (
    <section className="bg-white rounded-3xl shadow-2xl border border-Neutral overflow-hidden">
   
      <div className="p-6 border-b border-Neutral bg-linear-to-r from-Primary/5 to-BlueHover/5">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <h3 className="title">Listado de Incidentes</h3>
          
          <div className="w-64 flex  gap-3 ">
            <select 
              value={filtro} 
              onChange={(e) => setFiltro(e.target.value)}
              className="px-4 py-2 border border-Neutral rounded-xl bg-white text-Secondary outline-none focus:ring-2 focus:ring-Primary focus:border-Primary text-sm font-medium"
            >
              <option>All</option>
              <option>PENDING</option>
              <option>IN PROGRESS</option>
              <option>RESOLVED</option>
            </select>
       
            <button className="buttonSubmit ">
               Export
            </button>
          </div>
        </div>
      </div>

   
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead className="bg-Neutral">
            <tr>
              <th className="px-6 py-5 text-left text-xs font-bold text-Secondary uppercase tracking-wider">ID</th>
              <th className="px-6 py-5 text-left text-xs font-bold text-Secondary uppercase tracking-wider">Vehicle/Plate</th>
              <th className="px-6 py-5 text-left text-xs font-bold text-Secondary uppercase tracking-wider">Type</th>
              <th className="px-6 py-5 text-left text-xs font-bold text-Secondary uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-Neutral/50">
            {records.map((record) => (
              <tr key={record.id} className="hover:bg-Neutral/50 transition-colors">
                <td className="px-6 py-5 font-mono text-sm font-bold text-Primary">
                  {record.id}
                </td>
                <td className="px-6 py-5">
                  <div>
                    <div className="font-bold text-TitlePrimary">{record.vehicle}</div>
                    <div className="text-sm text-Tertiary font-mono">{record.placa}</div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-Neutral text-Secondary">
                    {<ion-icon name={record.icon}></ion-icon>}
                    {record.type}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <span className={`inline-flex px-4 py-2 rounded-xl text-sm font-bold border-2 ${statusColors[record.status]}`}>
                    {record.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
