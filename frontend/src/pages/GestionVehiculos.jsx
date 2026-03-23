import RegistroEntradaVehiculo from "../components/RegistroEntradaVehiculos"
import MenuLateral from "../components/MenuLateral"
import RegistroSalidaVehiculo from "../components/RegistroSalidaVehiculo"
import ListaVehiculosParqueados from "../components/ListaVehiculosParqueados"


export default function GestionVehiculos(){
    return(
        <main className="h-screen flex pr-4 gap-6 bg-MainBackground">
                    <article className="w-auto">
                        <MenuLateral />
                    </article>
                    <section className="flex items-start justify-around gap-4 p-4">
                        <div className="w-1/2 flex flex-col gap-2 ">
                            <RegistroEntradaVehiculo />
                            <RegistroSalidaVehiculo/>
                        </div>
                        <div className="w-full h-[90vh]">
                            <ListaVehiculosParqueados/>
                        </div>
                    </section>
                          
        
        </main>
    )
}