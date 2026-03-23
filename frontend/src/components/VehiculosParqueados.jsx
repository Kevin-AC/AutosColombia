
import { Link } from 'react-router-dom';

export default function VehiculosParqueados( ) {
    const vehiculosEstacionados = [
        {
            placa: 'MZ9-456',
            modelo: 'CX-6 Silver',
            cel: 'A12',
            entryTime: '12:45 PM',
            status: 'Parked',
            color: 'Silver'
        },
        {
            placa: 'OWF-098',
            modelo: 'BMW Black',
            cel: 'D4',
            entryTime: '01:15 PM',
            status: 'Parked',
            color: 'Black'
        },
        {
            placa: 'LOK-888',
            modelo: 'Honda White',
            cel: 'B9',
            entryTime: '02:30 PM',
            status: 'Parked',
            color: 'White'
        },
        {
            placa: 'JKL-345',
            modelo: 'Kia Red',
            cel: 'A2',
            entryTime: '03:45 PM',
            status: 'Parked',
            color: 'Red'
        },
        {
            placa: 'LOK-888',
            modelo: 'Honda White',
            cel: 'B9',
            entryTime: '02:30 PM',
            status: 'Parked',
            color: 'White'
        },
        {
            placa: 'JKL-345',
            modelo: 'Kia Red',
            cel: 'A2',
            entryTime: '03:45 PM',
            status: 'Parked',
            color: 'Red'
        }, {
            placa: 'LOK-888',
            modelo: 'Honda White',
            cel: 'B9',
            entryTime: '02:30 PM',
            status: 'Parked',
            color: 'White'
        },
        {
            placa: 'JKL-345',
            modelo: 'Kia Red',
            cel: 'A2',
            entryTime: '03:45 PM',
            status: 'Parked',
            color: 'Red'
        }
    ];

    return (
        <section className="bg-white rounded-xl shadow-2xl border border-Neutral overflow-hidden">
            <div className="p-6 border-b border-Neutral">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-TitlePrimary">VehiculosParqueados</h3>
                    <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-Primary/10 text-Primary text-sm font-semibold rounded-sm">
                            {vehiculosEstacionados.length} UNIDADES
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <table className="w-full">
                    <thead className='bg-Neutral'>
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-Secondary uppercase tracking-wider">PLATE</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-Secondary uppercase tracking-wider">VEHICLE</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-Secondary uppercase tracking-wider">CELL</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-Secondary uppercase tracking-wider">ENTRY TIME</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-Secondary uppercase tracking-wider">STATUS</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-Secondary uppercase tracking-wider">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-Neutral">
                        {vehiculosEstacionados.map((vehiculo, index) => (
                            <tr key={index} className="hover:bg-Neutral/30 transition-colors">
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2 py-0.5 border border-TitlePrimary bg-Alert rounded-sm text-sm  text-Tertiary font-bold">
                                        {vehiculo.placa}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div>
                                        <div className="font-medium text-TitlePrimary">{vehiculo.modelo}</div>
                                        <div className="text-sm text-Tertiary">({vehiculo.color})</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium text-Secondary">{vehiculo.cel}</td>
                                <td className="px-6 py-4 text-sm text-Paragraf">{vehiculo.entryTime}</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                                        {vehiculo.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 text-Secondary hover:text-Primary hover:bg-Neutral rounded-xl hover:scale-110 transition-all">
                                            <ion-icon name="create-outline" size={"small"}></ion-icon>
                                        </button>
                                        <button className="p-2 text-Reddot hover:text-red-600 hover:bg-red-50 rounded-xl hover:scale-110 transition-all">
                                            <ion-icon name="trash-outline" size={"small"}></ion-icon>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="p-4 bg-Neutral">
                <Link
                    to="/"
                    className="block w-full text-center text-Primary hover:text-BlueHover font-bold transition-colors py-3"
                >
                    View All Vehicles
                </Link>
            </div>
        </section>
    );
}
