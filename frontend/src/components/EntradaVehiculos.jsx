import { useState } from 'react';


export default function EntradaVehiculo() {
    const [formData, setFormData] = useState({
        licensePlate: '',
        cellNumber: '',
        entryTime: ''
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value.toUpperCase() });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Entrada registrada:', formData);
        alert('Entrada de vehículo registrada exitosamente');
        
    };

    return (
            <article className="bg-white rounded-xl shadow-xl border border-Neutral p-6">
                    <h1 className="text-2xl font-bold text-TitlePrimary mb-5">Entrada de Vehículo</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-Secondary mb-2 uppercase">
                                    LICENSE PLATE
                                </label>
                                <input
                                    type="text"
                                    name="licensePlate"
                                    value={formData.licensePlate}
                                    onChange={handleChange}
                                    className="inputRegistro"
                                    placeholder="ABC-123"
                                    maxLength={8}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-Secondary mb-2">
                                    CELL NUMBER
                                </label>
                                <input
                                    type="text"
                                    name="cellNumber"
                                    value={formData.cellNumber}
                                    onChange={handleChange}
                                    className="inputRegistro"
                                    placeholder="A-42"
                                    maxLength={10}
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-Secondary mb-2">
                                ENTRY TIME
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="entryTime"
                                    value={formData.entryTime}
                                    onChange={handleChange}
                                    className="inputRegistro"
                                    placeholder='13:30:00'
                                    readOnly
                                />
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-Tertiary"></div>
                            </div>
                        </div>

                        
                        <button
                            type="submit"
                            className="buttonSubmit"
                        >
                            Registrar Entrada
                        </button>
                    </form>
                </article>
    );
}
