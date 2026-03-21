const vehicleData = [
    { placa: 'FGT-902', celda: 'A2', entrada: '08:15 AM' },
    { placa: 'KLS-118', celda: 'A5', entrada: '09:30 AM' },
    { placa: 'MBW-452', celda: 'B1', entrada: '10:05 AM' },
    { placa: 'NMX-772', celda: 'B2', entrada: '10:22 AM' },
    { placa: 'PTA-201', celda: 'B6', entrada: '11:15 AM' },
];

export default function VehiclesTable (){
    return (
        <div className="bg-MainBackground  w-[385px]">
            <div className="mb-5">
                <h3 className="text-3xl font-medium text-PrimaryInverted leading-tight">Vehículos Actuales</h3>
                <p className="text-lg text-Paragraf mt-0.5 leading-relaxed">Vehículos activos en sistema</p>
            </div>

            
            <div className="w-full">
                <table className="w-full text-lg">
                    <thead className="bg-Primary/10">
                        <tr className="border-b-2 border-Neutral/50 ">
                            <th className="py-4 px-6 text-left font-semibold text-Tertiary">PLACA</th>
                            <th className="py-4 px-6 text-left font-semibold text-Tertiary w-16">CELDA</th>
                            <th className="py-4 px-6 text-left font-semibold text-Tertiary w-20">ENTRADA</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vehicleData.map((row) => (
                            <tr key={row.placa} className="border-b border-Neutral/30 last:border-b-0 bg-white hover:bg-Neutral/20 group hover:scale-[1.02] hover:-translate-x-1 transition-all duration-300 ease-out">
                                <td className="py-3.5 px-6 font-semibold text-Primary">{row.placa}</td>
                                <td className="py-3.5 px-6 text-Secondary">{row.celda}</td>
                                <td className="py-3.5 px-6 text-Paragraf">{row.entrada}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            <div className="h-12 bg-Primary/10 flex mt-2 rounded-sm">
                <button className="text-BlueHover/70  font-bold block mx-auto ">
                    VER TODOS LOS REGISTROS
                </button>
            </div>
        </div>
    );
};
