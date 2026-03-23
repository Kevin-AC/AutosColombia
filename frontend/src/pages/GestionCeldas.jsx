import MenuLateral from "../components/MenuLateral"
import EstadoDeCelda from "../components/EstadoDeCelda"
import CellCard from "../components/CellCard"
export default function GestionVehiculos(){
    const celdas = [
        { id: 'A1', estado: 'ocupado' },
        { id: 'A2', estado: 'libre' },
        { id: 'A3', estado: 'ocupado' },
        { id: 'A4', estado: 'libre' },
        { id: 'A5', estado: 'ocupado' },
        { id: 'A6', estado: 'ocupado' },
        { id: 'A7', estado: 'libre' },
        { id: 'A8', estado: 'ocupado' },
        
    ];
    return(
        <main className="h-screen flex pr-4 gap-6 bg-MainBackground">
            <article className="w-auto">
                <MenuLateral />
            </article>
            <section className="w-full h-screen flex flex-col justify-center gap-16">
                <div className="w-full flex justify-between">
                    <div className="text-TitlePrimary">
                        <h3 className="title">Gestion Celdas</h3>
                        <p>Estado de celdas en tiempo real</p>
                    </div>
                    <div className="flex gap-4">
                        <aside className="w-40 h-16 p-4 flex items-center justify-between bg-white shadow rounded-xl">
                            <span className="rounded-full w-4 h-4  bg-BlueHover"></span>
                            <p className="font-bold text-sm flex flex-col text-Paragraf/70 uppercase">Availabe<span className="text-xl  text-TitlePrimary">42</span></p>
                        </aside>
                        <aside className="w-40 h-16 p-4 flex items-center justify-between bg-white shadow rounded-xl">
                            <span className="rounded-full w-4 h-4  bg-Reddot"></span>
                            <p className="font-bold text-sm flex flex-col text-Paragraf/70 uppercase">Occupied<span className="text-xl  text-TitlePrimary">12</span></p>
                        </aside>
                    </div>
                </div>
                <section className="w-full flex flex-row-reverse gap-10 ">
                    <EstadoDeCelda/>
                    <div className="w-full h-[75vh] rounded-xl bg-Neutral p-4 flex flex-wrap gap-4">
                        {celdas.map((celda) => (
                            <CellCard
                                key={celda.id}
                                title={celda.id}
                                estado={celda.estado}
                            />
                        ))}
                        
                    </div>
                </section>
            </section>
            
        
        </main>
    )
}