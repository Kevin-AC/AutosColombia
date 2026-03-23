import { useState } from 'react';

export default function ListaUsuarios() {
    const [filtro, setFiltro] = useState('');
    const [usuarios] = useState([
        {
            id: 'US892',
            nombre: 'Carlos Arturo Peña',
            contacto: '312 4587',
            email: 'cpena@gmail.com',
            mensual: '$80.000',
            marca: 'Mazda',
            modelo: 'CX-5',
            placa: 'GHZ-545'
        },
        {
            id: 'US889',
            nombre: 'Beatriz Moreno',
            contacto: '300 4233',
            email: 'beatriz@empresa.com',
            mensual: '$120.000',
            marca: 'Toyota',
            modelo: 'Corolla',
            placa: 'KLO-901'
        },
        {
            id: 'US882',
            nombre: 'Felipe Santamaria',
            contacto: '315 9087',
            email: 'felipe@logan.com',
            mensual: '$150.000',
            marca: 'Renault',
            modelo: 'Logan',
            placa: 'PWZ-320'
        },
        {
            id: 'US881',
            nombre: 'Marta Gómez',
            contacto: '310 8655',
            email: 'marta@proyectos.com',
            mensual: '$80.000',
            marca: 'Chevrolet',
            modelo: 'Onix',
            placa: 'ZYX-789'
        }
    ]);

    const usuariosFiltrados = usuarios.filter(usuario =>
        usuario.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
        usuario.id.toLowerCase().includes(filtro.toLowerCase())
    );

    const exportar = () => {
        console.log('Exportando usuarios...');
    };

    return (
        <section className="bg-white rounded-lg shadow-xl border border-gray-200 h-4/5">
            <article className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4 p-7">
                <div>
                    <h1 className="text-3xl font-bold text-TitlePrimary">Lista de usuarios</h1>
                    <p className="text-Paragraf mt-1">Muestra todos los usuarios registrados en el sistema</p>
                </div>
                <div className="flex flex-col items-center sm:flex-row gap-3">
                    <div className="relative">
                        <select
                            value={filtro}
                            onChange={(e) => setFiltro(e.target.value)}
                            className="w-full sm:w-48 px-4 py-2.5 border border-Secondary rounded-lg bg-white text-Secondary focus:ring-2 focus:ring-Primary focus:border-Primary outline-none appearance-none bg-no-repeat bg-right"
                        >
                            <option value="">Filtrar</option>
                            <option value="US">Por ID</option>
                            <option value="Carlos">Por nombre</option>
                        </select>
                    </div>
                    <button
                        onClick={exportar}
                        className="buttonSubmit h-12 px-4"
                    >
                        Exportar
                    </button>
                </div>
            </article>
            <article className="max-w-7xl mx-auto ">
                
                        <table className="w-full">
                            <thead>
                                <tr className="bg-Neutral w-full">
                                    <th className="px-6 py-5 text-left text-xs font-semibold text-Secondary uppercase tracking-wider">
                                        USUARIO
                                    </th>
                                    <th className="px-6 py-5 text-left text-xs font-semibold text-Secondary uppercase tracking-wider">
                                        TITULAR
                                    </th>
                                    <th className="px-6 py-5 text-left text-xs font-semibold text-Secondary uppercase tracking-wider">
                                        CONTACTO
                                    </th>
                                    <th className="px-6 py-5 text-left text-xs font-semibold text-Secondary uppercase tracking-wider">
                                        MENSUALIDAD
                                    </th>
                                    <th className="px-6 py-5 text-left text-xs font-semibold text-Secondary uppercase tracking-wider">
                                        ACCIONES
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-Neutral">
                                {usuariosFiltrados.map((usuario) => (
                                    <tr key={usuario.id} className="hover:bg-Neutral/50 transition-colors">
                                        <td className="px-6 py-5 whitespace-nowrap">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-Primary text-white">
                                                {usuario.id}
                                            </span>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div>
                                                <div className="text-sm font-medium text-TitlePrimary  ">{usuario.nombre}</div>
                                                <p className='space-x-1'>
                                                    <span className="text-sm text-Tertiary  ">{usuario.marca} {usuario.modelo}</span>
                                                    <span className="px-2 py-0.5  border border-TitlePrimary bg-Alert rounded-sm text-sm  text-Tertiary font-bold">{usuario.placa}</span>
                                                </p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 whitespace-nowrap text-sm text-Secondary">
                                            {usuario.contacto}
                                            <div className="text-xs text-Tertiary truncate max-w-xs">{usuario.email}</div>
                                        </td>
                                        <td className="px-6 py-5 whitespace-nowrap">
                                            <span className="text-lg font-bold text-Primary">{usuario.mensual}</span>
                                        </td>
                                        <td className="px-6 py-5 whitespace-nowrap text-sm font-medium">
                                            <div className="flex items-center gap-2">
                                                <button className="text-Primary hover:text-BlueHover p-1 -m-1 rounded-lg hover:bg-Primary/10 transition-all">
                                                    <ion-icon name="create-outline" size={"small"}></ion-icon>
                                                </button>
                                                <button className="text-Reddot hover:text-red-600 p-1 -m-1 rounded-lg hover:bg-red-50 transition-all">
                                                    <ion-icon name="trash-outline" size={"small"}></ion-icon>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    <div className="px-6 py-4 bg-Neutral/50  border-Neutral">
                        <p className="text-sm text-Paragraf">
                            Mostrando <span className="font-semibold text-TitlePrimary">{usuariosFiltrados.length}</span> de{' '}
                            <span className="font-semibold text-TitlePrimary">{usuarios.length}</span> usuarios
                        </p>
                    </div>
            </article>
        </section>
    );
}
