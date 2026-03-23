import ListaIncidentes from "../components/ListaIncidentes";
import MenuLateral from "../components/MenuLateral";
import NuevoIncidente from "../components/NuevoIncidente";

export default function GestionIncidentes(){
    return(
        <main className="flex bg-MainBackground">
            <article>
                <MenuLateral/>
            </article>
            <section className="flex items-start justify-around gap-4 p-4">
                <NuevoIncidente/>
                <ListaIncidentes/>
            </section>
        </main>
    )
}