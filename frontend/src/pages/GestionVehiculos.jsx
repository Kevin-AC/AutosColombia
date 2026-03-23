import EntradaVehiculo from "../components/EntradaVehiculos"
import MenuLateral from "../components/MenuLateral"
import SalidaVehiculo from "../components/SalidaVehiculo"
import VehiculosParqueados from "../components/VehiculosParqueados"


export default function GestionVehiculos(){
    return(
        <main className="h-screen flex pr-4 gap-6 bg-MainBackground">
                    <article className="w-auto">
                        <MenuLateral />
                    </article>
                    <section className="w-full flex items-center justify-center gap-8">
                        <div className="w-1/2 flex flex-col gap-2 ">
                            <EntradaVehiculo />
                            <SalidaVehiculo/>
                        </div>
                        <div className="w-full h-[90vh]">
                            <VehiculosParqueados />
                        </div>
                    </section>
                          
        
        </main>
    )
}