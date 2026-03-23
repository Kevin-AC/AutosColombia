import { useState } from 'react';

export default function RegistroUsuario() {
    const [formData, setFormData] = useState({
        nombreCompleto: '',
        nacionalId: '',
        documento: '',
        marca: '',
        modelo: '',
        placa: '',
        phone: '',
        monthlyFee: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Usuario registrado:', formData);
        
    };

    return (
        <div className="max-w-md p-8 h-fit bg-white rounded-lg shadow-xl border border-Neutral">
            <div className="text-center mb-3">
                <h2 className="title ">Nuevo registro</h2>
                <div className="w-30 h-0.5 bg-Primary mx-auto"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-2">
                
                <div>
                    <label className="block text-sm font-medium text-Secondary mb-2">
                        Nombre completo del titular
                    </label>
                    <input
                        type="text"
                        name="nombreCompleto"
                        value={formData.nombreCompleto}
                        onChange={handleChange}
                        className="inputRegistro"
                        placeholder="Nombre completo"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-Secondary mb-2">
                        Nacional ID del titular
                    </label>
                    <input
                        type="text"
                        name="nacionalId"
                        value={formData.nacionalId}
                        onChange={handleChange}
                        className="inputRegistro"
                        placeholder="Documento de identidad"
                        required
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-Secondary mb-1">Marca</label>
                        <input
                            type="text"
                            name="marca"
                            value={formData.marca}
                            onChange={handleChange}
                            className="inputRegistro"
                            placeholder="Ej. Mazda"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-Secondary mb-1">Modelo</label>
                        <input
                            type="text"
                            name="modelo"
                            value={formData.modelo}
                            onChange={handleChange}
                            className="inputRegistro"
                            placeholder="Ej. CX-5"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-Secondary mb-1">Placa</label>
                        <input
                            type="text"
                            name="placa"
                            value={formData.placa}
                            onChange={handleChange}
                            className="inputRegistro uppercase"
                            placeholder="ABC-123"
                            maxLength="7"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-Secondary mb-1">Teléfono</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="inputRegistro"
                            placeholder="300 0000"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-Secondary mb-2">
                        Monthly Fee (COP)
                    </label>
                    <input
                        type="number"
                        name="monthlyFee"
                        value={formData.monthlyFee}
                        onChange={handleChange}
                        className="inputRegistro"
                        placeholder="$ 0"
                    />
                </div>

                <button
                    type="submit"
                    className="buttonSubmit"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Registrar Usuario
                </button>
            </form>

         
            <div className="mt-8 p-4 bg-Primary/10 rounded-xl">
                <div className="flex flex-col items-start gap-3 text-sm  ">
                    <h3 className='font-bold  text-Primary'>Facturación Mensual</h3>
                    <p className=' text-Primary/70'>Las facturas se generan automáticamente al día 1 de cada mes.</p>
                </div> 
            </div>
        </div>
    );
}
