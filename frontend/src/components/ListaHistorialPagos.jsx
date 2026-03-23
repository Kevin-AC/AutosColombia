export default function ListaHistorialPagos() {

    const pagos = [
        {
            id: "#TX-88291",
            nombre: "Carlos Mendoza",
            placa: "ABC-123",
            fecha: "Oct 24, 2023",
            estado: "verified",
            monto: "$120.00"
        },
        {
            id: "#TX-88288",
            nombre: "Lucia Gomez",
            placa: "XYZ-789",
            fecha: "Oct 22, 2023",
            estado: "verified",
            monto: "$120.00"
        },
        {
            id: "#TX-88285",
            nombre: "Roberto Silva",
            placa: "PQR-456",
            fecha: "Oct 20, 2023",
            estado: "verified",
            monto: "$120.00"
        },
        {
            id: "#TX-88280",
            nombre: "Sonia Peralta",
            placa: "KKK-001",
            fecha: "Oct 19, 2023",
            estado: "rejected",
            monto: "$145.00"
        },
    ];

    const estadoStyles = {
        verified: "bg-Primary/10 text-Primary",
        rejected: "bg-Reddot/10 text-Reddot"
    };

    return (
        <section className="w-full bg-white rounded-xl shadow-lg border border-Neutral flex flex-col">
            <div className="p-6 flex items-center justify-between border-b border-Neutral">
                <h3 className="title">Historial de Pagos</h3>
                <div className="flex items-center gap-3">

                    <button className="flex items-center gap-2 px-3 py-2 bg-Neutral rounded-lg text-Secondary text-sm">
                        <ion-icon name="calendar-outline"></ion-icon>
                        Last 30 Days
                    </button>

                    <button className="flex items-center gap-2 px-3 py-2 bg-Neutral rounded-lg text-Secondary text-sm">
                        <ion-icon name="filter-outline"></ion-icon>
                        All Users
                    </button>

                    <button className="p-2 bg-Neutral rounded-lg text-Secondary">
                        <ion-icon name="download-outline"></ion-icon>
                    </button>

                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">

                    <thead className="bg-Neutral text-xs text-Tertiary uppercase">
                        <tr>
                            <th className="px-6 py-3 text-left">Transaction ID</th>
                            <th className="px-6 py-3 text-left">User / Vehicle</th>
                            <th className="px-6 py-3 text-left">Date</th>
                            <th className="px-6 py-3 text-left">Status</th>
                            <th className="px-6 py-3 text-right">Amount</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-Neutral">

                        {pagos.map((pago, index) => (
                            <tr key={index} className="hover:bg-Neutral/40 transition">

                                
                                <td className="px-6 py-4 text-Secondary">
                                    {pago.id}
                                </td>

                        
                                <td className="px-6 py-4">
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-TitlePrimary">
                                            {pago.nombre}
                                        </span>
                                        <span className="text-sm text-Tertiary">
                                            Plate: {pago.placa}
                                        </span>
                                    </div>
                                </td>

                           
                                <td className="px-6 py-4 text-Secondary">
                                    {pago.fecha}
                                </td>

                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${estadoStyles[pago.estado]}`}>
                                        <span className="w-2 h-2 rounded-full bg-current"></span>
                                        {pago.estado.toUpperCase()}
                                    </span>
                                </td>

                        
                                <td className="px-6 py-4 text-right font-semibold text-TitlePrimary">
                                    {pago.monto}
                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>
            </div>
        </section>
    );
}