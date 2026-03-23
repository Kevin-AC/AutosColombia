import EntradaVehiculo from "../components/EntradaVehiculos"
import MenuLateral from "../components/MenuLateral"
import SalidaVehiculo from "../components/SalidaVehiculo"
import VehiculosParqueados from "../components/VehiculosParqueados"


export default function GestionVehiculos(){
    return(
        <main className="flex gap-6 bg-MainBackground">
                    <article className="w-auto">
                        <MenuLateral />
                    </article>
                    <section className="w-full flex justify-center gap-8">
                        <div className="mt-6 flex flex-col gap-6 ">
                            <EntradaVehiculo />
                            <SalidaVehiculo/>
                        </div>
                        <div className="mt-6">
                            <VehiculosParqueados />
                        </div>
                    </section>
                          
        
        </main>
    )
}